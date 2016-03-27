<?php

require_once __DIR__.'/bootstrap.php';

$parts = api\getPath();

$action = 'list';
$users = api\getData();
$detail = null;

if ($parts[0] === 'users') {
	$action = 'detail';
	$detail = api\getData($parts[1]);
} else if ($parts[0] === 'api') {
	if (count($parts) === 2) {
		$data = api\getData();
	} else if (count($parts) === 3) {
		$data = api\getData($parts[2]);
	}
	header('Content-type: application/json');
	echo json_encode($data);
	exit;
}

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Easy Learn Tutorial - Isomorphic React.js with PHP</title>

    <link href="http://getbootstrap.com/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>

  <body>
    <div class="container" style="margin-top: 20px;" id="app"></div>

    <script src="/node_modules/jquery/dist/jquery.js"></script>
    <script src="/node_modules/react/dist/react.js"></script>
    <script src="/node_modules/react-dom/dist/react-dom.js"></script>
    <script src="/bundle.js?t=<?= time(); ?>"></script>

    <script>
    ReactDOM.render(
    	<?php /* React.createElement(App, <?= json_encode(['users' => $users, 'info' => $detail]); ?>), */ ?>
    	React.createElement(App, {}), 
    	document.getElementById('app')
	);
    </script>
  </body>
</html>

<?php


// -----------------
// Run `sync.php` first.
// -----------------


if (php_sapi_name() !== 'cli') {
    exit();
}


require_once __DIR__ . '/vendor/autoload.php';

$in = file_get_contents(__DIR__ . '/out');
$in = utf8_encode($in);
$in = json_decode($in, true);

// Hash id's
$playlists = array_map(function ($playlist) {
    $playlist['items'] = array_map(function ($item) {
        if (array_key_exists('id', $item)) {
            unset($item['id']);
        }
        return array_merge($item, ['videoId' => md5($item['videoId'])]);
    }, $playlist['items']);
    return array_merge($playlist, ['id' => md5($playlist['id'])]);
}, $in);

$sitemap = [];

foreach ($playlists as $playlist) {
    $sitemap[] = Eltcom\genPlaylist($playlist);
}

$json = json_encode($sitemap, JSON_PRETTY_PRINT);

if ($json) {
    file_put_contents(Eltcom\SITEMAP_PATH, $json);
} else {
    throw new Exception(Eltcom\getEncodingError(json_last_error()));
}

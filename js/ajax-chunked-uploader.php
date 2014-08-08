<?php

ini_set('memory_limit', '5M');

define('CHUNKING_PATH', '/tmp/');
define('MEDIA_LIB_URL', '/var/www/medialib/');
define('MEDIA_LIB_PUBLIC_URL', 'http://dev.medialib.com/');
define('VALID_TYPE_IMAGE', 'data:image');
define('VALID_TYPE_AUDIO', 'data:audio');


/**
 * @param $path
 * @param $tag
 * @param $count
 * @param $total
 * @param $data
 *
 * @return int
 */
function saveChunk($path, $tag, $count, $total, $data) {
   $dir = $path . $tag . '/';

   if (!is_dir($dir)) {
      mkdir($dir, 0700);
   }

   $filename = $dir . str_pad($count, 5, '0', STR_PAD_LEFT) . '_' . $total;

   return file_put_contents($filename, $data);
}


/**
 * @param $path
 * @param $tag
 * @param $total
 *
 * @return bool
 */
function isDone($path, $tag, $total) {
   $dir = $path . $tag . '/';
   $fi = new FilesystemIterator($dir, \FilesystemIterator::SKIP_DOTS);

   return iterator_count($fi) == $total;
}


/**
 * @param $path
 * @param $tag
 * @param $filetype
 *
 * @return array
 */
function combine($path, $tag, $filetype) {
   $path = $path . $tag . '/';
   $dir = scandir($path);
   $file = '';

   foreach ($dir as $filename) {
      if ($filename != '.' && $filename != '..') {
         $dataUrl = file_get_contents($path . $filename);
         $dataUrl = str_replace(' ', '+', $dataUrl);

         if (preg_match('|' . $filetype . '/(\w+);|', $dataUrl, $format)) {
            $data = explode(';base64,', $dataUrl);
            $dataUrl = $data[1];
            $file = $tag . '.' . $format[1];
         }

         file_put_contents(MEDIA_LIB_URL . $file . '.tmp', $dataUrl, FILE_APPEND);
         unlink($path . $filename);
      }
   }

   $src = MEDIA_LIB_URL . $file . '.tmp';
   $target = MEDIA_LIB_URL . $file;

   $rhandle = fopen($src, 'r');
   stream_filter_append($rhandle, 'convert.base64-decode');

   $whandle = fopen($target, 'w');

   stream_copy_to_stream($rhandle, $whandle);

   fclose($rhandle);
   fclose($whandle);

   unlink($src);
   rmdir($path);

   return ['url' => MEDIA_LIB_PUBLIC_URL . $file];
}

if (!empty($_POST)) {
   $count = (int)$_POST['count'];
   $total = (int)$_POST['totalChunks'];
   $tag = preg_replace('|[^a-zA-Z0-9\_]|', '', $_POST['tag']);
   $data = preg_replace('|[^a-zA-Z0-9\+\/\=\s\;\:\,]|', '', $_POST['data']);
   $data = str_replace(' ', '+', $data);

   $out = [
      'done' => false
   ];

   $wrote = saveChunk(CHUNKING_PATH, $tag, $count, $total, $data);

   if (isDone(CHUNKING_PATH, $tag, $total)) {
      $res = combine(CHUNKING_PATH, $tag, VALID_TYPE_IMAGE);
      $out['done'] = true;
      $out['url'] = $res['url'];
   }

   header('Content-type: application/json; charset=utf-8');
   echo json_encode($out);
   exit;
}

?><!doctype html>
<html>
<head>
   <meta charset="utf-8">
   <!--

                        ___           ___           ___
                       /\__\         /\  \         /\__\
                      /:/ _/_       /::\  \       /:/ _/_         ___
                     /:/ /\__\     /:/\:\  \     /:/ /\  \       /|  |
                    /:/ /:/ _/_   /:/ /::\  \   /:/ /::\  \     |:|  |
                   /:/_/:/ /\__\ /:/_/:/\:\__\ /:/_/:/\:\__\    |:|  |
                   \:\/:/ /:/  / \:\/:/  \/__/ \:\/:/ /:/  /  __|:|__|
                    \::/_/:/  /   \::/__/       \::/ /:/  /  /::::\  \
                     \:\/:/  /     \:\  \        \/_/:/  /   ~~~~\:\  \
                      \::/  /       \:\__\         /:/  /         \:\__\
                       \/__/         \/__/         \/__/           \/__/
                             ___           ___           ___           ___
                            /\__\         /\  \         /\  \         /\  \
                           /:/ _/_       /::\  \       /::\  \        \:\  \
                          /:/ /\__\     /:/\:\  \     /:/\:\__\        \:\  \
           ___     ___   /:/ /:/ _/_   /:/ /::\  \   /:/ /:/  /    _____\:\  \
          /\  \   /\__\ /:/_/:/ /\__\ /:/_/:/\:\__\ /:/_/:/__/___ /::::::::\__\
          \:\  \ /:/  / \:\/:/ /:/  / \:\/:/  \/__/ \:\/:::::/  / \:\~~\~~\/__/
           \:\  /:/  /   \::/_/:/  /   \::/__/       \::/~~/~~~~   \:\  \
            \:\/:/  /     \:\/:/  /     \:\  \        \:\~~\        \:\  \
             \::/  /       \::/  /       \:\__\        \:\__\        \:\__\
              \/__/         \/__/         \/__/         \/__/         \/__/
                    ___                         ___           ___                       ___
                   /\  \                       /\  \         /\  \                     /\  \
      ___          \:\  \         ___         /::\  \       /::\  \       ___         /::\  \
     /\__\          \:\  \       /\__\       /:/\:\  \     /:/\:\__\     /\__\       /:/\:\  \
    /:/  /      ___  \:\  \     /:/  /      /:/  \:\  \   /:/ /:/  /    /:/__/      /:/ /::\  \   ___     ___
   /:/__/      /\  \  \:\__\   /:/__/      /:/__/ \:\__\ /:/_/:/__/___ /::\  \     /:/_/:/\:\__\ /\  \   /\__\
  /::\  \      \:\  \ /:/  /  /::\  \      \:\  \ /:/  / \:\/:::::/  / \/\:\  \__  \:\/:/  \/__/ \:\  \ /:/  /
 /:/\:\  \      \:\  /:/  /  /:/\:\  \      \:\  /:/  /   \::/~~/~~~~   ~~\:\/\__\  \::/__/       \:\  /:/  /
 \/__\:\  \      \:\/:/  /   \/__\:\  \      \:\/:/  /     \:\~~\          \::/  /   \:\  \        \:\/:/  /
      \:\__\      \::/  /         \:\__\      \::/  /       \:\__\         /:/  /     \:\__\        \::/  /
       \/__/       \/__/           \/__/       \/__/         \/__/         \/__/       \/__/         \/__/

  + + + + + + +----------------------  http://www.easylearntutorial.com  ----------------------+ + + + + + +

(c) 2014 Rodrigo Silveira. All rights reserved.

-->
   <title>Ajax Chunked File Upload</title>
   <style>
      #progress {
         margin: 10px 0;
         padding: 0;
         border: 1px solid #004444;
         width: 200px;
         height: 20px;
         background: #eee;
         overflow: hidden;
      }

      #progress div {
         background: #009900;
         height: 100%;
         width: 0%;
         transition: all 0.25s;
      }

      #output img {
         width: 100%;
      }
   </style>
</head>
<body>

<h3>PHP memory limit: <?= ini_get('memory_limit'); ?></h3>

<input type="file" id="input">

<div id="progress">
   <div></div>
</div>

<p id="info"></p>

<div id="output"></div>

<script>

   var input = document.getElementById('input');
   var progress = document.querySelector('#progress div');
   var info = document.getElementById('info');
   var output = document.getElementById('output');

   var chunkSizeChars = 128 * 1024;
   var file = {};

   /**
    *
    * @param {Object} data
    * @param {number} totalChunks
    */
   var onSuccess = function(data, totalChunks) {
      var prog = parseInt(progress.style.width);
      progress.style.width = (prog + 100 / totalChunks) + '%';

      if (data.done) {
         input.disabled = false;
         progress.style.width = '100%';

         var loadImg = function(){
            var img = new Image();
            img.src = data.url;

            output.removeEventListener('click', loadImg, false);

            output.innerHTML = '';
            output.appendChild(img);
         };

         output.innerHTML = '<p>Image uploaded to: ' + data.url + '</p><button>Load Image</button>';
         output.addEventListener('click', loadImg, false);
      }
   };


   /**
    *
    * @param {string} url
    * @param {string} params
    * @param {number} totalChunks
    */
   var sendChunk = function(url, params, totalChunks) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
         if (xhr.readyState === 4) {
            if (xhr.status === 200) {
               return onSuccess(JSON.parse(xhr.responseText), totalChunks);
            }
         }
      };

      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.send(params);
   };

   /**
    *
    * @param {string} url
    * @param {string} str Data URL
    * @param {number} chunkSizeKb
    */
   var chunkUpload = function(url, str, chunkSizeKb) {
      var tag = parseInt(Math.random() * 100) + '_' + parseInt(Math.random() * 100) + '_' + Date.now();
      var params = null;
      var _str = null;
      var totalChunks = Math.ceil(str.length / chunkSizeKb);
      var count = 1;

      info.innerHTML = '<b>File</b> ' + file.name + '<br>' +
         '<b>Size</b> ' + file.size + '<br>' +
         '<b>Type</b> ' + file.type;

      for (var i = 0, len = str.length; i < len; i += chunkSizeKb) {
         _str = str.substr(i, chunkSizeKb);
         params = 'tag=' + tag +
            '&count=' + (count++) +
            '&totalChunks=' + totalChunks +
            '&data=' + _str;

         sendChunk(url, params, totalChunks);
      }
   };

   input.addEventListener('change', function(e) {
      var reader = new FileReader();
      reader.onload = function(e) {
         var fileB64 = this.result;
         chunkUpload('ajax-chunked-file-upload.php', fileB64, chunkSizeChars)
      };

      this.disabled = true;
      file = this.files[0];
      progress.style.width = '0%';
      output.innerHTML = '';

      reader.readAsDataURL(file);
   });
</script>
</body>
</html>

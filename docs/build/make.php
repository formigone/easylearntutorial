<?php


// -----------------
// This will only run after you've created `sitemap.json` by running `sync.php` and `build-tree.php`
// -----------------


if (php_sapi_name() !== 'cli') {
    exit();
}


require_once __DIR__ . '/vendor/autoload.php';

const SITEMAP_PATH = 'sitemap.json';
const PROJECT_PATH = '..';

date_default_timezone_set('America/Denver');

$playists = json_decode(file_get_contents(SITEMAP_PATH), true);

Eltcom\genPlaylistFile($playists);
Eltcom\genSummaryFile($playists);
Eltcom\genVideoFile($playists);

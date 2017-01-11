<?php


// -----------------
// Run `sync.php` first.
// -----------------


const SITEMAP_PATH = 'sitemap.json';
const DEFAULTS_PATH = 'defs';

$in = file_get_contents(__DIR__ . '/out');
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
    $sitemap = genPlaylist($playlist, $sitemap);
}

file_put_contents(SITEMAP_PATH, json_encode($sitemap, JSON_PRETTY_PRINT));

function genFilename($title)
{
    $title = trim(strtolower($title));
    $title = preg_replace('|[^\w\d]+|', ' ', $title);
    $title = preg_replace('|\s\s?|', ' ', $title);
    $title = preg_replace('|\s|', '-', $title);
    return $title . '.md';
}

function genDefPlaylistPath($playlistId)
{
    return DEFAULTS_PATH . '/' . $playlistId . '/main.json';
}

function genDefItemPath($playlistId, $videoId)
{
    return DEFAULTS_PATH . '/' . $playlistId . '/' . $videoId . '.json';
}

function mergePlaylistDefaults(array $playlist, $playlistId)
{
    $def = genDefPlaylistPath($playlistId);
    if (file_exists($def)) {
        $def = json_decode(file_get_contents($def), true);
        $description = array_key_exists('description', $playlist) ? $playlist['description'] : null;
        $playlist = array_merge($playlist, $def);
        if ($description) {
            $playlist['description'] = $playlist['description'] . PHP_EOL . PHP_EOL . $description;
        }
    }

    return $playlist;
}

function mergeItemDefaults(array $item, $itemId, $playlistId)
{
    $def = genDefItemPath($playlistId, $itemId);
    if (file_exists($def)) {
        $def = json_decode(file_get_contents($def), true);
        $description = $item['description'];
        $item = array_merge($item, $def);
        if ($description) {
            $item['description'] = $item['description'] . PHP_EOL . PHP_EOL . $description;
        }
    }

    return $item;
}

function genVideoUrl($thumbnail) {
    preg_match('|vi[^\w]+(.*?)\/|', $thumbnail, $out);
    return $out[1];
}

function genHdThumbnail($thumbnail) {
    return preg_replace('|\/default.jpg|', '/hqdefault.jpg', $thumbnail);
}

function genPlaylist(array $playlist, array $sitemap)
{
    $playlistId = $playlist['id'];
    $sitemap[$playlistId]['filename'] = genFilename($playlist['title']);
    $sitemap[$playlistId] = mergePlaylistDefaults($sitemap[$playlistId], $playlistId);

    $sitemap[$playlistId]['items'] = array_map(function ($item) use ($playlistId) {
        $itemId = $item['videoId'];
        $item['filename'] = genFilename($item['title']);
        $item['videoUrl'] = genVideoUrl($item['thumbnail']);
        $item['thumbnail'] = genHdThumbnail($item['thumbnail']);
        $item = mergeItemDefaults($item, $itemId, $playlistId);
        return $item;
    }, $playlist['items']);

    return $sitemap;
}

<?php

$in = file_get_contents(__DIR__ . '/out');
$in = json_decode($in, true);

$playlists = array_map(function($playlist){
    $playlist['items'] = array_map(function($item) {
        if (array_key_exists('id', $item)) {
            unset($item['id']);
        }
        return array_merge($item, ['videoId' => md5($item['videoId'])]);
    }, $playlist['items']);
    return array_merge($playlist, ['id' => md5($playlist['id'])]);
}, $in);

print_r($playlists);

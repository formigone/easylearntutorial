<?php

const CHANNEL_URL = 'https://www.youtube.com/user/easylearntutorial/playlists?sort=dd&view=1&shelf_id=0';

// TODO: fetch all paginated results of all playlists
function getPlaylists($url) {
//    $data = file_get_contents($url);
    $data = file_get_contents(__DIR__.'/html');

    preg_match_all('|\<a .*?href="(.*?)"|', $data, $data);
    if (count($data) !== 2) {
        return [];
    }

    $data = $data[1];
    return $data;
}

$data = getPlaylists(CHANNEL_URL);
print_r($data);

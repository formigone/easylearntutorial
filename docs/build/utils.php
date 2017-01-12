<?php

namespace Eltcom;

use \Google_Service_YouTube_PlaylistItemContentDetails;
use \Google_Service_YouTube_PlaylistItemListResponse;
use \Google_Service_YouTube_PlaylistItem;
use \Google_Service_YouTube;
use \Google_Service_YouTube_Video;
use \Google_Service_YouTube_VideoListResponse;


const SITEMAP_PATH = 'sitemap.json';
const DEFAULTS_PATH = 'defs';

/**
 * @param Google_Service_YouTube_PlaylistItemListResponse $items
 * @param Google_Service_YouTube $youtube
 * @return array
 */
function getItems(Google_Service_YouTube_PlaylistItemListResponse $items, Google_Service_YouTube $youtube)
{
    /** @var array $items */
    $items = $items->getItems();

    $data = array_map(function (
        /** @var Google_Service_YouTube_PlaylistItem $item */
        $item
    ) {
        /** @var Google_Service_YouTube_PlaylistItemContentDetails $details */
        $details = $item->getContentDetails();

        return [
            'id' => $item->getId(),
            'videoId' => $details->getVideoId(),
            'publishedAt' => $details->offsetGet('videoPublishedAt'),
        ];
    }, $items);

    $videoIds = array_map(function ($video) {
        return $video['videoId'];
    }, $data);

    /** @var Google_Service_YouTube_VideoListResponse $videos */
    $videos = $youtube->videos->listVideos('id,snippet', [
        'fields' => urldecode('items(snippet(title,description,thumbnails(default)))'),
        'id' => implode(',', $videoIds),
    ]);

    $items = $videos->getItems();
    foreach ($items as $i => $item) {
        /** @var Google_Service_YouTube_Video $item */
        $data[$i]['title'] = $item->getSnippet()->getTitle();
        $data[$i]['description'] = $item->getSnippet()->getDescription();
        $data[$i]['thumbnail'] = $item->getSnippet()->getThumbnails()->getDefault()->getUrl();
    }

    return $data;
}

function genFilename($title)
{
    return genSlug($title) . '.md';
}

function genSlug($title)
{
    $title = trim(strtolower($title));
    $title = preg_replace('|[^\w\d]+|', ' ', $title);
    $title = preg_replace('|\s\s?|', ' ', $title);
    $title = preg_replace('|\s|', '-', $title);
    return $title;
}

function genDefPlaylistPath($playlistId)
{
    return __DIR__ . '/' . DEFAULTS_PATH . '/' . $playlistId . '/main.json';
}

function genDefItemPath($playlistId, $videoId)
{
    return __DIR__ . '/' . DEFAULTS_PATH . '/' . $playlistId . '/' . $videoId . '.json';
}

function mergePlaylistDefaults(array $playlist, $playlistId)
{
    $def = genDefPlaylistPath($playlistId);
    if (file_exists($def)) {
        $def = json_decode(file_get_contents($def), true);
        $playlist = array_merge($playlist, $def);
    } else {
        if (!file_exists('defs/'.$playlistId)) {
            mkdir('defs/'.$playlistId);
        }
        file_put_contents($def, json_encode(['description' => $playlist['description'], 'summary' => $playlist['description']], JSON_PRETTY_PRINT));
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

function genVideoUrl($thumbnail)
{
    preg_match('|vi[^\w]+(.*?)\/|', $thumbnail, $out);
    return $out[1];
}

function genHdThumbnail($thumbnail)
{
    return preg_replace('|\/default.jpg|', '/hqdefault.jpg', $thumbnail);
}

function genPlaylist(array $playlist)
{
    $playlistId = $playlist['id'];
    $playlist['title'] = fixMSWord($playlist['title']);
    $playlist['description'] = fixMSWord($playlist['description']);
    $playlist['filename'] = genFilename($playlist['title']);
    $playlist['thumbnail'] = genHdThumbnail($playlist['thumbnail']);
    $playlist = mergePlaylistDefaults($playlist, $playlistId);

    enforceUtf8($playlist);

    $playlist['items'] = array_map(function ($item) use ($playlistId) {
        $itemId = $item['videoId'];
        $item['title'] = fixMSWord($item['title']);
        $item['description'] = fixMSWord($item['description']);
        $item['filename'] = genFilename($item['title']);
        $item['videoUrl'] = genVideoUrl($item['thumbnail']);
        $item['thumbnail'] = genHdThumbnail($item['thumbnail']);
        $item = mergeItemDefaults($item, $itemId, $playlistId);

        enforceUtf8($item);

        return $item;
    }, $playlist['items']);

    return $playlist;
}

function genPlaylistFile(array $playists)
{
    $rows = array_map(function($row){
        $filename = genSlug($row['title']);
        $link = '/series/' . $filename;

        return ''.
            '<div class="row" style="margin-bottom: 20px;">
    <div class="col-sm-6 col-md-4">
        <a href="'.$link.'">
            <img src="/img/blank.gif" data-echo="'.$row['thumbnail'].'" class="img-responsive" alt="'.$row['title'].'" style="width: 100%;">
        </a>
    </div>
    <div class="col-sm-6 col-md-8" style="text-align: left">
        <h3>
            <a href="'.$link.'" style="color: inherit">'.$row['title'].'</a>
        </h3>
        
        <p>'.count($row['items']).' videos. Published: ' . date('l, F j, Y', strtotime($row['publishedAt'])) . '</p>
        <p>'.$row['summary'].'</p>
        <p>
            <a href="'. $link .'" class="btn btn-theme btn-lg">Start Learning</a>
        </p>
    </div>
</div>
';
    }, $playists);

    $data = '---
layout: default
nav: series
title: Select a tutorial series
---

<div class="container">
    <div class="row centered mt grid">
        <h1>SELECT TUTORIAL SERIES</h1>
        <div class="mt"></div>
        '.implode('', $rows).'
    </div>
</div>
';

    file_put_contents(PROJECT_PATH . '/series.md', $data);
}

function toSingleQuote($str)
{
    return str_replace('"', "'", $str);
}

function genSummaryFile(array $playists)
{
    array_map(function($row){
        $seriesTitle = genSlug($row['title']);
        $filename = genSlug($seriesTitle);
        $rows = [];
        $cols = [];
        $totalItems = count($row['items']);

        foreach ($row['items'] as $i => $item) {
            $itemLink = $item['videoId'];
            $cols[] = '' .
'<div class="col-xs-push-1 col-xs-10 col-sm-push-0 col-sm-4">
    <a href="' . $itemLink . '">
        <img src="/img/blank.gif" data-echo="' . $item['thumbnail'] . '" class="img-responsive" alt="' . toSingleQuote($item['title']) . '" style="width: 100%;">
    </a>
    <h3>
        <a href="' . $itemLink . '" style="color:inherit">' . $item['title'] . '</a>
    </h3>
    <p>' . date('l, F j, Y', strtotime($row['publishedAt'])) . '</p>
</div>';

            if (count($cols) === 3 || $i === $totalItems - 1) {
                $rows[] = ''.
'<div class="row" style="margin-bottom: 20px;">
' . implode('', $cols) . '
</div>';
                $cols = [];
            }
        }

        $data = '---
layout: default
nav: series
title: ' . str_replace(':', ' -', $row['title']) . '
---

<div class="container">
    <div class="row centered mt grid">
        <h1>' . $row['title'] . '</h1>
        <div class="mt"></div>
        <div class="row" style="margin-bottom: 20px;">
            <div class="col-xs-push-1 col-xs-10 col-sm-push-3 col-sm-6">
                <img src="/img/blank.gif" data-echo="' . $row['thumbnail'] . '" class="img-responsive" alt="' . toSingleQuote($row['title']) . '" style="width: 100%;">
            </div>
            <div class="clearfix"></div>
            <div class="col-xs-12">
                <h3>Description</h3>
                <p>' . $row['description'] . '</p>
            </div>
        </div>
    </div>
    <div class="row mt grid">
        ' . implode('', $rows) . '
    </div>
</div>
';

        file_put_contents(PROJECT_PATH . '/series/' . $filename . '.md', $data);
        echo 'Created: '.PROJECT_PATH . '/series/' . $filename . '.md'.PHP_EOL;
    }, $playists);
}

function getEncodingError($value)
{
    $codes = [
        JSON_ERROR_NONE => 'No error has occurred',
        JSON_ERROR_DEPTH => 'The maximum stack depth has been exceeded',
        JSON_ERROR_STATE_MISMATCH => 'Invalid or malformed JSON',
        JSON_ERROR_CTRL_CHAR => 'Control character error, possibly incorrectly encoded',
        JSON_ERROR_SYNTAX => 'Syntax error',
        JSON_ERROR_UTF8 => 'Malformed UTF - 8 characters, possibly incorrectly encoded',
        JSON_ERROR_RECURSION => 'One or more recursive references in the value to be encoded',
        JSON_ERROR_INF_OR_NAN => 'One or more NAN or INF values in the value to be encoded',
        JSON_ERROR_UNSUPPORTED_TYPE => 'A value of a type that cannot be encoded was given',
    ];

    return $codes[$value];
}

function enforceUtf8(array $item)
{
    $fields = ['title', 'description', 'thumbnail', 'filename'];

    foreach($fields as $field) {
        $json = json_encode($item[$field]);
        if ($json === false) {
            print_r($item);
            throw new \Exception(getEncodingError(json_last_error()));
        }
    }
}

/**
 * @param string $string
 * @return string
 */
function fixMSWord($string) {
    $map = ['–' => '-', '“' => '"', '”' => '"', '•' => '-'];

    foreach ($map as $search => $replace) {
        $string = str_replace($search, $replace, $string);
    }

    return $string;
}

<?php

require_once __DIR__ . '/vendor/autoload.php';
$key = file_get_contents(__DIR__ . '/../../../.chaves/gdc');
$channelId = file_get_contents(__DIR__ . '/../../../.chaves/chanId');

$client = new Google_Client();
$client->setDeveloperKey($key);
$youtube = new Google_Service_YouTube($client);

$lists = [];
$total = 0;
$next = null;

do {
    $params = ['channelId' => $channelId, 'maxResults' => 50];
    if ($next) {
        $params['pageToken'] = $next;
    }
    $channel = $youtube->playlists->listPlaylists('id,snippet', $params);
    /** @var array $items */
    $items = $channel->getItems();
    /** @var Google_Service_YouTube_PageInfo $pageInfo */
    $pageInfo = $channel->getPageInfo();
    $total = $pageInfo->getTotalResults();
    $next = $channel->getNextPageToken();

    $playlist = array_map(function(/** @var Google_Service_YouTube_Playlist $item */ $item) use ($youtube) {
        $snip = $item->getSnippet();
        /** @var Google_Service_YouTube_Thumbnail $thumb */
        $thumb = $snip->getThumbnails()->getDefault();

        $items = $youtube->playlistItems->listPlaylistItems('id,contentDetails', [
            'playlistId' => $item->getId(),
            'maxResults' => 50
        ]);
        /** @var Google_Service_YouTube_PageInfo $pageInfo */
        $pageInfo = $items->getPageInfo();
        $total = $pageInfo->getTotalResults();
        $next = $items->getNextPageToken();
        $data = [];

        while (count($data) < $total) {
            $data = array_merge($data, getItems($items, $youtube));
            if ($next) {
                echo '---', PHP_EOL;
                print_r([
                    'data' => $data,
                    'total' => $total,
                    'next' => $next,
                    'id' => $item->getId(),
                ]);
                throw new Exception('Should fetch next page');
            }
        }

        return [
            'id' => $item->getId(),
            'title' => $snip->getTitle(),
            'description' => $snip->getDescription(),
            'thumbnail' => $thumb->getUrl(),
            'publishedAt' => $snip->getPublishedAt(),
            'items' => $data,
        ];
    }, $items);

    $lists = array_merge($lists, $playlist);
} while (count($lists) < $total);

/**
 * @param Google_Service_YouTube_PlaylistItemListResponse $items
 * @param Google_Service_YouTube $youtube
 * @return array
 */
function getItems(Google_Service_YouTube_PlaylistItemListResponse $items, Google_Service_YouTube $youtube) {
    /** @var array $items */
    $items = $items->getItems();

    $data = array_map(function(/** @var Google_Service_YouTube_PlaylistItem $item */ $item) {
        /** @var Google_Service_YouTube_PlaylistItemContentDetails $details */
        $details = $item->getContentDetails();

        return [
            'id' => $item->getId(),
            'videoId' => $details->getVideoId(),
            'publishedAt' => $details->offsetGet('videoPublishedAt'),
        ];
    }, $items);

    $videoIds = array_map(function($video){
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

echo json_encode($lists);

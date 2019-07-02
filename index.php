<?php

// Здесь идет формирование контента мета-тегов
// На основе $_SERVER['REQUEST_URI']
// Для проектов, где роутинг и для каждой страницы / урла должны быть свои мета-данные

// Например
// $req_uri = $_SERVER['REQUEST_URI']; // Например, получим '/special/pik/article/17'


// Пример
//if (strpos($req_uri, 'article/17') !== false) {
//    // Данные для article/17
//      $title = '17';
//      $description = '17';
//      $share_image_url = '17.jpg';
//} elseif (strpos($req_uri, 'article/18') !== false) {
//    // Данные для article/18
//      $title = '18';
//      $description = '18';
//      $share_image_url = '18.jpg';
//} else {
//  По умолчанию
//}

// Если мета-данные статичны, просто заполняем руками

$title = 'TITLE HERE';
$description = 'DESCRIPTION HERE';
$share_image_url = 'https://path/to/image';

$metas = [
    '[TITLE]' => $title,
    '[DESCRIPTION]' => $description,
    '[SHARE_IMAGE_URL]' => $share_image_url,
];

// Получаем содержимое build/index.html

$index_file = file_get_contents(__DIR__ . '/dist/index.html');

// Делаем замену плейсхолдеров

foreach ($metas as $key => $value)
    $index_file = str_replace($key, $value, $index_file);

echo $index_file;

exit;

// чтобы увидеть плейсхолдеры, см. исходный файл index.html в корне проекта

<?php
require 'Parsedown.php';

$filePath = 'text.md';
$markdownText = file_get_contents($filePath);

$parsedown = new Parsedown();
$htmlContent = $parsedown->text($markdownText);

echo $htmlContent;
?>

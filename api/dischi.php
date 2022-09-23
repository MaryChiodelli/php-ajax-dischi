<?php
include __DIR__ . '/../db/dischi.php';

$data = [
  'success' => true,
  'response' => $dischi
];

header('Content-Type: application/json');
echo json_encode($data);
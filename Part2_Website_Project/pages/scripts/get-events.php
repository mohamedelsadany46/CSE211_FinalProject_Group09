<?php
/*
  ID & Name:        Youssef Atta Mohamed - 223103574, Mohamed Ahmed Mohamed - 224200083, Wahballah ahmed wahballah - 221100971, Ziad Abdullah - 221101546
  Course:           CSE211 Web Programming
  Assignment:       Course Project
  Date:             30/12/2025
  Description:      GET route to retrieve events from database
*/

header('Content-Type: application/json');
require_once 'db-config.php';

try {
    $stmt = $pdo->query("SELECT * FROM events ORDER BY date ASC");
    $events = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode([
        'success' => true,
        'events' => $events
    ]);
    
} catch(PDOException $e) {
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>
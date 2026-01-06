<?php
/*
  ID & Name:        Youssef Atta Mohamed - 223103574, Mohamed Ahmed Mohamed - 224200083, Wahballah ahmed wahballah - 221100971, Ziad Abdullah - 221101546
  Course:           CSE211 Web Programming
  Assignment:       Course Project
  Date:             30/12/2025
  Description:      POST route to save registration to database
*/

header('Content-Type: application/json');
require_once "db.php";

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Only POST method allowed']);
    exit;
}

try {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $event = $_POST['event'] ?? '';
    $tickets = $_POST['tickets'] ?? 1;
    
    if (empty($name) || empty($email) || empty($event)) {
        echo json_encode(['success' => false, 'error' => 'Missing required fields']);
        exit;
    }
    
    $stmt = $pdo->prepare("INSERT INTO registrations (name, email, phone, event_id, tickets, created_at) VALUES (?, ?, ?, ?, ?, NOW())");
    $stmt->execute([$name, $email, $phone, $event, $tickets]);
    
    echo json_encode([
        'success' => true,
        'message' => 'Registration saved successfully',
        'registration_id' => $pdo->lastInsertId()
    ]);
    
} catch(PDOException $e) {
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>
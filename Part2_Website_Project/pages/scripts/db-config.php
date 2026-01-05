<?php
/*
  ID & Name:        Youssef Atta Mohamed - 223103574, Mohamed Ahmed Mohamed - 224200083, Wahballah ahmed wahballah - 221100971, Ziad Abdullah - 221101546
  Course:           CSE211 Web Programming
  Assignment:       Course Project
  Date:             30/12/2025
  Description:      Database configuration and connection
*/

$host = 'localhost';
$dbname = 'eventsx_db';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
<?php
/*
  ID & Name:        Youssef Atta Mohamed - 223103574, Mohamed Ahmed Mohamed - 224200083, Wahballah ahmed wahballah - 221100971, Ziad Abdullah - 221101546
  Course:           CSE211 Web Programming
  Assignment:       Course Project
  Date:             30/12/2025
  Description:      Database configuration and connection
*/

<?php
$host = "127.0.0.1";
$user = "root";
$pass = "web";          // the password you set
$db   = "eventsx_db";
$port = 3306;           // change to 3307 ONLY if you changed MySQL port

$conn = new mysqli($host, $user, $pass, $db, $port);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}
?>

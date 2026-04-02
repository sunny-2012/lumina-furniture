<?php
$host     = "127.0.0.1";
$port     = 3307;        
$dbname   = "lumina_db";
$username = "root";
$password = "";

$conn = mysqli_connect($host, $username, $password, $dbname, $port);

if (!$conn) {
    die(json_encode(["status" => "error", "message" => "Database connection failed: " . mysqli_connect_error()]));
}
?>
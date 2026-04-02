<?php
// Correct include (make sure the filename matches exactly)
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name     = trim($_POST['name'] ?? '');
    $email    = trim($_POST['email'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if (empty($name) || empty($email) || empty($password)) {
        echo json_encode(["status" => "error", "message" => "All fields are required!"]);
        exit;
    }

    // Check if email already exists
    $check = "SELECT email FROM users WHERE email = ?";
    $stmt = mysqli_prepare($conn, $check);
    mysqli_stmt_bind_param($stmt, "s", $email);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_store_result($stmt);

    if (mysqli_stmt_num_rows($stmt) > 0) {
        echo json_encode(["status" => "error", "message" => "Email already exists!"]);
    } else {
        $hashed = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        $stmt2 = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt2, "sss", $name, $email, $hashed);

        if (mysqli_stmt_execute($stmt2)) {
            echo json_encode(["status" => "success", "message" => "Account created successfully!"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to create account!"]);
        }
    }
    mysqli_close($conn);
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request"]);
}
?>
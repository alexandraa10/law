<?php
// Conexión a la base de datos
$conn = new mysqli("localhost", "root", "", "usuarios_db");

$username = $_POST["username"];
$password = $_POST["password"];

// Verificar usuario
$result = $conn->query("SELECT * FROM usuarios WHERE username='$username' AND password=MD5('$password')");
if ($result->num_rows > 0) {
    echo json_encode(["status" => "success", "message" => "Login exitoso"]);
} else {
    echo json_encode(["status" => "error", "message" => "Usuario o contraseña incorrectos"]);
}
?>

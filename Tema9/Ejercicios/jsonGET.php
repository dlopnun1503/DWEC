<?php

$host = 'localhost';
$dbname = 'tema10';
$username = 'root';
$password = '';

header("access-control-allow-origin: *");

try {
    // Conexión a la base de datos
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if (isset($_GET['nombre'])) {
        // Si se pasa el parámetro 'nombre', devolver un JSON de objeto
        $nombre = $_GET['nombre'];
        $stmt = $pdo->prepare("SELECT * FROM datos WHERE nombre = :nombre");
        $stmt->bindParam(':nombre', $nombre);
        $stmt->execute();
        $resultado = $stmt->fetch(PDO::FETCH_ASSOC); 

        if ($resultado) {
            echo json_encode($resultado, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT); // Devolver JSON de objeto
        } else {
            echo json_encode(["error" => "No se encontraron datos"]); // Si no hay datos
        }
    } else {
        // Si no se pasa parámetro, devolver un JSON de array con los nombres
        $stmt = $pdo->query("SELECT DISTINCT nombre FROM datos");
        $nombres = $stmt->fetchAll(PDO::FETCH_COLUMN); 

        if ($nombres) {
            echo json_encode($nombres, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT); // Devolver JSON de array
        } else {
            echo json_encode(["error" => "No hay nombres disponibles"]); // Si no hay nombres
        }
    }
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]); // Manejo de errores
}

var_dump($nombres);



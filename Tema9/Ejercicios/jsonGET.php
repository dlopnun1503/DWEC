<?php

$host = 'localhost';
$dbname = 'tema9';
$username = 'root';
$password = '';
$charset = 'utf8mb4';
$collection = 'utf8mb4_unicode_ci';

header("access-control-allow-origin: *");

$pdo;


try {

    // nombre fuente de datos
    $dsn = "mysql:host=" . $host . ";dbname=" . $dbname;


    // array de opciones para la clase pdo
    $options = [

        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_PERSISTENT =>  false,
        PDO::ATTR_EMULATE_PREPARES =>  false,
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES " . $charset . " COLLATE " . $collection

    ];

    // realizo la conexión
    $pdo = new PDO($dsn, $username, $password, $options);

    $id = isset($_GET['id']) ? $_GET['id'] : null;

    if (!$id) {
        $sql = 'SELECT id, nombre FROM datos';
    } else {
        $sql = 'SELECT * FROM datos WHERE id = :id';
    }

    $stmt = $pdo->prepare($sql);

    if ($id != null) {
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    }

    $stmt->setFetchMode(PDO::FETCH_OBJ);

    // ejectuto
    $stmt->execute();

    $results = $stmt->fetchAll();

    // Envío los resultados como JSON
    echo json_encode($results);

} catch (PDOException $e) {

    // Manejo de errores
    echo json_encode(['error' => $e->getMessage()]);
    exit();
}

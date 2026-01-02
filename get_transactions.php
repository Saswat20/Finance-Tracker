<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/db.php';

$sql = "SELECT * FROM transactions ORDER BY date DESC";
$result = $conn->query($sql);

$transactions = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        array_push($transactions, $row);
    }
}

echo json_encode($transactions);
$conn->close();
?>

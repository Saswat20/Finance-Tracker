
<?php
include '../config/db.php';
$data = json_decode(file_get_contents("php://input"), true);

$stmt = $conn->prepare("INSERT INTO transactions(title,amount) VALUES (?,?)");
$stmt->bind_param("sd", $data['title'], $data['amount']);
$stmt->execute();

echo json_encode(["status"=>"success"]);
?>

<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/db.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->description) && isset($data->amount) && isset($data->type)) {
    $desc = $data->description;
    $amount = $data->amount;
    $type = $data->type;

    $stmt = $conn->prepare("INSERT INTO transactions (description, amount, type) VALUES (?, ?, ?)");
    $stmt->bind_param("sds", $desc, $amount, $type);

    if($stmt->execute()) {
        echo json_encode(["message" => "Transaction created successfully."]);
    } else {
        echo json_encode(["message" => "Transaction failed."]);
    }
    $stmt->close();
}
$conn->close();
?>

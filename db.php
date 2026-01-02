
<?php
$conn = new mysqli("localhost","root","","finance_db");
if($conn->connect_error){
    die("DB Error");
}
?>

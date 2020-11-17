<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$mysqli = new mysqli($servername, $username, $password, $dbname);
$myJSON = array();

if ($result = $mysqli->query("SELECT * FROM playas")) {

    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
        $myJSON[] = $row;
    }
    echo json_encode($myJSON);
}

$result->close();
$mysqli->close();

?>
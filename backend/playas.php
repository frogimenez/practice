<?php

include "db_connection.php";
$myJSON = array();

if ($result = $mysqli->query("SELECT * FROM playas")) {

    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
        $myJSON[] = $row;
    }
    echo json_encode($myJSON);
}

$result->close();
$mysqli->close();




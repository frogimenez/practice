<?php
include "db_connection.php";

if (isset($_POST['order_id']) && $_POST['order_id']!="") {
     
}else{
    
    echo "No es un POST";

}

/*posible manera de enviar datos  la bbddd?? va con el form del html
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $name = $_POST['fname'];
    if (empty($name)) {
        echo "Name is empty";
    } else {
        echo $name;
    }
}*/
    
    
    
    /*<!-- Posible submit para meter info en la BBDD-->
    echo "<!--<table>-->";
    echo "<!--<tr><td>Order ID:</td><td>$result->order_id</td></tr>-->";
    echo "<!--<tr><td>Amount:</td><td>$result->amount</td></tr>-->";
    echo "<!--<tr><td>Response Code:</td><td>$result->response_code</td></tr>-->";
    echo "<!--<tr><td>Response Desc:</td><td>$result->response_desc</td></tr>-->";
    echo "<!--</table>-->";*/



























   
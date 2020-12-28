<?php
include "db_connection.php";

if (isset($_POST['order_id']) && $_POST['order_id']!="") {
    var_dump($_POST);
}else{
    echo "No es un POST";

}
    
    
    
    /*<!-- Posible submit para meter info en la BBDD-->
    echo "<!--<table>-->";
    echo "<!--<tr><td>Order ID:</td><td>$result->order_id</td></tr>-->";
    echo "<!--<tr><td>Amount:</td><td>$result->amount</td></tr>-->";
    echo "<!--<tr><td>Response Code:</td><td>$result->response_code</td></tr>-->";
    echo "<!--<tr><td>Response Desc:</td><td>$result->response_desc</td></tr>-->";
    echo "<!--</table>-->";*/
   
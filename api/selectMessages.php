<?php
    include_once('includes/connect.php');
    $usersIds = $_GET["usersIds"];
    $data = array();
    if($usersIds){
        $selectMessages = $conn->query("SELECT * FROM messages WHERE author IN ($usersIds) AND receiver IN ($usersIds) ORDER BY created"); 
        while($selectMessage = $selectMessages->fetch_assoc()){
            $idUser = $selectMessage["author"];
            $selectEmailUser = $conn->query("SELECT email FROM users WHERE id = $idUser");
            array_push($data, $selectMessage);
        }
    }
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
?>
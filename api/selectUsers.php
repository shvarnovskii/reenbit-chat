<?php
    include_once('includes/connect.php');
    $idProjects = explode(",", $_GET["idProjects"]);
    $data = array();
    $selectUsers = $conn->query("SELECT * FROM users"); 
    while($selectUser = $selectUsers->fetch_assoc()){
        $selectUser['photo'] = "https://www.gravatar.com/avatar/".md5(strtolower(trim($selectUser['email'])));
        
        $userId = $selectUser['id'];
        $selectMessages = $conn->query("SELECT * FROM messages WHERE author IN ($userId) OR receiver IN ($userId) ORDER BY created DESC LIMIT 1"); 
        if($selectLastMessage = $selectMessages->fetch_assoc()){
            $selectUser["message"] = $selectLastMessage["message"];
            $selectUser["created"] = $selectLastMessage["created"];
        }else{
            $selectUser["created"] = 0;
        }
        
        array_push($data, $selectUser);
    }
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
?>
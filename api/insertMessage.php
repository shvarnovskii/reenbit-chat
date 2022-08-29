<?php
    include_once('includes/connect.php');
    $_POST = json_decode(file_get_contents("php://input"), true);
    $message = mysqli_real_escape_string($conn, $_POST['message']);
    $created = $_POST['created'];
    $author = $_POST['author'];
    $receiver = $_POST['receiver'];
    if($message){
        $sql = "INSERT INTO `messages`(`message`, `created`, `author`, `receiver`) VALUES ('$message','$created','$author','$receiver')";
        mysqli_query($conn, $sql); 
    }
?>
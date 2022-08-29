<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
	$conn = new mysqli("ze452735.mysql.tools", "ze452735_reenbitchat", "N#9c5r(n9E", "ze452735_reenbitchat");
    $conn->set_charset("utf8");
    
	if($conn->connect_error){
		die("Не вдалось підключитись до бази даних! ". $conn->connect_error);
	}
?>
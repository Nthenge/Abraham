<?php
    $name=$_POST['name'];
    $email=$_POST['email'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];

    $connect = new mysqli('localhost','root','','website');
    if($connect->connect_error){
        die('Connection Failed : '.$connect->connect_error);
    }
    else{
      $stmt = $connect->prepare("Insert into registration(name, email, subject, message) values(?, ?, ?, ?)");
      $stmt->bind_param("ssss",$name, $email, $subject, $message);
      $stmt->execute();
      echo "Registration Successfull...";
      $stmt->close();
      $connect->close();
}
?>
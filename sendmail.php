<?php

$success = false;

if(isset($_POST['name'])){

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$to = "1996dragrat@gmail.com";

$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Subject: $subject\n\n";
$body .= "Message:\n$message";

$headers = "From: $email";

if(mail($to,$subject,$body,$headers)){
$success = true;
}

}

?>

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>

.success-message{
position:fixed;
top:20px;
left:50%;
transform:translateX(-50%);
background:#0f5132;
color:white;
padding:15px 25px;
border-radius:6px;
font-family:Arial;
display:none;
z-index:9999;
}

</style>
</head>

<body>

<div id="successBox" class="success-message">
Message Sent Successfully ✔
</div>

<script>

var success = <?php echo $success ? 'true' : 'false'; ?>;

if(success){

var box = document.getElementById("successBox");

box.style.display = "block";

setTimeout(function(){
box.style.display = "none";
window.history.back();
},2000);

}

</script>

</body>
</html>

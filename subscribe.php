<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $email = htmlspecialchars($_POST['email']);
    $to = "hotimnewsletter@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Newsletter";
    $message = "Email: $email\n" .
    $headers = "From: $email"; 
    if (mail($to, $subject, $message, $headers)) {
        echo "We will get back to you shortly.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }          
}
?>
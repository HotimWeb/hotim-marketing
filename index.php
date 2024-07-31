<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $name_user = htmlspecialchars($_POST['name_user']);
    $email = htmlspecialchars($_POST['email']);
    $to = "hotimnewsletter@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Newsletter";
    $message = "Client Name: $name_user\n" .
               "Email: $email\n" .  
    $headers = "From: $email"; 
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for contacting us, $name_user. We will get back to you shortly.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
}
?>
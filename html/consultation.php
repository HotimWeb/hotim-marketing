<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = htmlspecialchars($_POST['first_name']);
    $last_name = htmlspecialchars($_POST['last_name']);
    $email = htmlspecialchars($_POST['email']);
    $position = htmlspecialchars($_POST['position']);
    $company_name = htmlspecialchars($_POST['company_name']);
    $website_url = htmlspecialchars($_POST['website_url']);
    $help = htmlspecialchars($_POST['help']);

    $to = "hotimenterprise@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $message = "First Name: $first_name\n" .
               "Last Name: $last_name\n" .
               "Email: $email\n" .
               "Position: $position\n" .
               "Company Name: $company_name\n" .
               "Website URL: $website_url\n" .
               "What do you need help with: $help";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for contacting us, $first_name. We will get back to you shortly.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
}
?>

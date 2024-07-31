<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = htmlspecialchars($_POST['first_name']);
    $last_name = htmlspecialchars($_POST['last_name']);
    $email = htmlspecialchars($_POST['email']);
    $position = htmlspecialchars($_POST['position']);
    
    $file = $_FILES['resume'];
    $file_name = $file['name'];
    $file_tmp_name = $file['tmp_name'];
    $file_size = $file['size'];
    $file_error = $file['error'];
    $file_type = $file['type'];
    
    $file_ext = explode('.', $file_name);
    $file_actual_ext = strtolower(end($file_ext));
    
    $allowed = array('pdf', 'doc', 'docx');
    
    if (in_array($file_actual_ext, $allowed)) {
        if ($file_error === 0) {
            if ($file_size < 40000000) { // Limit file size to 40MB
                $file_new_name = uniqid('', true) . "." . $file_actual_ext;
                $file_destination = 'uploads/' . $file_new_name;
                move_uploaded_file($file_tmp_name, $file_destination);
                
                $to = "hotimhiring@gmail.com"; // Replace with your email address
                $subject = "New Job Application from $first_name $last_name";
                $message = "First Name: $first_name\n" .
                           "Last Name: $last_name\n" .
                           "Email: $email\n" .
                           "Position: $position\n";
                $headers = "From: $email";

                $attachment = chunk_split(base64_encode(file_get_contents($file_destination)));
                $boundary = md5(date('r', time()));

                $headers .= "\r\nMIME-Version: 1.0\r\nContent-Type: multipart/mixed; boundary=\"_1_$boundary\"";

                $message = "This is a multi-part message in MIME format.\r\n\r\n" .
                           "--_1_$boundary\r\n" .
                           "Content-Type: text/plain; charset=\"utf-8\"\r\n" .
                           "Content-Transfer-Encoding: 7bit\r\n\r\n" .
                           $message . "\r\n\r\n" .
                           "--_1_$boundary\r\n" .
                           "Content-Type: application/octet-stream; name=\"" . basename($file_destination) . "\"\r\n" .
                           "Content-Transfer-Encoding: base64\r\n" .
                           "Content-Disposition: attachment\r\n\r\n" .
                           $attachment . "\r\n\r\n" .
                           "--_1_$boundary--";

                if (mail($to, $subject, $message, $headers)) {
                    echo "Thank you for your application, $first_name. We will get back to you shortly.";
                } else {
                    echo "Sorry, there was an error sending your application. Please try again later.";
                }

                // Optionally, delete the file after sending
                unlink($file_destination);

            } else {
                echo "Your file is too large.";
            }
        } else {
            echo "There was an error uploading your file.";
        }
    } else {
        echo "You cannot upload files of this type.";
    }
}
?>

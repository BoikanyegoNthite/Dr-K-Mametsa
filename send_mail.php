<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $phone = trim($_POST["phone"]);
    $message = trim($_POST["message"]);

    // Email destination
    $to = "hello@drmametsa.co.za";
    $subject = "New Message from Website Contact Form";

    // Email content
    $body = "You received a new message from your website contact form:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Message:\n$message\n";

    // Headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Thank you, your message has been sent successfully!'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('Sorry, something went wrong. Please try again later.'); window.history.back();</script>";
    }
} else {
    echo "Invalid request method.";
}
?>

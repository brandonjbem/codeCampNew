<?php
require '/home1/jobtrain/public_html/test/mail/phpmailer/PHPMailerAutoload.php';

if(empty($_POST['name1'])           ||
   empty($_POST['name2'])           ||
   empty($_POST['email'])           ||
   empty($_POST['phone'])           ||
   empty($_POST['day'])             ||
   empty($_POST['month'])           ||
   empty($_POST['date'])            ||
   empty($_POST['lowerSlot'])       ||
   empty($_POST['upperSlot'])       ||
   empty($_POST['location'])        ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   };
  
$name1 = $_POST['name1'];
$name2 = $_POST['name2'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$day = $_POST['day'];
$month = $_POST['month'];
$date = $_POST['date'];
$lowerSlot = $_POST['lowerSlot'];
$upperSlot = $_POST['upperSlot'];
$location = $_POST['location'];
$heardAbout = $_POST['heardAbout'];
$message = $_POST['message'];


$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'localhost';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'noreply@coderbootcamp.org';                 // SMTP username
$mail->Password = 'blastoise2903';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('noreply@coderbootcamp.org', 'noreply');
$mail->addAddress('brandonjbem@gmail.com');               // Name is optional

$mail->isHTML(true);                                  // Set email format to HTML


$mail->Subject = 'Coder Boot Camp - Student Registration Form';
$mail->Body = '<b>You have recieved a new student registration form, here are the details:</b><br><br><b>Name:</b> ' . $name1 . ' ' . $name2 . '<br><br><b>Email Address: </b> ' . $email_address . '<br><br><b>Phone: </b> ' . $phone . '<br><br><b>Orientation Date:</b> ' . $day . ', ' . $month . ' ' . $date . ' - ' . $lowerSlot . '-' . $upperSlot . ' @ ' . $location . '.<br><br><b>I heard about this program from: </b> ' . $heardAbout . '<br><br><b>Additional comments/questions: </b> ' . $message . '<br><br>';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'localhost';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'noreply@coderbootcamp.org';                 // SMTP username
$mail->Password = 'blastoise2903';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('noreply@coderbootcamp.org', 'noreply');
$mail->addAddress($email_address);               // Name is optional

$mail->isHTML(true);                                  // Set email format to HTML

if($location === "JobTrain") {
  $address = "<b>JobTrain</b><br>1200 O'Brien Drive<br>Menlo Park, CA 94025<br><a target='_blank' href='https://www.google.com/maps/place/Jobtrain,+1200+O'Brien+Dr,+Menlo+Park,+CA+94025/@37.4756339,-122.1488507,17z/data=!3m1!4b1!4m5!3m4!1s0x808fbc9e84f0a911:0xc8d5d0f371168d9f!8m2!3d37.4756297!4d-122.146662'>Open in Maps</a><br>Phone: (650) 330-6429<br>Fax: (650) 330-6401<br>Email: info@jobtrainworks.org";
};
if($location === "Sequoia Adult School") {
  $address = "<b>Sequoia Adult School</b><br>3247 Middlefield Road<br>Menlo Park, CA 94025<br><a target='_blank' href='https://www.google.com/maps/place/Sequoia+District+Adult+School/@37.4714516,-122.2053521,17z/data=!3m1!4b1!4m5!3m4!1s0x808fa36c75b74129:0x8d45c2de2bf22768!8m2!3d37.4714474!4d-122.2031634'>Open in Maps</a><br>Phone: (650) 306-8866<br>Fax: (650) 365-2420";
};

$mail->Subject = 'Coder Boot Camp - Orientation Confirmation';
$mail->Body = 'This is a confirmation email regarding your orientation at <b>' . $location . '</b> on <b>' . $month . ' ' . $date . '</b> at <b>' . $lowerSlot . '</b>.<br><br> Attached to this email are the address and a navigation link.<br><br>Please arrive 10 to 15 minutes before <b>' . $lowerSlot . '</b> and be prepared for a brief skills assessment for the latter portion of the orientation.<br><br>Should you have questions or require any clarifications, please do not hesitate to contact us!<br><br>If for any reason you wish to cancel or reschedule your appointment, we appreciate a prompt and early notification.<br><br><b>Jesse Betancourt</b><br>Program Counselor<br>jbetancourt@jobtrainworks.org<br><br>' . $address . '';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>
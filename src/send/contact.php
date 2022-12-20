<?php
    require_once('phpmailer/PHPMailerAutoload.php');

    $email = trim($_POST['email']);
    $name = trim($_POST['name']);
    $phone = trim($_POST['phone']);

    if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['email']))  {

        if (isset($_POST['txt'])) { 
            $txt = trim($_POST['txt']);
        }

        if (isset($_POST['wycena'])) { 
            $wycena = "TAK";
        } else {
            $wycena = "NIE";
        }

        if (isset($_POST['demo'])) { 
            $demo = "TAK";
        } else {
            $demo = "NIE";
        }

        if (isset($_POST['spotkanie'])) { 
            $spotkanie = "TAK";
        } else {
            $spotkanie = "NIE";
        }

        $message = file_get_contents( 'template/tempalate_email.html' );
        $message = str_replace( '%phone%', $phone, $message );
        $message = str_replace( '%email%', $email, $message );
        $message = str_replace( '%wycena%', $wycena, $message );
        $message = str_replace( '%demo%', $demo, $message );
        $message = str_replace( '%spotkanie%', $spotkanie, $message );
        $message = str_replace( '%name%', $name, $message );

        if (isset($_POST['txt'])) { 
            $message = str_replace( '%txt%', $txt, $message );
        }

        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true; 
        $mail->Username = 'prudensolve1234@gmail.com';
        $mail->Password = 'prudensolve1234!@#$';
        $mail->SMTPSecure = 'tls';                          
        $mail->Port = 587;

        $mail->setFrom('hello@arbridge.pl', 'AR Bridge');
        $mail->addAddress('janko8403@gmail.com');
        $mail->addAddress('hello@arbridge.pl');

        $mail->isHTML( true );
        $mail->CharSet = "utf-8";
        $mail->Subject = 'Wiadomość ze strony AR Bridge';
        $mail->MsgHTML( $message );

        $mail->AltBody = 'AR Bridge';

        if(!$mail->send()) {
            echo '<p>Mailer Error: ' . $mail->ErrorInfo . '</p>';
        } else {
            echo 'Send OK';
        }
    } else {
        header("HTTP/1.0 404 Not Found");
    }
?>

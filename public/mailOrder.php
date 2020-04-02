<?php 

require_once('../phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$order = json_decode($_POST['order']);

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.timeweb.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'order@hardclean.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'order12345'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';           // Enable TLS encryption, `ssl` also accepted
$mail->SMTPAutoTLS = false;
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров
// $mail->Port = 587; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->SMTPOptions = array(
    'ssl' => array(
    'verify_peer' => false,
    'verify_peer_name' => false,
    'allow_self_signed' => true )
    );

$mail->setFrom('order@hardclean.ru'); // от кого будет уходить письмо?
$mail->addAddress('order@hardclean.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

function rollArray($array) {
	foreach ($array as $element):
		return $element->title . '   ' . $element->price . '<br>';
    endforeach;
};


$mail->Subject = 'Заявка c сайта HARD CLEAN';
$mail->Body    = '' . '<b>' . $name . '</b>' . ' оставил заявку,
<br>его телефон ' . '<b>' . $phone . '</b>' . 
'<br>Почта этого пользователя: ' . '<b>' . $email . '</b>' . '<br>' .
'<br><b>Состав заказа:</b>' . 
'<br>Услуга: <b>' . $order->room . '</b>' .
'<br>Тип: <b>' . $order->type . '</b>' .
'<br>Метраж: <b>' . $order->square . '</b>' .
'<br>Дополнительно:<br>' .
rollArray($order->bonus) . '<br>' 
. 'Итого: ' . '<b>' . $order->total . '</b>';


$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: /');
}
?>
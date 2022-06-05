<?php
// Файлы phpmailer
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$family = $_POST['family'];
$email = $_POST['email'];
$text = $_POST['message'];

// Формирование самого письма
$title = "Заказ дизайна";
$body = "
<h2>Заказ дизайна</h2>
<b>Имя:</b> $name<br>
<b>Фамилия:</b> $family<br>
<b>Почта:</b> $email<br><br>
<b>Сообщение:</b><br>$text
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'yagrazebtw'; // Логин на почте
    $mail->Password   = 'Grzpf116'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('yagrazebtw@gmail.com', 'Имя'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('yagrazebtw@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "Спасибо за заявку. Дизайнер свяжется с Вами в ближайшее время";} 
else {$result = "Ошибка";}

} catch (Exception $e) {
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "status" => $status]);
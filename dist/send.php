<?php

if (isset($_POST["name"]) && isset($_POST["phone"]) ) {

    // Формируем массив для JSON ответа
    $result = array(
        'name' => $_POST["name"],
        'phone' => $_POST["phone"],
        'email' => $_POST["email"]
    );
    $address = "manson413@gmail.com";
    $mail_send = 0;
    if (isset($_POST["email"])){
        $mes = "Имя: ".$_POST["name"]."\nТелефон: ".$_POST["phone"]."\nПочта:".$result['email'];
    } else {
        $mes = "Имя: " . $_POST["name"] . "\nТелефон: " . $_POST["phone"];
    }
    $sub='Заявка с сайта';
    $mail_send = mail($address,$sub,$mes,"From: Site");
}
?>
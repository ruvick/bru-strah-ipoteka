<?
header("Access-Control-Allow-Origin: *"); 
// HTTP_ORIGIN
// REMOTE_ADDR
// REQUEST_METHOD
// print_r(json_encode($_SERVER));

if (
    ($_SERVER["HTTP_ORIGIN"] !== "http://localhost:3000")&&
    ($_SERVER["HTTP_ORIGIN"] !== "http://ips-service.ru") 
    
    ) {
        http_response_code(403);
        die($_SERVER["HTTP_ORIGIN"]); 
    }


    $to = 'rudikov-web@yandex.ru, jei.ok@ya.ru'; 
    $subject = 'Обращение с сайта ips-service.ru';
    $message = '
                <html>
                    <head>
                        <title>'.$_REQUEST["msg"].'</title>
                    </head>
                    <body>
                        <p>ФИО: '.$_REQUEST['name'].'</p>
                        <p>Дата рождения: '.$_REQUEST['date'].'</p>
                        <p>Пол: '.$_REQUEST['gender'].'</p>
												<p>Сумма: '.$_REQUEST['sum'].'</p>
												<p>Банк: '.$_REQUEST['bank'].'</p>
												<p>Этажность: '.$_REQUEST['etazhnost'].'</p>
                        <p>Телефон: '.$_REQUEST['tel'].'</p> 
                        <p>e-mail: '.$_REQUEST['mail'].'</p>                                     
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: Заявка с сайта СЕРВИС ИПОТЕЧНОГО СТРАХОВАНИЯ <noreply@ips-service.ru/>\r\n";
        if (mail($to, $subject, $message, $headers)) {
            http_response_code(200);
            die(array());
        } else {
            http_response_code(403);
            die(array());
        }



?>
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


    $to = 'rudikov-web@yandex.ru'; 
    $subject = 'Обращение с сайта ips-service.ru';
    $message = '
                <html>
                    <head>
                        <title>'.$_REQUEST["msg"].'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_REQUEST['name'].'</p>
                        <p>Телефон: '.$_REQUEST['tel'].'</p> 
                        <p>e-mail: '.$_REQUEST['mail'].'</p>                   
                        <p>ГосНомер: '.$_REQUEST['number'].'</p>                   
                        <p>Форма: '.$_REQUEST['msg'].'</p>                   
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: Заявка с сайта СЕРВИС ИПОТЕЧНОГО СТРАХОВАНИЯ <rudikov-web@yandex.ru>\r\n";
        if (mail($to, $subject, $message, $headers)) {
            http_response_code(200);
            die(array());
        } else {
            http_response_code(403);
            die(array());
        }



?>
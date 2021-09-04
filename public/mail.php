<?php
    // Begin of CORS things
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With,Origin,Content-Type,Cookie,Accept');
 
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('HTTP/1.1 204 No Content');
    die;
}
// End of CORS things
 
$requestBody = file_get_contents('php://input');
$requestBody = json_decode($requestBody, true);

if ($requestBody === null) {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode([
        'errorMessage' => 'Please provide valid JSON',
    ]);
    die;
}
 
// manipulate with $requestBody['keys']
$requestBody['newKey'] = true;
$name = $requestBody['name'];
$email = $requestBody['email'];
$title = $requestBody['title'];
$message = $requestBody['message'];
// Json Header
header('Content-Type: application/json');

$result = [
    'name'=>$name,
    'email' =>$email,
    'title'=>$title,
    'message'=>$message
];

$to = 'test@example.com';
$subject = $title;
$message = $message;
$headers = 'From:' .$email;

if(mail($to,$subject,$message,$headers)){
    json_encode(['Email' => 'ok']);
}else{
    json_encode(['Email' => 'not ok']);
}

// return changed $requestBody
echo json_encode($result); die;
    



?>
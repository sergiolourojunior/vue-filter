<?php

$_POST = json_decode(file_get_contents("php://input"),true);

require_once '../model/DAO.php';

$name = $_POST['name'];
$gender = $_POST['gender'];
$city = $_POST['city'];
$state = $_POST['state'];
$picture = $_POST['picture'];

if(empty($name) || empty($gender) || empty($city) || empty($state) || empty($picture)) {
    $return['success'] = false;

    if(!empty($name)) {
        $return['message'] = 'No name data';
    } elseif(!empty($gender)) {
        $return['message'] = 'No gender data';
    } elseif(!empty($city)) {
        $return['message'] = 'No city data';
    } elseif(!empty($state)) {
        $return['message'] = 'No state data';
    } elseif(!empty($picture)) {
        $return['message'] = 'No picture data';
    }
} else {

    $dao = new DAO();

    $query = $dao->prepare("INSERT INTO person (name, gender, city, state, picture) VALUES (:name, :gender, :city, :state, :picture)");
    $query = $query->execute(
        [
            ':name' => $name,
            ':gender' => $gender,
            ':city' => $city,
            ':state' => $state,
            ':picture' => $picture
        ]
    );

    if(empty($dao->errorInfo()[1])) {
        $return = [
            'message' => 'OK',
            'success' => true
        ];
    } else {
        $return = [
            'message' => 'Not storage in database',
            'success' => false
        ];
    }

}

header('Content-Type: text/json');
echo json_encode($return);
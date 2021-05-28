<?php

require_once '../model/DAO.php';

$dao = new DAO();

$query = $dao->query("SELECT *, 1 AS visible FROM person ORDER BY name ASC");

header('Content-Type: text/json');
echo json_encode($query->fetchAll(PDO::FETCH_ASSOC));
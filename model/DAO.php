<?php

class DAO extends PDO {

    public function __construct() {

        $param = [
            'DB_HOST' => 'localhost',
            'DB_PORT' => 3306,
            'DB_NAME' => 'filter',
            'DB_USER' => 'root',
            'DB_PASS' => ''
        ];

		try {
			parent::__construct(
				'mysql:host='.$param['DB_HOST'].';dbname='.$param['DB_NAME'].';port='.$param['DB_PORT'],
				$param['DB_USER'],
				$param['DB_PASS']
			);
			parent::exec("set names utf8");
			parent::setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);
		} catch(PDOException $e) {
			throw new Exception($e->getMessage());

			die('BD Error');
		}
	}

}
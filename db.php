<?php

try {
   $connection = new PDO("mysql:host=". DB_HOST. ";dbname=". DB_DATABASE , DB_USER, DB_PASSWORD);
} catch (PDOException $exception) {
   die("Error connecting to database : ".$exception->getMessage() . DB_DATABASE . ": " . $exception->getMessage());
}
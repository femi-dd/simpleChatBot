<?php

class DBConnection {

   private $dsn = "mysql:dbname=chatbot;host=localhost";
   private $user = "root";
   private $password = "";
   private $connection;

   public function getConnection() {
      try {
         $this->connection = new PDO($this->dsn, $this->user, $this->password);
      } catch (PDOException $e) {
         echo 'Connection failed: ' . $e->getMessage();
      }
      return $this->connection ? $this->connection : null;
   }

}

?>

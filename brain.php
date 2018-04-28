<?php
require "db.php";

function train($question, $answer) {
   $question = trim($question);
   $answer = trim($answer);
   if(store($question, $answer)) {
      return "🤖 I just learnt something new, thanks to you 😎";
   } else {
      return "🤖 I'm sorry, An error occured while trying to store what i learnt 😔";
   }
}

function findThisPerson($user){
   global $conn;
   $statement = $conn->prepare("select * from interns_data where username like :user or name like :user limit 1");
   $statement->bindValue(':user', "%$user%");
   $statement->execute();
   $statement->setFetchMode(PDO::FETCH_ASSOC);
   $rows = $statement->fetchObject();
   return $rows;
}

function searchRequest($request) {
   global $conn;
   $statement = $conn->prepare("select answer from chatbot where question like :request order by rand()");
   $statement->bindValue(':request', "%$request%");
   $statement->execute();
   $statement->setFetchMode(PDO::FETCH_ASSOC);
   $rows = $statement->fetch();
   $response = $rows['answer'];
   if(!empty($response)):
      $response = "🤖 ".$response;
   endif;
   //check for function
   if(preg_match('/(\(+[a-zA-Z_]+\))/', $response, $match)) {
      $functionName = $match[0];
      $functionName = str_replace('(', '', $functionName);
      $functionName = str_replace(')', '', $functionName);
      if(function_exists($functionName)) {
         $response = str_replace($functionName, $functionName(), $response);
      } else {
         $response = "🤖 I'm sorry, The function doesn't exist";
      }
   }
   return $response;
}

function store($request, $response) {
   global $conn;
   $statement = $conn->prepare("insert into chatbot (question, answer) values (:request, :response)");
   $statement->bindValue(':request', $request);
   $statement->bindValue(':response', $response);
   $statement->execute();
   if($statement->execute()) {
      return true;
   } else {
      return false;
   }
}

if($_SERVER['REQUEST_METHOD'] === "post" and isset($_POST['new_request'])) {
   $bot_response['response'] = [];
   $user_request = "";
   $bot_response['response'] = "";
   $request = strtolower($_POST['new_request']);
   $user_request = trim($request);
   if(empty($user_request)) {
      $bot_response['response'] = "🤖 You haven't made any request";
   } else {
      if(!empty(searchRequest($user_request))) {
         $bot_response['response'] = searchRequest($user_request);
      } else if(preg_match("/(train:)/", $user_request)) {

         $power_split = explode("#", $request);
         $question = trim(preg_replace("/(train:)/", "", $power_split[0]));
         $answer = trim($power_split[1]);
         $password = trim($power_split[2]);
         if($password != "password") {
            $bot_response['response'] = "🤖 Training Access Denied!";
         } else {
            $bot_response['response'] = train($question, $answer);
         }

      } else if(preg_match("/(aboutbot)/", $user_request) || preg_match("/(aboutbot:)/", $user_request) || preg_match("/(about bot)/", $user_request)) {
         $bot_response['response'] = "🤖 Version 4.0";
      } else if(preg_match('/(find:)/', $request)) {
         $ex = explode("find:", $request);

         if(!empty($users = findThisPerson($ex[1]))) {
            $bot_response['response'] = array('resultType'=>'find', 'users'=> $users);
         } else {
            $bot_response['response'] = "🤖 I couldn't find a user by that username or name";
         }

      } else {
         $bot_response['response'] = "🤖 I  don't understand your request, I hope you wouldn't mind training me?";
      }
   }
   send:
   echo json_encode($bot_response);
}

?>

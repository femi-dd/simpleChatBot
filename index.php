<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <title>SimpleChatBot</title>
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta name="author" content="Kole-Ibrahim AbdulQudus" />
   <meta name="description" content="Simple chatBot written in PHP and JavaScript" />
   <!-- Bootstrap CSS -->
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous" />
   <!-- Custom CSS -->
   <link rel="stylesheet" href="./assets/css/style.css"/>
</head>
<body>

   <main>
      <div class="container" id="all_content">
         <div class="bot round-corners">
            <div class="inner">
               <h2>Simple ChatBot</h2>
               <i><b>Bot Tips</b> :<br />
                  1. train: question # answer # password<br />
                  2. To find a question, just type find:question
               </i>
               <div id="chatarea"></div>
               <div class="input-group">
                  <input type="text" class="form-control" id="message" type="text" placeholder="Message" name="new_request" />
                  <div class="input-group-btn">
                     <button class="btn btn-success pull-right" id="send" type="button">Send 💬</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </main>

   <footer style="" id="footer">
      <p>by Femi_DD <script>let date = new Date(); document.write(date.getFullYear());</script></p>
   </footer>

   <!-- Optional JavaScript -->
   <!-- jQuery first, then Popper.js, then Bootstrap JS -->
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
   <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW
   +L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script> -->
   <!-- Custom  JavaScript. -> Prepared chatUI and sends ajax request to the brain -->
   <script type="text/javascript" src="./assets/js/chatUI.js"></script>
   <script type="text/javascript">
   $(document).ready(() => {
      newElementsForBot({"response" : "Hello friend."});
   });
   </script>

</body>
</html>

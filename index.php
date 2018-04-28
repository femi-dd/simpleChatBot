<!doctype html>
<html lang="en">
<head>
   <!-- Required meta tags -->
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

   <!-- Bootstrap CSS -->
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
   <link rel="stylesheet" href="style.css" />
   <script src="request.js"></script>

   <title>The femiBot 🤖</title>
</head>
<body>

   <div class="container">

      <div id="all_content">
         <div class="bot round-corners">
            <div class="inner">
               <h2>The femiBot 🤖</h2>
               <i style="font-size: 15px">Bot Tips :<br />
                  1. train: question # answer # password<br />
                  2. To find a user, just type find:username or find:name</i>
                  <div id="chatarea" style="overflow: auto; height:300px; border:1px solid whitesmoke; border-radius:5px"></div>
                  <div class="input-group">
                     <input type="text" class="form-control" id="message" type="text" placeholder="Message" name="newrequest" />
                     <div class="input-group-btn">
                        <button class="btn btn-success pull-right" id="send" onclick="sendData()" value="newrequest" type="button">Send 💬</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   </div>

   <footer style="margin-bottom:0px; text-align:center; padding-top:25px;" id="footer">
      <p>2018. Femi_DD</p>
   </footer>

   <!-- Optional JavaScript -->
   <!-- jQuery first, then Popper.js, then Bootstrap JS -->
   <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
</body>
</html>

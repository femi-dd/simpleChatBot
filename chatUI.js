function newElementsForUser(userRequest) {
   var chatArea = $("#chatarea");
   var messageElement = "<div class='form-control form-control2 text-right'>" + userRequest + "</div>";
   chatArea.html(chatArea.html() + messageElement);
   var time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
   var timeElement = "<p class='timeEl text-right'>" + time + "</p>";
   chatArea.html(chatArea.html() + timeElement);
   chatArea.scrollTop($("#chatarea")[0].scrollHeight);
}

function newElementsForBot(botResponse) {
   var chatArea = $("#chatarea");
   if (botResponse.response.resultType == "find") {
      var messageElement = "<div class='form-control form-control2 text-left'>Question => " + botResponse.response.question + "<br/>Answer => " + botResponse.response.answer + "<br/></div>";
   } else { 
      var messageElement = "<div class='form-control form-control2 text-left'>" + botResponse.response + "</div>";
   }
   chatArea.html(chatArea.html() + messageElement);
   var time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true , milliseconds: true});
   var timeElement = "<p class='timeEl text-left'>" + time + "</p>";
   chatArea.html(chatArea.html() + timeElement);
   chatArea.scrollTop($("#chatarea")[0].scrollHeight);
}


$(document).ready(function chargeBot() {
   $("#send").click(function () {
      var message = $("#message").val();
      newElementsForUser(message);
      if (message == "" || message == null) {
         response = { 'response': 'Please type something' };
         newElementsForBot(response);
      }else if (message.includes('open:')) {
         url = message.split('open:');
         window.open('http://' + url[1]);
      } else if (message.includes("randomquote:") || message.includes("random quotes:")) {
         $.getJSON("https://talaikis.com/api/quotes/random/", function (json) {
            response = json['quote'] + '<br/> Author : ' + json['author'];
            botResponse = { 'response': response };
            newElementsForBot(botResponse);
         });
         $("#chatarea").scrollTop($("#chatarea")[0].scrollHeight);
      } else if (message.includes("aboutbot") || message.includes("about bot") || message.includes("aboutbot:")) {
         response = { 'response': 'Version 4.0' };
         newElementsForBot(response);
      } else {
         $.ajax({
            url: "http://localhost/Github/simpleChatBot/brain.php",
            type: "POST",
            data: { new_request: message },
            dataType: "json",
            success: function (botResponse) {
               newElementsForBot(botResponse);
            }
         });
      }
      $("#message").val("");
   });
});

document.body.addEventListener('keyup', function (e) {
   if (e.keyCode == "13") {
      $("#send").click();
   }
});
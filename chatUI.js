function newElementsForUser(userRequest) {
   var chatArea = document.getElementById("chatarea");
   var messageElement = document.createElement("div");
   messageElement.className = "form-control form-control2 text-right";
   messageElement.innerHTML = userRequest;
   var id = Date.now();
   messageElement.setAttribute("id", id);
   chatArea.appendChild(messageElement);
   var timeElement = document.createElement("p");
   timeElement.className = "timeEl text-right";
   var time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
   timeElement.innerHTML = time
   chatArea.appendChild(timeElement);
}

function newElementsForBot(botResponse) {
   var chatArea = document.getElementById("chatarea");
   var messageElement = document.createElement("div");
   if(botResponse.response.resultType == "find") {
      messageElement.innerHTML = "Question => " + botResponse.response.question + "\n" +
      "Answer => " + botResponse.response.answer + "\n";
   } else {
      messageElement.innerHTML = botResponse.response;
   }
   messageElement.className = "form-control form-control2 text-left";
   var id = Date.now();
   messageElement.setAttribute("id", id);
   chatArea.appendChild(messageElement);
   var timeElement = document.createElement("p");
   timeElement.className = "timeEl text-left";
   var time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true , milliseconds: true});
   timeElement.innerHTML = time;
   chatArea.appendChild(timeElement);
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
         // newElementsForUser("opening...");
         window.open('http://' + url[1]);
      } else if (message.includes("randomquote:")) {
         $.getJSON("https://talaikis.com/api/quotes/random/", function (json) {
            var quote = "";
            var author = "";
            // var numRand = Math.floor((Math.random() * json.length));
            response = json['quote'] + '<br/> Author : ' + json['author'];
            botResponse = { 'response': response };
            newElementsForBot(botResponse);
         });
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
               $("#message").val("");
            }
         });
      }
      $("#message").val("");
      $("#chatarea").scrollTop($("#chatarea")[0].scrollHeight);
   });
});
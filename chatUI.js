function newElementsForUser(userRequest) {
   var chatArea = document.getElementById("chatarea");
   var messageElement = document.createElement("input");
   messageElement.className = "form-control form-control2 text-right";
   messageElement.value = userRequest;
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
   if(botResponse.response.resultType == "find") {
      var messageElement = document.createElement("div");
      messageElement.innerHTML = "Question => " + botResponse.response.question + "\n" +
      "Answer => " + botResponse.response.answer + "\n";
   } else {
      var messageElement = document.createElement("input");
      messageElement.value = botResponse.response;
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

$(document).ready(function() {
   $("#send").click(function() {
      var message = $("#message").val();
      if(message.includes('open:')) {
         url = message.split('open:')
         window.open('http://' + url[1]);
         newElementsForUser(message);
      } else {
         newElementsForUser(message);
         $.ajax({
            url: "http://localhost/Github/simpleChatBot/brain.php",
            type: "post",
            data: {new_request: message},
            dataType: "json",
            success: function(botResponse) {
               newElementsForBot(botResponse);
               $("#message").val("");
               $("#chatarea").scrollTop($("#chatarea")[0].scrollHeight);
            }
         });
      }
   });
});

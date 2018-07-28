function newElementsForUser(userRequest) {
   const messageElement = "<div class='form-control form-control2 text-right'>" + userRequest + "</div>";
   let chatArea = $("#chatarea");
   chatArea.html(chatArea.html() + messageElement);
   let time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
   let timeElement = "<p class='timeEl text-right'>" + time + "</p>";
   chatArea.html(chatArea.html() + timeElement);
   chatArea.scrollTop($("#chatarea")[0].scrollHeight);
}

function newElementsForBot(botResponse) {
   let chatArea = $("#chatarea");
   if (botResponse.response.resultType == "find") {
      messageElement = "<div class='form-control form-control2 text-left'>Question => " + botResponse.response.question + "<br/>Answer => " + botResponse.response.answer + "<br/></div>";
   } else {
      messageElement = "<div class='form-control form-control2 text-left'>" + botResponse.response + "</div>";
   }
   chatArea.html(chatArea.html() + messageElement);
   let time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, milliseconds: true });
   let timeElement = "<p class='timeEl text-left'>" + time + "</p>";
   chatArea.html(chatArea.html() + timeElement);
   chatArea.scrollTop($("#chatarea")[0].scrollHeight);
}


$(document).ready(chargeBot = () => {
   $("#send").click(() => {
      let message = $("#message").val();
      newElementsForUser(message);
      if (message === "" || message === null) {
         response = { 'response': 'Please type something' };
         newElementsForBot(response);
      } else if (message.includes('open:')) {
         url = message.split('open:');
         window.open('http://' + url[1]);
      } else if (message.includes("randomquote:") || message.includes("random quotes:") || message.includes("random quotes")) {
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
         fetch('http://localhost/Github/simpleChatBot/app/brain.php', {
            method: 'post',
            body: { new_request: message },
            headers: { 'Content-Type': 'application/json' }
         }).then((response) => {
            return response.json();
         }).then((botResponse) => {
            newElementsForBot(botResponse);
         }).catch((error) => {
            console.log(error);
         });
      }
      $("#message").val("");
   });
});

document.body.addEventListener('keyup', (e) => {
   if (e.keyCode == "13") {
      $("#send").click();
   }
});

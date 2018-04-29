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
      messageElement.innerHTML = "Intern ID => " + botResponse.response.users.intern_id + "\n" +
      "Intern Name => " + botResponse.response.users.name + "\n" +
      "Intern Username => " + botResponse.response.users.username + "\n" +
      "Intern Profile Picture => " + botResponse.response.users.image_filename;
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



function checkForm() {
   if($("#messages").val() == "") {
      alert('no empty stuff');
   }
}

function newEvent(eventData) {
  var newCard = document.createElement("ons-card");
  console.log(eventData);
  var eventTitle = "eventData.title";
  var textNode = document.createTextNode(eventTitle);
  newCard.appendChild(textNode);
  newCard.setAttribute("id", "eventData.uid");
  var navigate = document.getElementById("myNav");
  newCard.onclick = function(eventTitle){
    navigate.pushPage('refresher.html', { animation : 'slide' });
  };
  document.getElementById("eventsList").appendChild(newCard);
  alert("Event card titled " + eventTitle + " added to Events Page!");
}

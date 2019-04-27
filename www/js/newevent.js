function newEvent(eventData) {
  var newCard = document.createElement("ons-card");
  var eventTitle = eventData.title;
  var textNode = document.createTextNode(eventTitle);
  newCard.appendChild(textNode);
  newCard.appendChild(document.createTextNode(eventData.date));
  newCard.setAttribute("id", "eventData.uid");
  var navigate = document.getElementById("myNav");
  newCard.onclick = function(eventData){
    navigate.pushPage('refresher.html', { 
      data : {
        title: eventData.title,
        location: eventData.location,
        owner: eventData.owner,
      },
      animation : 'slide' });
  };
  document.getElementById("eventsList").appendChild(newCard);
}

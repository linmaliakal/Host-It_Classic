function newEvent(eventData) {
  var newCard = document.createElement("ons-card");
  //things
  var eventTitle = eventData.title;
  var eventLocation = eventData.location;
  var eventDate = eventData.date;
  var eventOwner = eventData.owner;
  var textNode = document.createTextNode(eventTitle + " ");
  newCard.appendChild(textNode);
  newCard.appendChild(document.createTextNode("(" + eventData.date + ")"));
  newCard.setAttribute("id", "eventData.uid");
  var navigate = document.getElementById("myNav");
  newCard.onclick = function(eventData){
    var options = {
      data: {
        title: eventTitle,
        location: eventLocation,
        date: eventDate,
        owner: eventOwner
      },
      animation: 'slide'
      };
    navigate.pushPage('refresher.html', options);
  }
  document.getElementById("eventsList").appendChild(newCard);
}

function newEvent(eventData) {
  var newCard = document.createElement("ons-card");
  var eventTitle = eventData.title;
  var textNode = document.createTextNode(eventTitle);
  newCard.appendChild(textNode);
  newCard.appendChild(document.createTextNode(eventData.date));
  newCard.setAttribute("id", "eventData.uid");
  var navigate = document.getElementById("myNav");
  newCard.onclick = function(eventTitle){
    navigate.pushPage('refresher.html', { 
      data : {
        title: 'example'
      },
      animation : 'slide' });
  };
  document.getElementById("eventsList").appendChild(newCard);
}

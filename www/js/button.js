document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'Tab2') {
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('event_instance.html', {data: {title: 'Events Page'}});
    };
  } else if (page.id === 'Event_Instance') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});

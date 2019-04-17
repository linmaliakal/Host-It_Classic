document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'Tab2') {
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNav').pushPage('event_instance.html', {data: {title: 'Event Form'}});
    };
  }
  if (page.id === 'Event_Instance') {
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNav').pushPage('tab2CLONE.html', {data: {title: 'Tab 2 Clone'}});
    };
  } else if (page.id === 'Event_Instance') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});

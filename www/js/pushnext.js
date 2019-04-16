document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'Tab2') {
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNav').pushPage('event_instance.html', {data: {title: 'Event Form'}});
    };
  } else if (page.id === 'refresh') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});

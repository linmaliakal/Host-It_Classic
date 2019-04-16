document.addEventListener('init', function(event) {
  console.log('This is a lifecycle event!', event.target);

  var page = event.target;
  if (page.matches('#Tab2')) {
    page.querySelector('ons-fab').onclick = function() {
      ons.notification.alert('Added an event!');
    };
  }
});

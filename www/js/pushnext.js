document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'Tab1') {
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('refresh.html', {data: {title: 'Refresh'}});
    };
  } else if (page.id === 'refresh') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});

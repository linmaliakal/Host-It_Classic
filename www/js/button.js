    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#tab2.html').pushPage('event_instance.html', {data: {title: 'Events Page'}});
    };


var login = function() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'bob' && password === 'secret') {
    ons.notification.alert('Congratulations!');
  } else {
    ons.notification.alert('Incorrect username or password.');
  }
};

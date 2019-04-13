var googleSignOut = function() {
    firebase.auth().signOut().then(() => {
      var nav = document.getElementById('myNav');
      nav.replacePage('login.html').then(() => ons.notification.alert('you logged out!'))
    });
}

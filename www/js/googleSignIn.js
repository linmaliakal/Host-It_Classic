var signedIn = false;

var googleSignIn = function() {
    console.log('login button clicked');
    var nav = document.getElementById('myNav');
    console.log(nav.topPage)
    // Using a popup.
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
    });

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('user logged in');
            if (!signedIn)
              nav.replacePage('app.html').then(() => ons.notification.alert('you logged in!'))

            signedIn = true;
        } else {
            console.log('user logged out');

            if (signedIn)
              nav.replacePage('login.html').then(() => ons.notification.alert('you logged out!'))

            signedIn = false;
        }
    });
}

var googleSignIn = function() {
    console.log('login button clicked');
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
        } else {
            console.log('user logged out');
        }
    }); 
}

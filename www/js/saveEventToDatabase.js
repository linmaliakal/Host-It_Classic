function writeNewEvent(uid, username, title, location, date) {
    // An event entry.
    var eventData = {
      uid: uid,
      owner: username,
      title: title,
      location: location,
      date: date
    };

    // Get a key for a new Event.
    var newEventKey = firebase.database().ref().child('events').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/events/' + newEventKey] = eventData;
    updates['/user-events/' + uid + '/' + newEventKey] = eventData;
  
    return firebase.database().ref().update(updates);
}

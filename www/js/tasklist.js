function addTask() {
  var newTask = document.createElement("li");
// Add text input
    var inputValue = document.getElementById("stickyInput").value;
    var textnode = document.createTextNode(inputValue);
    newTask.appendChild(textnode);
    var closeButton = document.createElement("SPAN");
    var text = document.createTextNode(" \u00D7");
    closeButton.className = "close";
    closeButton.appendChild(text);
    newTask.appendChild(closeButton);
    if (inputValue === "") {
      alert("You must include a task item!");
    } else {
      document.getElementById("taskList").appendChild(newTask);
    }
  var close2 = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close2.length; i++) {
    close2[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    var greeting;
    if (firstLetter === 'j') {
      greeting = byeSpeaker.speak(names[i]);
    } else {
      greeting = helloSpeaker.speak(names[i]);
    }

    var greetingElement = document.getElementById("greeting");
    var newGreeting = document.createElement("div");
    newGreeting.textContent = greeting;
    greetingElement.appendChild(newGreeting);
  }
})();

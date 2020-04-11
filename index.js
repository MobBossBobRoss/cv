function eventSwitch(eventVariable) {
  switch (eventVariable) {
    case "w":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "a":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "d":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(eventVariable)
      break;
}}

function animateButton(button) {
  var activeButton = document.querySelector("." + button);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed")
  }, 100);

}

var buttonList = document.querySelectorAll("button.drum");

for (index = 0; index < buttonList.length; index++) {
  buttonList[index].addEventListener("click", function() {
    var buttonHTML = this.innerHTML;
    eventSwitch(buttonHTML);
    animateButton(buttonHTML);
  })
}

document.addEventListener("keydown", function(event) {
  eventSwitch(event.key)
  animateButton(event.key)
})

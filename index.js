var colorArray = ["red", "yellow", "green", "blue"];
var pattern = [];
var step = 0;
var level = 0;

function updatePattern() {
  r = Math.floor((Math.random(0, 4) * 4));
  var nextColor = colorArray[r];

  step = 0;

  animateButton(nextColor);

  level++
  $("#level-title").text("Level " + level)

  pattern.push(nextColor);
}

function animateButton(color) {
  $("#" + color).addClass("pressed");
  setTimeout(function() {
    $("#" + color).removeClass("pressed");
  }, 150)

  buttonSound = new Audio("sounds/" + color + ".mp3");
  buttonSound.play();
}

function gameOver() {
  $("body").addClass("game-over")
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 150)

  $("#level-title").text("Game Over, press any key to restart.");

  pattern = [];
  level = 0;

  wrongSound = new Audio("sounds/wrong.mp3");
  wrongSound.play();
}

$(document).keypress(function() {
  if (level === 0) {
    updatePattern();
    }
  })

$(".btn").click(function() {
  var clicked = $(this).attr("id")

  animateButton(clicked)

  if (clicked === pattern[step]) {
    if (step === (pattern.length - 1)) {
      $("#level-title").text("Very good!")
      setTimeout(function() {
        updatePattern();
      }, 1000)
    } else {
      step++;
    }
  } else {
    gameOver();
  }
})

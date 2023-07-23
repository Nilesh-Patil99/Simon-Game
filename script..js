
let userClickedpattern = [];
let butttonColor = ["green", "red", "yellow", "blue"];
let randomChoosenColor = [];
let level = 0;
let highScore=0;
let wrong = new Audio("sounds/wrong.mp3");
let gamePattern = [];
let audio_green = new Audio("sounds/green.mp3");
let audio_red = new Audio("sounds/red.mp3");
let audio_yellow = new Audio("sounds/yellow.mp3");
let audio_blue = new Audio("sounds/blue.mp3");

  let levelName= function (bar){
    if(bar>0){$("h1").text("Level " + bar);} else{
      $("h1").text("Refresh Me to Start");
    }
    
  }
 
nextSequece();
function nextSequece() {
 
  
  levelName(level)
  if(level> highScore){
    $("h2").text("High Score: "+ level)
  }
  level++;
 
  var randomNumber = Math.floor(Math.random() * 4);
  randomChoosenColor = butttonColor[randomNumber];
  gamePattern.push(randomChoosenColor);

  $("." + randomChoosenColor).addClass("pressed");
  let sound1 = new Audio("sounds/" + randomChoosenColor + ".mp3");
  sound1.play();

  setTimeout(function () {
    $("." + randomChoosenColor).removeClass("pressed");
  }, 500);
}



$(".green").click(function (eve) {
  audio_green.play();
  animateClick(".green");
  handler("green");
});
$(".red").click(function (eve) {
  animateClick(".red");
  audio_red.play();
  handler("red");
});
$(".blue").click(function (eve) {
  animateClick(".blue");
  audio_blue.play();
  handler("blue");
});
$(".yellow").click(function (eve) {
  animateClick(".yellow");
  audio_yellow.play();
  handler("yellow");
});

function handler(color) {
  let userChoosenColor = color;
  userClickedpattern.push(userChoosenColor);
  checkAnswer();
}

function animateClick(name) {
  $(name).addClass("pressed");
  setTimeout(function () {
    $(name).removeClass("pressed");
  }, 200);
}


function checkAnswer(currentLevel) {
  if (
    userClickedpattern[userClickedpattern.length - 1] ==
    gamePattern[userClickedpattern.length - 1]
  ) {
    console.log("right");

    
    if(userClickedpattern.length==gamePattern.length){
      setTimeout(function () {
        nextSequece();
      }, 1000);
      userClickedpattern = [];
    }
    
  } else {
    $("body").addClass("game-over");
    $("h1").text("Press any Key to start again")
    $("body").keypress(function () {
      $("body").removeClass("game-over");
      highScore=level
      level = 0;
      userClickedpattern = [];
      gamePattern = [];
      levelName(level)
      
      $("body").keypress(
        setTimeout(
          function(){
            nextSequece()
          },2000
        )
      )
      
     
    });
    let wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
  }
 
}



var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gamepattern = [];
var userClickedpattern = [];
var press = 0;
var user_input = 0;

$(document).keypress(function() {

  if (press == 0) {
    gamepattern.length = 0;
    user_input = 0;
    nextSequence();
  }

});

// function gameCycle() {
//   randomChosenColour = buttonColours[nextSequence()];
//   gamepattern.push(randomChosenColour);
//
//   $("#" + randomChosenColour).animate({
//     opacity: '0'
//   });
//   $("#" + randomChosenColour).animate({
//     opacity: '1'
//   });
//   let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//   audio.play();
// }


function nextSequence() {
  press++;
  $("h1").text("Level " + press);
  let randomNumber = Math.floor((Math.random()) * 4);
  randomChosenColour = buttonColours[randomNumber];
  gamepattern.push(randomChosenColour);
  console.log(gamepattern);
  $("#" + randomChosenColour).animate({
    opacity: '0'
  });
  $("#" + randomChosenColour).animate({
    opacity: '1'
  });
  setTimeout(function(){
  let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}, 300);
  clearClickedPattern();
}


$(".btn").click(function() {
  if(press != 0){
    let userChosenColour = $(this).attr("id");
    userClickedpattern.push(userChosenColour);
    if (userClickedpattern[user_input] == gamepattern[user_input]) {
      animatePress(userChosenColour);
      setTimeout(function(){
      let audio = new Audio("sounds/" + userChosenColour + ".mp3");
      audio.play();
    });
      let gameCompare = ((user_input + 1) / press);
      if (gameCompare == 1) {
        nextSequence();
      } else {
        user_input++;
      }
    } else {
      $("body").css("background-color", "red");
      setTimeout(function(){
          $("body").css("background-color", "#011F3F");
      }, 200);
      $("h1").text("GAME OVER");
      $("h1").append("<br>Retry again?");
      press = 0;
        let audio = new Audio("sounds/wrong.mp3");
        audio.play();

    }
  }
});

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function clearClickedPattern(){
  userClickedpattern.length = 0;
  user_input = 0;
}

// ("sounds/" + randomChosenColour + ".mp3")

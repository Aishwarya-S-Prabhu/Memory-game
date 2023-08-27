var buttonColours = ["red", "blue", "green", "yellow"];
var randomNumber;
var randomChosenColour;
var gamePattern=[];
var sound;

function nextSequence(){
    randomNumber= Math.floor(Math.random()*4);
    // console.log(randomNumber);
    randomChosenColour=buttonColours[randomNumber];
    // console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern);
    sound = new Audio("./sounds/"+randomChosenColour+".mp3");
    sound.play();
    $("."+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

$("."+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
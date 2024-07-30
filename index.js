var buttoncolors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;


$(document).keypress( function(event) {
    if (!started) { 
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
        
    }
    });

$(".btn").click( function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
    console.log(userClickedPattern);
    console.log(gamePattern);
});

function checkAnswer (currentLevel) {
    if ( userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length ){
        
        console.log ("Success");

        setTimeout(function(){
            nextSequence();
        }, 1000);
    }
    } else { 
        playSound("wrong");
        
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key To Restart");
        setTimeout (function() {
            $("body").removeClass("game-over"), 200
        });
        console.log ("wrong");
        
            startOver ();
        
    }
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    
    var randomChosenColor = buttoncolors[randomNumber];
    gamePattern.push(randomChosenColor);


$("#" + randomChosenColor ).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);

}


function playSound (name) {
    var audio = new Audio('./sounds/' + name + '.mp3');
audio.play();

}


function animatePress(currentColour){

    $("#" + currentColour).addClass("pressed");
   setTimeout(function()  {
    $("#" + currentColour).removeClass("pressed"); 
   }, 100);
        
    }

    function playSoundWrong () {
        var audio1 = new Audio('./sounds/wrong.mp3');
    audio1.play();
    }
    
    function animateGameOver () {
    
        
    
        $("body").addClass("game-over");
        setTimeout (function() {
            $("body").removeClass("game-over"), 200
        });
        
    }

 

function startOver () {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}



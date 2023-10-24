//game Variabel

var gameState = false;

var level = 1

var gameSqeuence = [];

var userSqeuence = [];

var buttonArry = ["red", "blue", "green", "yellow"]

//random color generator

function randomColor ()
{
    var randomNumber = Math.floor(Math.random()*4)
    return buttonArry[randomNumber];
}

//sound fuction
function playSFX(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

//start Games

$(document).on("click", function(e){
    if (!gameState)
    {
        startGame();
        gameState=true;
    }
})


$(document).keypress(function (e) { 
    if (!gameState)
    {
        startGame();
        gameState=true;
    }

});

//start game fuction

function startGame()
{

    $("#level-title").text("level " + level)
    gameSqeuence.push(randomColor());
    userSqeuence = [];
    setTimeout(function()
    {
        $("#" + gameSqeuence[gameSqeuence.length-1]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }, 600)
}

//clicking fuction

$(".btn").on("click", function(e){
    
    playSFX($(e.currentTarget).attr("id"))
    //button click animation
    $(e.currentTarget).addClass("pressed");
    setTimeout(function()
    {
        $(e.currentTarget).removeClass("pressed");
    }, 100)

    //adding value of current click
    userSqeuence.push(($(e.currentTarget)).attr("id"))

    //checking the answer
    checkAnswer(userSqeuence.length-1)


})

    

// console.log("working!"); log for checking 
    



function checkAnswer(currentLevel)
{   
    //cheacking if the clicked box is the same as the game's spcified box
    if(userSqeuence[currentLevel] === gameSqeuence[currentLevel])
    {
        //this run after all the items are checked and userSquece = gameSquesnce
        if(userSqeuence.length === gameSqeuence.length)
        {
            // console.log("right"); log for checking

            //updating diffent properties
            gameSqeuence.push(randomColor());
            level++;
            $("#level-title").text("level " + level);
            userSqeuence = [];
            setTimeout(function()
            {
                $("#" + gameSqeuence[gameSqeuence.length-1]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            }, 600)
        }
    }

    //if the user click the worng one
    else
    {
        gameState=false;
        level = 1;
        gameSqeuence = [];
        playSFX(worng)
        $("body").addClass("game-over");
        $("#level-title").text("You Lose, Press any key to restart");
        setTimeout(function()
        {
            $("body").removeClass("game-over");
        }, 300)
    
        // console.log("worng"); log for checking
    }
  

}

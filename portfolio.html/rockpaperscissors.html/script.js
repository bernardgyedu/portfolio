let imgArray = [];

imgArray[0] = new Image();
imgArray[0].src = 'rock.png';

imgArray[1] = new Image();
imgArray[1].src = 'paper.png';

imgArray[2] = new Image();
imgArray[2].src = 'scissors.png';

imgArray[3] = new Image();
imgArray[3].src = 'spock.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'lizard.jpg';





function randomInteger(){

  let temp =  Math.floor((Math.random()*3)+1);
 return temp;

}


function checkResult(userChoice){
  let computerChoice = randomInteger();

  //Win
  if((userChoice == 1 && computerChoice == 3) || (userChoice == 2 && computerChoice == 1) || (userChoice == 3 && computerChoice == 2) || (userChoice == 5 && computerChoice == 4) || (userChoice == 5 && computerChoice == 2) || (userChoice == 4 && 3) || (userChoice == 4 && computerChoice == 1)){

   $(".result").text("You Win! Well done!");

  }
  //Lose
  else if((userChoice == 1 && computerChoice == 2) || (userChoice == 2 && computerChoice == 3) || (userChoice == 3 && computerChoice == 1) || (userChoice == 5 && computerChoice == 1) || (userChoice == 5 && computerChoice == 3) || (userChoice == 4 && computerChoice == 2)){

    $(".result").text("You Lose! Try again!");
  }
  //Tie
  else{
    $(".result").text("Tie!");
  }
  console.log(userChoice, computerChoice);
  displayChoices(userChoice, computerChoice);
}

function displayChoices(userChoice, computerChoice){
$('#userChoice').attr('src',((imgArray[userChoice - 1]).src));

  $('#computerChoice').attr('src',((imgArray[computerChoice - 1]).src));


}

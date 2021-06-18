// let targetNum = Math.floor(Math.random() * 20) + 1;

// function checkValue(){
//   let result = parseInt($("#guessInput").val());


//   if( result > targetNum ) { 
//     $("#result1").text("Too high! This student does not receive a prize.");
//     $("#result1").css("color", "Red");
//   } else if (result < targetNum) {
//     $("#result1").text("Too low! This student does not receive a prize.");
//     $("#result1").css("color", "Red");
//   } else {
//     $("#result1").text("Correct! This student gets the prize.");
//     $("#result1").css("color", "Green");

//   }


// }


//Variables
let targetNum;
targetNum = Math.floor((Math.random() * 20) + 1);

//Function for it to work
function checkValue() {
 let result = parseInt($("#guessInput").val())

//Conditionals for the hints
if ( result > targetNum){

   $("#result1").css("color","red");
   $("#result1").text("Too high! This student does not receive a prize.");
 } else if (result < targetNum){

   $("#result1").css("color","red");
   $("#result1").text("Too low! This student does not receive a prize.");
 } else if(result == targetNum) {

   $("#result1").css("color","green");
   $("#result1").text("Correct! This student gets the prize.");
 }
 else {
  
  $("#result1").css("color","red");
   $("#result1").text("Please input a number for it to work");
 }
  
}
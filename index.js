var program = true;

while (program) {
  var slots = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  var userInput = "";
  var playerInput = "";
  var game = true;
  var counter = 0;
  var playerWon = false;
  var aiWon = false;
  var emptySlots = [];
  var aiChoice = 0;
  var randChoice = 0;
  var turns = 0;
  var PICheck = true;
  var eE = true;
  var eEString = "";


  console.log("Welcome to TicTacToe");
  console.log("Type 1 to Start");
  console.log("Type 2 to Learn how to Play");
  console.log("Type 3 to Quit")
  userInput = prompt("");

  /////////////////////Game
  if (userInput == 1) {
    console.clear();
    while (game) {
      console.clear();
      //print board
      printBoard(slots);

      //Player input
      playerInput = prompt("");
      while (PICheck) {
        if (playerInput >= 1 && playerInput <= 9) {
          PICheck = false;
          replaceSlots(playerInput, slots);
          turns++;
        }
        else {
          console.clear();
          printBoard(slots);
          console.log("Incorrect Input");
          playerInput = prompt("");
        }
      }
      PICheck = true;

      //check for draw
      drawCheck(turns);

      //Checking board
      checkBoard(slots);

      //AI
      aiTurn(slots);
      turns++;

      //Check board again
      checkBoard(slots);
    }

  }

  //How to play
  else if (userInput == 2) {
    console.clear("");
    console.log("How to play!");
    console.log("");
    console.log("Each slot has a number value accending\nfrom the top left to the bottom right.");
    console.log("");

    var counter = 1;
    for (i = 0; i < 3; i++) {
      console.log("|", counter, "|",
        counter + 1, "|",
        counter + 2, "|");
      counter += 3;
    }
    console.log("");
    console.log("Input the number that references the\nslot you want to place your token.");
    console.log("");
    console.log("Input anything to continue:");
    userInput = prompt("");
    console.clear();
  }

  //Quit Program
  else if (userInput == 3) {
    console.clear();
    program = false;
  }

  //Easter Egg
  else if (userInput == "blocher is a goober") {
    console.clear();
    while (eE) {
      console.log("😂");
    }
  }

  //If user input is not valid
  else {
    console.clear();
    console.log("Invalid input");
  }
}


////////////////////Functions
function printBoard(slots) {
  var counter = 0;
  for (i = 0; i < 3; i++) {
    console.log("|", slots[counter], "|",
      slots[counter + 1], "|",
      slots[counter + 2], "|");
    counter += 3;
  }
}

function replaceSlots(playerInput, slots) {
  if (slots[playerInput - 1] === " ") {
    slots[playerInput - 1] = 'X';
  }
  else {
    console.clear();
    printBoard(slots);
    console.log("Incorrect Input");
    playerInput = prompt("");
    replaceSlots(playerInput, slots);
  }
}

function checkBoard(slots) {
  aiWon = false;
  playerWon = false;
  /*["0", 1, "2", 
  "3", "4", "5", 
  "6", "7", "8"];*/

  //Rows
  counter = 0;
  for (i = 0; i < 3; i++) {
    if (slots[counter] === slots[counter + 1] && slots[counter] === slots[counter + 2]) {
      if (slots[counter] === 'O') {
        aiWon = true;
      }
      else if (slots[counter] === 'X') {
        playerWon = true;
      }
    }
    counter += 3;
  }

  //Columns
  counter = 0;
  for (i = 0; i < 3; i++) {
    if (slots[counter] === slots[counter + 3] && slots[counter] === slots[counter + 6]) {
      if (slots[counter] === 'O') {
        aiWon = true;
      }
      else if (slots[counter] === 'X') {
        playerWon = true;
      }
    }
    counter += 1;
  }

  //Diagonals 
  //Top-left to bottom-right
  counter = 0;
  if (slots[counter] === slots[counter + 4] && slots[counter] === slots[counter + 8]) {
    if (slots[counter] === 'O') {
      aiWon = true;
    }
    else if (slots[counter] === 'X') {
      playerWon = true;
    }
  }

  //Top-right to bottom-left
  counter = 2
  if (slots[counter] === slots[counter + 2] && slots[counter] === slots[counter + 4]) {
    if (slots[counter] === 'O') {
      aiWon = true;
    }
    else if (slots[counter] === 'X') {
      playerWon = true;
    }
  }

  //Check if won
  if (aiWon) {
    console.clear();
    console.log("Game Lost!");
    console.log("Previous Board:");
    printBoard(slots);
    console.log("");
    game = false;
  }

  if (playerWon) {
    console.clear();
    console.log("Congrats Game Won!");
    console.log("Previous Board:");
    printBoard(slots);
    console.log("");
    game = false;
  }
}

function aiTurn(slots) {
  emptySlots = [];
  for (i = 0; i < slots.length; i++) {
    if (slots[i] === " ") {
      emptySlots.push(i);
    }
  }

  randChoice = Math.floor(Math.random() * emptySlots.length);
  aiChoice = emptySlots[randChoice];
  slots[aiChoice] = 'O';

  return slots;
}

function drawCheck(turns) {
  if (turns > 8) {
    console.clear();
    console.log("Draw!")
    console.log("Previous Board:");
    printBoard(slots);
    console.log("");
    game = false;
  }
}
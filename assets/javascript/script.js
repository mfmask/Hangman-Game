// This is the javascript code for Hangman game.

// Player will pick a letter from random word in array. Theme is coffee types.
var gameWords = ["kona","sumatra","decaf","peaberry","caffeine","italian","goldcoast"];

// This is a random word generator of words in the array.
var randomWord = gameWords[Math.floor(Math.random() * gameWords.length)];

var a;
// variable to store selection made by player. Empty variable.
var answers = [];

// Count variable and set to zero.
var count = 0;

// This function sets up to start game, program selects a random word and places the word, with underscores; in order to show how many letters are in word and where letter is in word as game is played.
function startUp() {
  for (var i = 0; i < randomWord.length; i++) {
    answers[i] = "_";
  }
  a = answers.join (" ");
  document.getElementById("answer").innerHTML = a;
}

// This is the letter typed...
function Letter() {
  var letter = document.getElementById("letter").value;

  // ...if it contains a letter in current word.
  if (letter.length > 0) {
    for (var i = 0; i < randomWord.length; i++) 
    {
    //...if letter correct, it is placed here.
      if (randomWord [i] === letter) {
            answers [i] = letter;
        }
    }

    // This is a counter for how many clicks are made. 
    count++;
    document.getElementById("counter").innerHTML = "Number of Clicks: " + count;
    document.getElementById("answer").innerHTML = answers.join(" ");
  } 
    // A max of 8 tries are allowed.
   if(count>8) {
    document.getElementById("stat").innerHTML = "Too Many Tries! Better luck next time!";
   }
} 
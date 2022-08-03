var location1 = 3;
var location2 = 2;
var location3 = 6;
var guess;
var hits = 0;
var guesses = 0;
var isShunk = false;


while (isShunk == false) {
  guess = prompt("Be ready, to fire! (enter a number 0-6):");

  if (guess < 0 || guess > 6) {
    alert("Please enter a valid number");
  } else {
    guesses += 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits += 1;
      alert("HIT!");
      if (hits == 3) {
        isShunk = true;
        alert("You have sunk the battleship");
      }
    } else {
      alert("Miss!");
    }
  }
}
var stats = "You took " + guesses + " guesses to sink the battleships, " + "Which means your shooting accuracy was " + (3 / guesses);
alert(stats)
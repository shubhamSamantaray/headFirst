var scores = [60, 50, 60, 56, 63, 79,
  25, 73, 42, 56, 87, 67,
  83, 87, 49, 74, 23, 45,
  67, 84, 64, 84, 74, 64,
  56, 75, 35, 35, 76, 45,
  78, 45, 67, 83, 45, 77]

function getHighScore(arrayToEvaluate) {
  var highest = 0;
  for (i = 0; i < arrayToEvaluate.length; i++) {
    document.write("Bubble Solution #" + i + " score: " + arrayToEvaluate[i] + "<br>");
    if (scores[i] >= highest) {
      highest = arrayToEvaluate[i];
    }
  }
  return highest;
}

function getBestPositions(arrayToEvaluate, highNum) {
  var position = [];
  for (i = 0; i < arrayToEvaluate.length; i++) {
    if (arrayToEvaluate[i] == highNum) {
      position.push(i);
    }
  }

  return position;
}
var highest = getHighScore(scores);

document.write("Bubbles testes: " + scores.length + "<br>");
document.write("highest bubble score: " + highest + "<br>");
document.write("Solutions with highest score:  " + getBestPositions(scores, highest));
var demoArray = [];
console.log(demoArray.length);
function pageLoadHandler() {
  alert("I am active");
}

function init() {
  addBlur();
  var img = document.getElementById("testImg");
  img.onclick = showAnswer;
}


function showAnswer() {
  var image = document.getElementById("testImg");
  image.style.filter = 'blur(0px)';

  setTimeout(addBlur, 2000)
}

function addBlur() {
  var img = document.getElementById("testImg");
  img.style.filter = 'blur(3px)';
}
window.onload = init;
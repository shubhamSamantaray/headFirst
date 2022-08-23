window.onload = function () {
  var button = document.getElementById("bake");
  button.onclick = function () {
    console.log("Time to bake the cookies.");
    cookies.bake(2500);
  };
};

var cookies = {
  instructions: "Preheat oven",
  bake: function (time) {
    console.log("baking the cookies.");
    setTimeout(done, time);
  }
}

function done() {
  alert("Cookies are ready, take them out to cool.");
  console.log("Cooling the cookies.");
  var cool = function () {
    alert("Cookies are cool, time to eat.");
  };
  setTimeout(cool, 1000);
}
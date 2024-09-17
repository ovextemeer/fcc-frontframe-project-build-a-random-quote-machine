$(document).ready(function () {
  if ($("#text").text() === "") {
    $("#text").text(quotes[getRandomInteger(quotes.length)].text);
  }

  if ($("#author").text() === "") {
    $("#author").text("- " + quotes[getRandomInteger(quotes.length)].source);
  }

  setColor();

  $("#new-quote").click(function () {
    $("#text").text(quotes[getRandomInteger(quotes.length)].text);
    $("#author").text("- " + quotes[getRandomInteger(quotes.length)].source);

    setColor();
  });
});

// 0 to max (excluded)
function getRandomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

// max in 255 of rgb values
function getRandomColor(max) {
  const r = getRandomInteger(max);
  const g = getRandomInteger(max);
  const b = getRandomInteger(max);

  return `rgb(${r}, ${g}, ${b})`;
}

function setColor() {
  let color = getRandomColor(175);

  $("body, a, button, #developer").css("background-color", color);
  $("body, a, button, #developer").css("transition", "background-color 2s");
  $("p i, #text, #author").css("color", color);
  $("p i, #text, #author").css("transition", "color 2s");
}

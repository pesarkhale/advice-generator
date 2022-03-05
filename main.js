const el = document.getElementById("quote");
const btnEvent = document.getElementById("btn");
const author = document.getElementById("author");

function generateQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => {
      return response.json();
    })
    .then((x) => {
      setDiceRotationStyle();
      return x;
    })
    .then((data) => {
      setContent(data);
    })
    .finally(() => {
      resetStyle();
    });
}
function resetStyle() {
  setTimeout(() => {
    btnEvent.style.transform = "";
    btnEvent.style.transition = "";
  }, 500);
}

function setContent(data) {
  el.innerText = '"' + data.content + '"';
  author.innerText = "- " + data.author;
  if (data.length > 150) {
    el.style.fontSize = "1.5em";
  }
}

function setDiceRotationStyle() {
  btnEvent.style.transform = "rotate(180deg)";
  btnEvent.style.transition = "transform 0.5s ease-out";
}

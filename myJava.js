function showAlert() {
  alert("Welcome!");
}

function changeText() {
  const textElement = document.getElementById("textElement");

  if (textElement.textContent === "Hi.") {
    textElement.textContent = "Text has changed!";
    textElement.classList.add("larger-text");
  } else {
    textElement.textContent = "Hi.";
    textElement.classList.remove("larger-text");
  }
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  var newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
}

setInterval(changeBackgroundColor, 1000);

const img1 = document.getElementsByClassName('img-1');
const newImgUrl = 'resursi/do.jpg';

img1.addEventListener('mouseenter', () => {
    img1.src = newImgUrl;
});

img1.addEventListener('mouseleave', () => {
    slika.src = 'resursi/hello.jpg';
});
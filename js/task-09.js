function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const spanColor = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");

const getChangeColor = (even) => {
    const randomColor  = getRandomHexColor() 
    body.style.backgroundColor = randomColor
    spanColor.textContent = randomColor
  }

  buttonChangeColor.addEventListener("click", getChangeColor);

  // const getChangeColor = (even) => {
//   body.style.backgroundColor = spanColor.textContent = getRandomHexColor() 
// }

let counterValue = 0;
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]'); 
const btnId = document.querySelector("#value");

btnDecrement.addEventListener("click", function () {
    counterValue -= 1;
    btnId.textContent = counterValue;
});
btnIncrement.addEventListener(`click`, function () {
    counterValue += 1;
    btnId.textContent = counterValue;
});
const input = document.querySelector("input");
console.log(input)
const span = document.querySelector("span");
console.log(span)
span.style.fontSize = `${input.value}px`;


   const changeFontSize = event => {
       span.style.fontSize = `${event.currentTarget.value}px`
       
     };

     input.addEventListener("input", changeFontSize )

// function hendler(event) {
//     const fontSize = event.target.value + "px"
//     span.style.fontSize = fontSize
// }
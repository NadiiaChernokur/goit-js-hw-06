const textInput = document.querySelector("input");
console.log(textInput);


textInput.addEventListener("blur",  event => {
    const inputLength = textInput.value.trim().length;
    const imputData = textInput.dataset.length;
      if(inputLength === Number(imputData)){
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    
      } else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");

      }
    })

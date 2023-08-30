const registerForm = document.querySelector("form");
const email = registerForm.email;
const password = registerForm.password;

const formObjekt = {
  Email: `${email.value}`,
  Password: `${password.value}`
};
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (email.value === "" || password.value === ""){
    return alert("Всі поля повинні бути заповнені");
  }
  console.log(formObjekt)
  registerForm.reset()
  }
  
  


const form = document.querySelector('.registration-form');
const formInputs = form.querySelectorAll(".registration-form__input");
const submitBtn = form.querySelector(".submit-btn");
const alertContainer = form.querySelectorAll(".alert-container");
const email = form.querySelector("#email");
const emailRegex = /^\S+@\S+\.\S+$/;

submitBtn.addEventListener("click", () => {
    const emailValue = email.value.trim();
    let stopSubmit = false
    formInputs.forEach((input, index) => {
        if (input.value.trim() === "") {
            input.classList.add("red-outline")
            input.placeholder = "";
            alertContainer[index].classList.add("active")
            stopSubmit = true;
        }
    })
    if (!emailRegex.test(emailValue)) {
        email.classList.add("red-outline")
        email.nextElementSibling.classList.add("active")
    }
    email.placeholder = "email@example.com";
    if (stopSubmit) {
        form.addEventListener("submit", e => e.preventDefault()) 
    }
})

formInputs.forEach( (input, index) => {
    input.addEventListener("input", function() {
      input.classList.remove("red-outline");
      alertContainer[index].classList.remove("active");
    });
  });

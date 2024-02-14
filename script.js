const signUp = document.querySelector(".signup-button");
const leftFormDualRole = document.querySelector(".dual-role");
const rightForm = document.querySelector(".right-form");
const formTextLeft = document.querySelector(".main-texts");

console.log(formTextLeft);

signUp.addEventListener("click", function () {
  leftFormDualRole.classList.toggle("show-form");
  rightForm.classList.toggle("form-shrink");
  formTextLeft.classList.toggle("show-form-text");
});

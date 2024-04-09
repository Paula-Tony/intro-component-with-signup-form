document.forms[0].onsubmit = function (e) {
  let validInput = 0;
  this.querySelectorAll("input").forEach((input) => {
    if (input.value === "") {
      input.nextElementSibling.classList.add("active");
      input.parentElement.nextElementSibling.classList.add("active");
    } else {
      input.nextElementSibling.classList.remove("active");
      input.parentElement.nextElementSibling.classList.remove("active");
      validInput++;
    }
  });
  if (validInput !== 4) return false;
};

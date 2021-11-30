let inputElement = document.querySelector(".input-text");
let remainingChars = document.querySelector(".remaining-chars");

const updateChars = (e) => {
  let enteredText = e.target.value;
};

inputElement.addEventListener("input", updateChars);

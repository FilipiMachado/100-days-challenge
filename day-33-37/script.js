let inputElement = document.querySelector(".input-text");
let remainingCharsEl = document.querySelector(".remaining-chars");

// console.dir(inputElement);

let allowedChars = inputElement.maxLength;

const updateChars = (e) => {
  let enteredText = e.target.value;
  let enteredTextLength = enteredText.length;
  let remainingChars = allowedChars - enteredTextLength;
  console.log(remainingChars);
};

inputElement.addEventListener("input", updateChars);

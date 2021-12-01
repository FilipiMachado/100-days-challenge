/* let inputElement = document.querySelector(".input-text");
let remainingCharsEl = document.querySelector(".remaining-chars");

// console.dir(inputElement);

let allowedChars = inputElement.maxLength;

const updateChars = (e) => {
  let enteredText = e.target.value;
  let enteredTextLength = enteredText.length;
  let remainingChars = allowedChars - enteredTextLength;

  remainingCharsEl.textContent = remainingChars;
};

inputElement.addEventListener("input", updateChars);

if (remainingChars <= 10) {
  remainingCharsEl.classList.add("error");
} */

const loggedUser = {
  name: "Fil",
  age: 25,
  isAdmin: true,
};

for (const propertyName in loggedUser) {
  console.log(propertyName);
  console.log(loggedUser[propertyName]);
}



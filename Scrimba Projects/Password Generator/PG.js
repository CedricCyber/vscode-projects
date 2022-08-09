//password characters arrays
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const characters2 = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
//El-grabbers
const passwordEl1 = document.getElementById("password1");
const passwordEl2 = document.getElementById("password2");
const symbolsCheckboxEl = document.getElementById("symbols-checkbox");
const numbersCheckboxEl = document.getElementById("numbers-checkbox");
//Responsive Password Length function (for loop)
function x() {
  let passwordLengthEl = document.getElementById("length-select");
  return passwordLengthEl.value;
}

//Generate Password function
function generatePassword() {
  //variables to store generated password variables
  let password = "";
  let password2 = "";
  //if statement (all inclusive)
  if (numbersCheckboxEl.checked && symbolsCheckboxEl.checked) {
    // for loops (One for each password)
    for (let i = 0; i < x(); i++) {
      let generate = Math.floor(Math.random() * characters.length);
      password += characters[generate];
    }

    for (let i = 0; i < x(); i++) {
      generate = Math.floor(Math.random() * characters.length);
      password2 += characters[generate];
    }
  }
  // if statement (numbers/no symbols)
  else if (numbersCheckboxEl.checked) {
    for (let i = 0; i < x(); i++) {
      generate = Math.floor(Math.random() * 52 + 10);
      password += characters[generate];
    }
    for (let i = 0; i < x(); i++) {
      generate = Math.floor(Math.random() * 52 + 10);
      password2 += characters[generate];
    }
  }
  // if statement (numbers & symbols)
  else if (symbolsCheckboxEl.checked) {
    for (let i = 0; i < x(); i++) {
      generate = Math.floor(Math.random() * 52 + 28);
      password += characters2[generate];
    }
    for (let i = 0; i < x(); i++) {
      generate = Math.floor(Math.random() * 52 + 28);
      password2 += characters2[generate];
    }
  } else {
    for (let i = 0; i < x(); i++) {
      generate = Math.floor(Math.random() * 52 + 1);
      password += characters[generate];
    }
    for (let i = 0; i < x(); i++) {
      generate = Math.floor(Math.random() * 52 + 1);
      password2 += characters[generate];
    }
  }
  // Applies function to El
  passwordEl1.innerText = password;
  passwordEl2.innerText = password2;
}

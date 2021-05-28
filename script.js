// Password Values
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Function to generate password
function generatePassword() {

// User input
  enter = parseInt(prompt("How many characters would you like your password to be? You must choose between 8 and 128"));
  if (!enter) {
    alert("Please enter character value!");
  } else if (enter < 8 || enter > 128) {

// User rejected input
    enter = parseInt(prompt("You need to choose between 8 and 128 characters!"));

  } else {
// Continued user criteria input
    confirmUppercase = confirm("Will this contain uppercase letters?");
    confirmLowercase = confirm("Will this contain lowercase letters?");
    confirmNumber = confirm("Will this contain numbers?");
    confirmChar = confirm("Will this contain special characters?");
  };

// Rejected user criteria input
  if (!confirmUppercase && !confirmLowercase && !confirmNumber && !confirmChar)
    alert("You need to pick something!")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

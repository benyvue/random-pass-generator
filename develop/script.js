// Assignment code here

//Declared variables
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!#$%&()*+,-./:;<>=?@[]^_`|}{~";
var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Creating password
var generatePassword = function() {
  var lengthOfChar = window.prompt("Please choose a password length of 8-128 characters.");

  if (lengthOfChar >= 8 && lengthOfChar <= 128) {
    window.alert("Thank you, a password of " + lengthOfChar + " characters will be generated, please answer the following questions for your password.");
  } else {
    window.alert("Please try again.");
  generatePassword();
  }
  
  var upperCaseChoice = window.confirm("Would you like to add uppercase letters to your password?")

  if (upperCaseChoice) {
    window.alert("Thank you, you chose to add uppercase letters to your password.")
    password = upperCaseChoice += password;
  } else {
    window.alert("You chose not to add upper case letters.")
  }

  var lowerCaseChoice = window.confirm("Would you like to add lowercase letters to your password?")

  if (lowerCaseChoice) {
    window.alert("Thank you, you chose to add lowercase letters to your password.")
    password = lowerCaseChoice += password;
  } else {
    window.alert("You chose not to add lower case letters.")
  }

  var numChoice = window.confirm("Would you like to add numbers to your password?")

  if (numChoice) {
    window.alert("Thank you, you chose to add numbers to your password.")
    password = numChoice += password;
  } else {
    window.alert("You chose not to add numbers to your password.")
  }

  var specialCharChoice = window.prompt("What special characters would you like to add to your password?");

  if (specialCharChoice) {
    window.prompt("Thank you,you chose to add special characters to you password.")
    password = specialCharChoice += password;
  } else {
    window.alert("You chose not to add special characters.")
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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
  var lengthChar = window.prompt("Please choose a password length of 8-128 characters.");

  if (lengthChar >= 8 && lengthChar <= 128) {
    window.alert("Thank you, a password of " + lengthChar + " characters will be generated, please answer the following questions for your password.");
  } else {
    window.alert("Please try again.");
  generatePassword();
  }

  
  var specialChar = window.prompt("What special characters would you like to include in your password?");

  if (charType === ) {
    window.prompt("Please type in the special characters you would like to add.")
    if (charType = specialChar) {
      window.alert("Special characters " + specialChar + " will be added to your password.")
      
      } else {
        window.alert("Please try again.")
        
      }
  } else {
    window.alert("You chose not to add special characters.")
  }
  
  var upperCaseChoice = window.confirm("")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

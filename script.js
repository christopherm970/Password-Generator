// Assignment Code
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

//create arrays for variables
let specChar = '!#$%&()+-=./;@<>'.split("");
let numbers = '0123456789'.split("");
let lowcase = 'abcdefghijklmnopqrstuvwxyz'.split("");
let upcase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");

function promptUser() {
  // Prompt the user
  //create prompts for password criteria
  //prompt character length at least 8 characters and no more than 128 if not must enter value
  let passwordLength = prompt("How many characters for your password? Must be at least 8 and up to 128");

  // Depending on if length is valid we will
  if ((passwordLength < 8) || (passwordLength > 128)) {
    // Error
    alert("Enter a number at least 8 to 128.");
  } 
  else {
    // Password generation
    writePassword(passwordLength);
  }
}

// Write password to the #password input
function writePassword(passwordLength) {
  var password = generatePassword(passwordLength);

  passwordText.value = password;
}

function generatePassword(passwordLength) {
  // Get user password options
  let confirmLowcaseChar = confirm("Do you want lower case letters?");
  let confirmUpcaseChar = confirm("Do you want upper case letters?");
  let confirmNum = confirm('Do you want numbers?');
  let confirmSpecChar = confirm('Do you want special characters?');
  let newPass = ''

  // Something to keep track of ALL available options
  const availableOptions = [];

  //functions to confirm if they selected choices.
  if (confirmLowcaseChar === true){
    // Add all the lowercase options to availableOptions
    for(let i = 0; i < lowcase.length; i++){
      availableOptions.push(lowcase[i])
    }
    
  }
  
  if(confirmUpcaseChar === true) {
    for(let i = 0; i < upcase.length; i++){
      availableOptions.push(upcase[i])
    }
  }

  if(confirmNum === true) {
    for(let i = 0; i < numbers.length; i++){
      availableOptions.push(numbers[i])
    }
  }

  if(confirmSpecChar === true) {
    for(let i = 0; i < specChar.length; i++){
      availableOptions.push(specChar[i])
    }
  }
  // Check if availableOptions working
  // console.log(availableOptions)
  // Using all the availableOptions based on user input we want to 
  // grab x number of random elements

  // Generate random number using available options and length.
  for(let i = 0; i < passwordLength; i++ ){
    var ranNum = Math.floor(Math.random() *  (availableOptions.length - 1))
    newPass =  newPass + availableOptions[ranNum]
  }
  
  return newPass;
}


// Add event listener to generate button
generateBtn.addEventListener("click", promptUser);

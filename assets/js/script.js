// inputs variables
var enter;
var confirmA;
var confirmB;
var confirmC;
var confirmD;


// Special characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Uppercase conversion
space = [];

// selected outside the if statement and concatenated upon condition
var selected;

// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};

// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // Asking for user input
  enter = prompt("Enter your password length between 8 & 128 character");

  //condition statement for password length entry
  if(!enter) {
   alert("Please enter a value between 8 and 128.");
  } else if (enter < 8 || enter > 128) {
   enter = prompt("your password muss have at least 8 or maximum 128 characters");
  } else {
  // password criteria confirmation
    confirmA = confirm("Should the password have special character? click ok to confirm");
    confirmB = confirm("Should the password have numbers? click ok to confirm");
    confirmC = confirm("Should the password have uppercase letters? click ok to confirm");
    confirmD = confirm("Should the password have lowercase letters? click ok to confirm");
};
  // condition statement to confirm
  if(!confirmA && !confirmB && !confirmC && !confirmD) {
  alert("Please choose at least one character type");
  } else if (confirmA && confirmB) {
    selected = character.concat(number);
  } else if (confirmA && confirmC) {
    selected = character.concat(alpha2);
  } else if (confirmA && confirmD) {
    selected = character.concat(alpha);
  } else if (confirmB && confirmC) {
    selected = number.concat(alpha2);
  } else if (confirmB && confirmD) {
    selected = number.concat(alpha);
  } else if (confirmC & confirmD) {
    selected = alpha2.concat(alpha);
  } else if (confirmA && confirmB & confirmC) {
    selected = character.concat(number, alpha2);
  } else if (confirmA && confirmB && confirmD) {
    selected = character.concat(number, alpha);
  } else if (confirmA && confirmC && confirmD) {
    selected = character.concat(alpha2, alpha);
  } else if (confirmB && confirmC && confirmD) {
    selected = number.concat(alpha2, alpha);
  } else if (confirmA && confirmB && confirmC && confirmD){
    selected = character.concat(number, alpha2, alpha);
  } else if (confirmA){
    selected = character;
  } else if (confirmB) {
    selected = number;
  } else if (confirmD) {
    selected = alpha;
  } else if (confirmC) {
  // Created space variable to fill uppercase conversion
    selected = space.concat(alpha2);
  };

  // password variable is an array placeholder for user generated amount of length
  var password = [];

  // Random selection for all variables: 
  for (var i = 0; i < enter; i++) {
    var pickSelected = selected[Math.floor(Math.random() * selected.length)];
    password.push(pickSelected);
} 
//This joins the password array and converts it to a string
    var password = password.join("");
    UserInput(password);
    return password;

//Changed function input to use textcontent
    function UserInput(password) {
    document.getElementById("password").textContent = password;
  
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// call the function
writePassword();


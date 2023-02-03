
//lowercase letter options to use
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
//uppercase letter options to use
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//special character options to use 
var special = '$%&,)*+/-./:;<=>?@^`{ |}~!'.split(''); 
//number options to use
var numbers = '0123456789'.split('');

//1.Prompts for user data to generate password.
function generatePassword()  {
//ask user for choice of password length.
//parseInt (value, radix).
var userInput = [];
var potentialChars = [];
var passwordLength = parseInt 
    (prompt('Please enter a password length between 8 - 128.'), 10);
      
//isNaN method to determine if value selected is Not a number. can use Number.isNaN method.
  if (isNaN(passwordLength))  {
    alert('Password must of numeric value.');
  return;
}
//using the pipe double sign || OR to set the number range. 
  if ((passwordLength < 8) || (passwordLength >     128)) {
    alert('Password must be between 8 - 128 characters.');
  return;
}
  
//using confirm to confirm character types the user wants to include in the password. Using .push to push new characters into the end of a new array->(); Also using (...)spread. Can use concate.
var useLower = confirm('Would you like to use Lowercase Characters in your password. \n Click OK!');
  if (useLower) {
      potentialChars.push(...lowerCase);
}
var useUpper = confirm('Would you like to use Uppercase Characters in your password. \n Click OK!');
  if (useUpper)  {
      potentialChars.push(...upperCase);
}
var useSpecial = confirm('Would you like to use Special Characters in your password? \n Click OK!');
  if  (useSpecial)  {
      potentialChars.push(...special);
}
var useNumbers = confirm('Would you like to use Numbers in your password? \n Click OK!');
  if  (useNumbers)  {potentialChars.push(...        numbers);
}

//Using the !Not operator and the AND Logical Operator. Can use if statements with === (strict equality)
  if (!useLower && !useUpper && !useSpecial  &&
      !useNumbers) {
        alert('Selection of character type required to generate a password');  
  return;
}

//Loop 
for (var i = 0; i < passwordLength; i++) {

//Using Math.random()static method to get random number and Math.floor method to round number down to nearest the number.  
  var randomChars = potentialChars[Math.floor(Math.random()*potentialChars.length)];
  userInput.push(randomChars);
}
//Using the join() method  to create and return a new string by concatenating all of the elements in an array. Elements can be specified in how they are joined together using commas, no commas, etc.
let password = userInput.join('');
return  password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}  

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

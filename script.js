

//lowercase letter options to use
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
//uppercase letter options to use
var upperCase = ['A','B','C','D','E','F','G',
'H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
//special character options to use 
var special = ['$', '%', '&', ',', ')', '*','+', '/', '-', '.', '/', ':', ';',  '<', '=', '>', '?','@', '^', '`', '{', 
'|', '}', '~', '!',]; 
//number options to use
var numbers = ['0','1','2','3','4','5','6','7','8','9',];


//1.Prompts user for data to generate password.
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
  
//using confirm to confirm characters the user wants to include the password. Example: If the user wants to include a lowercase letter, the potential Character->(lowercase) will be pushed at the end into new array->(); Using (...) spread. can use concate.
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

for (var i = 0; i < passwordLength; i++) {

  var randomChars = potentialChars[Math.floor(Math.random()*potentialChars.length)];
  userInput.push(randomChars);
}
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

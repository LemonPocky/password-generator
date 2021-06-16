// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // If password is empty string, return without printing
  if (!password) {
    return;
  }
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Helper function to guide the user through a series of prompts to create a 
// new password.
function generatePassword() {  
  // Arrays representing all possible characters
  // Confusing characters such as l, o, I, O, 0, [space] have been removed
  const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm',
    'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
    'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const specials = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-',
    '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', '^', '_',
    '`', '{', '|', '}', '~'];

  let confirm = window.confirm('Create new password?');
  if (!confirm) {
    return '';
  }

  let passwordLength = 0;
  while (!passwordLength) {
    // Prompt user for password length
    passwordLength = window.prompt('Enter the desired length of the password (8-128). ' +
      'Press Cancel to quit.');

    // If prompt is canceled, passwordLength will be null
    if (passwordLength === null) {
      return '';
    }

    // isNaN() returns true if a string contains non-numerical characters
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      window.alert('Invalid input. Please enter a value between 8 and 128.');
      passwordLength = 0;
    }
  }
  
  let lowerConfirm = false;
  let upperConfirm = false;
  let numberConfirm = false;
  let specialConfirm = false;
  while (true) {
    // Confirm lowercase letters
    lowerConfirm = window.confirm('Include lowercase characters?\n\n' +
      'Press OK to include. Press Cancel to not include.');

    // Confirm uppercase letters
    upperConfirm = window.confirm('Include uppercase characters?\n\n' +
      'Press OK to include. Press Cancel to not include.');

    // Confirm numerical characters
    numberConfirm = window.confirm('Include numerical characters?\n\n' +
      'Press OK to include. Press Cancel to not include.');

    // Confirm special characters
    specialConfirm = window.confirm('Include special characters?\n\n' +
      'Press OK to include. Press Cancel to not include.');

    // If none were selected, redo
    if (!lowerConfirm && !upperConfirm && !numberConfirm && !specialConfirm) {
      let retry = window.confirm('You must select at least one character group!\n\n' +
        'Press OK to retry. Press Cancel to quit.');
      // If Cancel is pressed, quit.
      if (!retry) {
        return '';
      }
    } else {
      // At least one was selected, so we can continue
      break;
    }
  }

  // Now that we have all our parameters, generate the actual password
  let fullArray = [];
  if (lowerConfirm) {
    fullArray = fullArray.concat(lowerLetters);
  }
  if (upperConfirm) {
    fullArray = fullArray.concat(upperLetters);
  }
  if (numberConfirm) {
    fullArray = fullArray.concat(numbers);
  }
  if (specialConfirm) {
    fullArray = fullArray.concat(specials);
  }

  let toReturn = randomPassword(passwordLength, fullArray);
  alert('Press OK to generate your password.');
  return toReturn;  
}

// Helper function that generates a random string of length @length using
// a random selection of characters from @pool
function randomPassword(length, pool) {
  let password = '';
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * pool.length);
    password = password + pool[randomIndex];
  }
  return password;
}
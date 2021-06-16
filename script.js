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
  // Confusing characters such as i, l, o, I, L, O, 0, [space] have been removed
  const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm',
    'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'M',
    'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const specials = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-',
    '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', '^', '_',
    '`', '{', '|', '}', '~'];

  let confirm = window.confirm('Create new password?');
  if (!confirm) {
    return '';
  }

}
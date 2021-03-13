//DOM Elements
const btn = document.getElementById('btn');
const user = document.getElementById('user');
const password = document.getElementById('password');

//showError Function
showError = (input, msg) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('.small');
  small.innerText = msg;
};

//showSuccess
showSuccess = input => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

//checkRequired Function
const checkRequired = inputArr => {
  var count = 0;
  inputArr.forEach(input => {
    if (input === user) {
      if (input.value.trim() === '') {
        showError(
          input,
          'The username or password is invalid. Enter them again the way you chose them, in uppercase or lowercase, and press Login.'
        );
        count = count + 1;
      } else {
        showSuccess(input);
      }
    } else if (input === password) {
      if (input.value.trim() === '') {
        count = count + 1;
      } else {
        showSuccess(input);
      }
    }
  });
  console.log(count);
  if (count === 0) {
    return true;
  } else {
    return false;
  }
};

//Capital First Word
upFirstWord = inputId => {
  return inputId.charAt(0).toUpperCase() + inputId.slice(1);
};

//Event Handler
btn.addEventListener('click', e => {
  if (!checkRequired([user, password])) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
});

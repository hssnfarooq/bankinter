//DOM Elements
const btn2 = document.getElementById('btn');
const sms = document.getElementById('sms');

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
    if (input === sms) {
      if (input.value.trim() === '') {
        showError(
          input,
          'The Field is invalid. Enter them again the way you chose them, in uppercase or lowercase, and press Login.'
        );
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
btn2.addEventListener('click', e => {
  if (!checkRequired([sms])) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
});

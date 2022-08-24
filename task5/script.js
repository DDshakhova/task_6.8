const userTextField = document.querySelector('input');
const clearField = document.querySelector('button');
const fieldCopy = document.querySelector('#duplicateField');

userTextField.addEventListener('input', 
  function (event) {
    fieldCopy.textContent = event.target.value;
})

clearField.addEventListener('click', 
  function (event) {
    console.log (userTextField.value);
    fieldCopy.textContent = " ";
    userTextField.value = " ";
    event.preventDefault();
})

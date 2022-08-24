const userTextField = document.querySelector('a');


userTextField.addEventListener('click', 
  function (event) {
    let userText = prompt('Придумайте новое название ссылке');
    event.preventDefault();
    this.textContent = userText;

})

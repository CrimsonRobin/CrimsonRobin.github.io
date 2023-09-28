const button = document.getElementById("click_button");
const words = document.getElementById("click_word");

button.addEventListener('click', (e) => {words.innerHTML = "The button was clicked!";})
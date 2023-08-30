const userText = document.querySelector('a');
function text() {
    const textInfo = prompt("Введите текст");
    userText.textContent=textInfo;
}
userText.addEventListener('click', text);
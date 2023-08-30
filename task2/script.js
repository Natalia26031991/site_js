const consoleLog = document.querySelector("#consoleLog");

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const consoleLog2 = document.querySelector("#alert");

consoleLog2.addEventListener('click', () => {
  alert('alert() — простой способ вывести информацию. Показывает диалоговое окно с сообщением и кнопкой OK.');
})


const consoleLog3 = document.querySelector("#prompt");

consoleLog3.addEventListener('click', () => {
    alert('Prompt() — «собрат» функции alert(). Отображает диалоговое окно с запросом на ввод текста.');
})
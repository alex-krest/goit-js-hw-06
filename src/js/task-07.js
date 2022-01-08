// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const textEl = document.querySelector("#text");

const controlEl = document.querySelector("#font-size-control");

const changeControle = (ev) => {
  textEl.style.fontSize = ev.target.value + "px";
  console.log(ev.target.value);
};

addEventListener("input", changeControle);

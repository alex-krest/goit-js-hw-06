// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".
const inputEl = document.querySelector("#name-input");
console.log(inputEl);

const spanEl = document.querySelector("#name-output");
console.log(spanEl);

const changeText = (ev) => {
  if (ev.target.value === "") {
    spanEl.textContent = "Anonymous";
  }
  spanEl.textContent = ev.target.value;
};
addEventListener("input", changeText);

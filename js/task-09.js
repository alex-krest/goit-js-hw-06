// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  buttonEl: document.querySelector(".change-color"),
  spanEl: document.querySelector(".color"),
  bodyEl: document.querySelector("body"),
};

function changeColor(e) {
  const color = getRandomHexColor();
  refs.spanEl.textContent = color;
  refs.bodyEl.style.backgroundColor = color;
}

refs.buttonEl.addEventListener("click", changeColor);

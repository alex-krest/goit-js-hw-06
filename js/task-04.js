// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
{
  /* <div id="counter">
  <button type="button" data-action="decrement">
    -1
  </button>
  <span id="value">0</span>
  <button type="button" data-action="increment">
    +1
  </button>
</div>; */
}
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
const counterValue = document.querySelector("#value");
counterValue.textContent = 0;

const elButtonDecrement = document.querySelector(
  "button[data-action='decrement']"
);

const elButtonIncrement = document.querySelector(
  "button[data-action='increment']"
);

const counterOfButtonDecrement = (event) => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};
elButtonDecrement.addEventListener("click", counterOfButtonDecrement);

const counterOfButtonIncrement = (event) => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};
elButtonIncrement.addEventListener("click", counterOfButtonIncrement);

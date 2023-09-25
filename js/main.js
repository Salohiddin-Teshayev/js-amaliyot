let elFormCurrency = document.querySelector(".currency");
let elFormInput = document.querySelector(".currency__input");
let elFormSelect = document.querySelector(".currency__select");
let elFormBtn = document.querySelector(".currency__btn");
let elCurrencyResult = document.querySelector(".currency__result");

const USD = 12212;
const RUBL = 127;
const EURO = 12992;

elFormBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  let result = "";


  if (elFormInput.value !== "" && elFormSelect.value !== "Choose") {
    if (elFormSelect.value === "Usd") {
      result = USD * elFormInput.value;
    } else if (elFormSelect.value === "Rubl") {
      result = RUBL * elFormInput.value;
    } else if (elFormSelect.value === "Euro") {
      result = EURO * elFormInput.value;
    }
  }
  elCurrencyResult.innerHTML =
    "<div class='alert bg-primary text-center mb-0'>MoneyGramm: <b>" +
    result +
    "</b> so'm!</div>";
})
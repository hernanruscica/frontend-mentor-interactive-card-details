console.log("from scripts.js");

const $d = document;
const $cardholderNameInput = $d.getElementById('name');
const $cardholderNameLabel = $d.getElementById('nameLabel');

const $cardNumberInput = $d.getElementById("number");
const $cardNumberLabel = $d.getElementById("numberLabel");

const $cardDateMonthInput = $d.getElementById("exp-date-month-input");
const $cardDateMonthLabel = $d.getElementById("dateMonthLabel");

const $cardDateYearInput = $d.getElementById("exp-date-year-input");
const $cardDateYearLabel = $d.getElementById("dateYearLabel");

const $cardCvcInput = $d.getElementById("cvc-input");
const $cardCvcLabel = $d.getElementById("cvcLabel");

let cardholderNameValue, cardNumberValue, dateMonthValue, dateYearValue, cardCvcValue;


$d.addEventListener('keyup', (e) => {

    let id = e.target.id;
   
    if (id === "name") {
        cardholderNameValue = $cardholderNameInput.value
        $cardholderNameLabel.innerHTML = cardholderNameValue;
    }
    if (id === "number") {
        cardNumberValue = $cardNumberInput.value
        $cardNumberLabel.innerHTML = cardNumberValue;
    }
    if (id === "exp-date-month-input") {
        dateMonthValue = $cardDateMonthInput.value
        $cardDateMonthLabel.innerHTML = dateMonthValue;
    }
    if (id === "exp-date-year-input") {
        dateYearValue = $cardDateYearInput.value
        $cardDateYearLabel.innerHTML = dateYearValue;
    }
    if (id === "cvc-input") {
        cardCvcValue = $cardCvcInput.value
        $cardCvcLabel.innerHTML = cardCvcValue;
    }    
})

const validateNumber = (value) => {

    if (isNaN(value)){
        return false;
    }else{
        return true;
    }
}

console.log(validateNumber("1252"));
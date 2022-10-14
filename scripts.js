console.log("from scripts.js");

const $d = document;
const $cardholderNameInput = $d.getElementById('name');
const $cardholderNameLabel = $d.getElementById('nameLabel');
const $cardHolderNameError = $d.getElementById("name-error");

const $cardNumberInput = $d.getElementById("number");
const $cardNumberLabel = $d.getElementById("numberLabel");
const $cardNumberError = $d.getElementById("number-error")

const $cardDateMonthInput = $d.getElementById("exp-date-month-input");
const $cardDateMonthLabel = $d.getElementById("dateMonthLabel");
const $cardDateError = $d.getElementById("date-error")

const $cardDateYearInput = $d.getElementById("exp-date-year-input");
const $cardDateYearLabel = $d.getElementById("dateYearLabel");

const $cardCvcInput = $d.getElementById("cvc-input");
const $cardCvcLabel = $d.getElementById("cvcLabel");

const $btnConfirm = $d.getElementById("btn-confirm");

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


$btnConfirm.addEventListener('click', (e) => {
    e.preventDefault();

    cardName = $cardholderNameInput.value;
    cardNumber = $cardNumberInput.value;
    cardMonth = $cardDateMonthInput.value;
    cardYear = $cardDateYearInput.value;
    cardCVC = $cardCvcInput.value;

    /*Card Name validation and error messaging  */
    if (cardName == ""){
        $cardHolderNameError.classList.add("show");
    }else {
        $cardHolderNameError.classList.remove("show");
    }

    /*Card number validation and error messaging  */
    if (cardNumber == "" || !/^[0-9]{16}$/.test(cardNumber)){
        $cardNumberError.classList.add("show");
    }else {
        $cardNumberError.classList.remove("show");
    }
    
    /*Month and Year date validation and error messaging  */
    if (cardMonth == "" || cardYear == "" || !/^[0-9]{2}$/.test(cardMonth) ||  !/^[0-9]{2}$/.test(cardYear) ){
        $cardDateError.classList.add("show");
    }else{
        $cardDateError.classList.remove("show");
    }

    /*CVC validation and error messaging  */

} )

/*console.log(!/^[0-9]{0,16}$/.test("34"));*/
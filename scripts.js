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
const $cardCvcError = $d.getElementById("cvc-error");

const $btnConfirm = $d.getElementById("btn-confirm");
const $formCardData = $d.getElementById("card-data-form");

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

    let cardName = $cardholderNameInput.value,
    cardNumber = $cardNumberInput.value,
    cardMonth = $cardDateMonthInput.value,
    cardYear = $cardDateYearInput.value,
    cardCVC = $cardCvcInput.value;
    let validaciones = {"cardName" : false, "cardNumber" : false, "cardDate" : false, "cardCVC" : false}

    const successHTML = 
    `<div class = "form-success">
        <i class="form-success__circle-ok fa-solid fa-check"></i>  
        <h2 class=" form-success__title">THANK YOU!</h2>         
        <h3 class=" form-success__subtitle">We've added your card details</h3>     
        <button class="btn-confirn" id="btn-confirm">Continue</button>  
    </div>`; 
    

    /*Card Name validation and error messaging  */
    if (cardName == ""){
        $cardHolderNameError.classList.add("show");        
    }else {
        $cardHolderNameError.classList.remove("show");
        validaciones["cardName"] = true;
    }

    /*Card number validation and error messaging  */
    if (cardNumber == "" || !/^[0-9]{16}$/.test(cardNumber)){
        $cardNumberError.classList.add("show");        
    }else {
        $cardNumberError.classList.remove("show");
        validaciones["cardNumber"] = true;
    }
    
    /*Month and Year date validation and error messaging  */
    if (cardMonth == "" || cardYear == "" || !/^[0-9]{2}$/.test(cardMonth) ||  !/^[0-9]{2}$/.test(cardYear) ){
        $cardDateError.classList.add("show");        
    }else{
        $cardDateError.classList.remove("show");
        validaciones["cardDate"] = true;
    }

    /*CVC validation and error messaging  */
    if (cardCVC == "" ||  !/^[0-9]{3}$/.test(cardCVC)){
        $cardCvcError.classList.add("show");        
    }else{
        $cardCvcError.classList.remove("show");
        validaciones["cardCvc"] = true;
    }

    if (validaciones["cardName"] && validaciones["cardNumber"] && validaciones["cardDate"] && validaciones["cardCvc"] ){
        console.log("Everything is Ok !");
        $formCardData.innerHTML = "";
        $formCardData.innerHTML += successHTML; 
    }else{
        console.log("something is wrong...")
    }
    /*Faltaria hacer que cuando este todo bien, borre el innerhtml de $formCardData y que ponga el mensaje de exito  sf 4700l*/
} )


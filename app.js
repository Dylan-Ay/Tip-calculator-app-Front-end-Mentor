// Déclarations des variables globales
let billInput = document.getElementById('bill');
let fivePercent = document.getElementById('five-percent');
let tenPercent = document.getElementById('ten-percent')
let fifteenPercent = document.getElementById('fifteen-percent');
let twentyFivePercent = document.getElementById('twentyfive-percent');
let fiftyPercent = document.getElementById('fifty-percent');
let customPercent = document.getElementById('custom');
let outlineActive = document.querySelector('.outline-active');
let numberPeopleInput = document.getElementById('number-of-people');
let tipAmount = document.getElementById('tip-amount');
let totalResult = document.getElementById('total-result');
let resetButton = document.getElementById('reset-button');
let allPercentButton = document.querySelectorAll('.select-tip-button');
let cantBeZero = document.querySelector('.cantbezero');

// add class active when we click on a select tip button
function active(){
    allPercentButton.forEach(button => {
        button.addEventListener('click', function(){
            var current = document.getElementsByClassName("active");
            if (current.length > 0){
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    });
};

active();

// When we change the value of the "custom" input we add or remove according to the conditions
function onChangeCustomPercent(){
    if (customPercent.value >= 1 || customPercent.value.length >= 1){
        custom.classList.add('outline-active');
    }else if (customPercent.value.length < 1){
        custom.classList.remove('outline-active');
    }
};

// Apply restrictions in different case according to the Bill Input
function sanitizeInputBill(){
    if (numberPeopleInput.value <= 0 && billInput.value >= 1){
        numberPeopleInput.classList.add('outline-cantbezero');
        cantBeZero.classList.add('cantbezero-active');
        resetButton.classList.add('resetbutton-active');
    } else if(billInput.value >= 1 && numberPeopleInput.value >= 1){
        cantBeZero.classList.remove('cantbezero-active');
        numberPeopleInput.classList.remove('outline-cantbezero');
        resetButton.classList.add('resetbutton-active');
    }
    else if (billInput.value <= 0) {
        numberPeopleInput.classList.remove('outline-cantbezero');
        cantBeZero.classList.remove('cantbezero-active');
        resetButton.classList.remove('resetbutton-active');
    }
};

// Apply restrictions in different case according to the Number of People Input
function sanitizeInputPeople(){
    if (billInput.value <= 0 && numberPeopleInput.value > 0) {
        numberPeopleInput.classList.remove('outline-cantbezero');
        cantBeZero.classList.remove('cantbezero-active');
        resetButton.classList.remove('resetbutton-active');
    } else if (numberPeopleInput.value >= 1){
        numberPeopleInput.classList.remove('outline-cantbezero');
        cantBeZero.classList.remove('cantbezero-active');
    } else if (numberPeopleInput.value <= 0 && billInput.value >= 1){
        numberPeopleInput.classList.add('outline-cantbezero');
        cantBeZero.classList.add('cantbezero-active');
    }
}

// Reset the calculator fill when we click on "RESET"
function resetCalculator(){
    tipAmount.innerHTML = "$0.00";
    totalResult.innerHTML = "$0.00";
    customPercent.value = "";
    numberPeopleInput.value = "";
    billInput.value = "";
    allPercentButton.forEach(button => {
        button.classList.remove('active');
    });
    numberPeopleInput.classList.remove('outline-cantbezero');
    cantBeZero.classList.remove('cantbezero-active');
    custom.classList.remove('outline-active');
}

resetButton.addEventListener("click", resetCalculator);

// Function for the calculation ( calcul faux à revoir)

function calculation(){
    if (billInput.value > 0 && numberPeopleInput.value > 0) {
        if (fivePercent.classList.contains("active")){
            //let resultOfFive = (billInput.value * 1.05) * numberPeopleInput.value;
            tipAmount.innerHTML = `$${resultOfFive}`;
        }
    }
}

numberPeopleInput.addEventListener("change", calculation);

console.log(fivePercent.classList);
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
    } else if (customPercent.value.length < 1 && billInput.value <= 0 && numberPeopleInput.value <= 0){
        custom.classList.remove('outline-active');
        resetButton.classList.remove('resetbutton-active');
        numberPeopleInput.classList.remove('outline-cantbezero');
        cantBeZero.classList.remove('cantbezero-active');
        totalResult.innerHTML = "$0.00";
        tipAmount.innerHTML = "$0.00";
    }
};

// When we change the value of the "Bill" input we add or remove according to the conditions
function sanitizeInputBill(){
    if (numberPeopleInput.value <= 0 && billInput.value >= 1){
        numberPeopleInput.classList.add('outline-cantbezero');
        cantBeZero.classList.add('cantbezero-active');
        resetButton.classList.add('resetbutton-active');
    } else if (billInput.value >= 1 && numberPeopleInput.value >= 1){
        cantBeZero.classList.remove('cantbezero-active');
        numberPeopleInput.classList.remove('outline-cantbezero');
        resetButton.classList.add('resetbutton-active');
    } else if (billInput.value <= 0 && customPercent.value <= 0 && numberPeopleInput.value <= 0) {
        numberPeopleInput.classList.remove('outline-cantbezero');
        cantBeZero.classList.remove('cantbezero-active');
        resetButton.classList.remove('resetbutton-active');
        totalResult.innerHTML = "$0.00";
        tipAmount.innerHTML = "$0.00";
        allPercentButton.forEach(button => {
            button.classList.remove('active');
        });
    }
};

// When we change the value of the "Number of people" input we add or remove according to the conditions
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
        totalResult.innerHTML = "$0.00";
        tipAmount.innerHTML = "$0.00";
    } else if (billInput.value <= 0 && customPercent.value <= 0 && numberPeopleInput.value <= 0) {
        numberPeopleInput.classList.remove('outline-cantbezero');
        cantBeZero.classList.remove('cantbezero-active');
        resetButton.classList.remove('resetbutton-active');
        totalResult.innerHTML = "$0.00";
        tipAmount.innerHTML = "$0.00";
        allPercentButton.forEach(button => {
            button.classList.remove('active');
        });
    }
}

// Reset every settings of the calculator when we click on "RESET"
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
        resetButton.classList.remove('resetbutton-active');
}

resetButton.addEventListener("click", resetCalculator);

// Function for making the calculation according to which button.classList contains the "active" class
function calculation(){
    if (billInput.value > 0 && numberPeopleInput.value > 0) {
        let amountPerPerson = billInput.value / numberPeopleInput.value;
        if (fivePercent.classList.contains("active")){
            let totalPerPerson = (amountPerPerson * 1.05);
            let tipAmountResult = amountPerPerson - (amountPerPerson * 0.95);
            totalResult.innerHTML = `$${totalPerPerson.toFixed(2)}`;
            tipAmount.innerHTML = `$${tipAmountResult.toFixed(2)}`;
        } else if (tenPercent.classList.contains("active")){
            let totalPerPerson = (amountPerPerson * 1.10);
            let tipAmountResult = amountPerPerson - (amountPerPerson * 0.90);
            totalResult.innerHTML = `$${totalPerPerson.toFixed(2)}`;
            tipAmount.innerHTML = `$${tipAmountResult.toFixed(2)}`;
        } else if (fifteenPercent.classList.contains("active")){
            let totalPerPerson = (amountPerPerson * 1.15);
            let tipAmountResult = amountPerPerson - (amountPerPerson * 0.85);
            totalResult.innerHTML = `$${totalPerPerson.toFixed(2)}`;
            tipAmount.innerHTML = `$${tipAmountResult.toFixed(2)}`;
        } else if (twentyFivePercent.classList.contains("active")){
            let totalPerPerson = (amountPerPerson * 1.25);
            let tipAmountResult = amountPerPerson - (amountPerPerson * 0.75);
            totalResult.innerHTML = `$${totalPerPerson.toFixed(2)}`;
            tipAmount.innerHTML = `$${tipAmountResult.toFixed(2)}`;
        } else if (fiftyPercent.classList.contains("active")){
            let totalPerPerson = (amountPerPerson * 1.50);
            let tipAmountResult = amountPerPerson - (amountPerPerson * 0.50);
            totalResult.innerHTML = `$${totalPerPerson.toFixed(2)}`;
            tipAmount.innerHTML = `$${tipAmountResult.toFixed(2)}`;
        } else if (customPercent.classList.contains("active")){
            let totalPerPerson = (amountPerPerson * customPercent.value) / 100 + (amountPerPerson);
            let tipAmountResult = (amountPerPerson * customPercent.value) /100;
            totalResult.innerHTML = `$${totalPerPerson.toFixed(2)}`;
            tipAmount.innerHTML = `$${tipAmountResult.toFixed(2)}`;
        }
    }
}

// Events listener for the calculation function change and click
numberPeopleInput.addEventListener("input", calculation);
billInput.addEventListener("input", calculation);
allPercentButton.forEach(button => {
    button.addEventListener('click', calculation);
});
allPercentButton.forEach(button => {
    button.addEventListener('input', calculation);
});
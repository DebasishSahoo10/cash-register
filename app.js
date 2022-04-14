var input = document.querySelector('#bill-amount')
var next = document.querySelector('#next-button')
var cashInput = document.querySelector('#cash-amount')
var submit = document.querySelector('#submit-button')
var table = document.querySelector('#change-table')
var cashContainer = document.querySelector('.container-three')
var changeContainer = document.querySelector('.container-four')
var errorMessage = document.querySelector('#error')
var changeNumbers = document.querySelectorAll('.changeNotes')

function checkInput () {
    if (input.value > 0) {
        cashContainer.style.display='block';
        changeContainer.style.display='block';
        errorMessage.style.display='none';
    } else {
        error("Please input a valid Bill Amount");
    } 
};

function calculate () {
    var amountToBeReturned = cashInput.value - input.value;
    if (cashInput.value >= input.value) {
        errorMessage.style.display='none';
        console.log(amountToBeReturned);
    } else {
        errorMessage.style.display='block';
        error("Please input valid Cash Amount");
    }
};



function error(message) {
    errorMessage.innerText = message;
};


next.addEventListener("click", checkInput);
submit.addEventListener("click", calculate);
var billInput = document.querySelector('#bill-amount')
var next = document.querySelector('#next-button')
var cashInput = document.querySelector('#cash-amount')
var submit = document.querySelector('#submit-button')
var cashContainer = document.querySelector('.container-three')
var tableContainer = document.querySelector('.container-four')
var errorMessage = document.querySelector('#error')
var noteNumbers = document.querySelectorAll('.changeNotes')
var notesAvailable = [2000,500,100,20,10,5,1]


function checkBillInput () {
    if (billInput.value > 0) {
        cashContainer.style.display='block';
        tableContainer.style.display='block';
        errorMessage.style.display='none';
    } else {
        errorMessage.style.display='block';
        error("Please input a valid Bill Amount");
        cashContainer.style.display='none';
        tableContainer.style.display='none';
    } 
};

function checkCashAmount () {
    if (Number(cashInput.value) >= Number(billInput.value)) {
        errorMessage.style.display='none';
    } else {
        errorMessage.style.display='block';
        error("Please input valid Cash Amount");
    }
}

function calculateNotes () {
    var amountToBeReturned = cashInput.value - billInput.value;
    for (let i = 0; i < notesAvailable.length; i++) {
        var noOfNotes = Math.trunc(amountToBeReturned/notesAvailable[i]);
        amountToBeReturned = amountToBeReturned % notesAvailable[i];
        noteNumbers[i].innerText = noOfNotes;
    };
    
};



function error(message) {
    errorMessage.innerText = message;
};


next.addEventListener("click", checkBillInput);
submit.addEventListener("click", checkCashAmount);
submit.addEventListener("click", calculateNotes);
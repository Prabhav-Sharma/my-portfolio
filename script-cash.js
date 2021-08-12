var calculateButton = document.querySelector("#button-calculate");
var billInput = document.querySelector("#input-bill");
var cashInput = document.querySelector("#input-cash");
var output2000 = document.querySelector("#output-2000");
var output500 = document.querySelector("#output-500");
var output100 = document.querySelector("#output-100");
var output50 = document.querySelector("#output-50");
var output10 = document.querySelector("#output-10");
var output5 = document.querySelector("#output-5");
var output1 = document.querySelector("#output-1");
var returnStat = document.querySelector("#return-stat")


function notes(output, amount, currency) {
    var currentNotes = Math.floor(amount / currency);
    output.innerText = currentNotes;
    return amount - (currentNotes * currency);
}





function divideAmount() {
    var billAmount = billInput.value;
    var cashAmount = cashInput.value;
    var returnAmount = cashAmount - billAmount;
    returnStat.innerText = "Amount to be returned: ₹" + returnAmount;
    //First Attempt This works efficiently but looks too messy, finding a better way
    notes(output1, notes(output5, notes(output10, notes(output50, notes(output100, notes(output500, notes(output2000, returnAmount, 2000), 500), 100), 50), 10), 5), 1);


    //Second attempt, not worth the trouble to make it less messy
    // var notes2000 = Math.floor(returnAmount / 2000);
    // var amountLeft = returnAmount - notes2000 * 2000;
    // output2000.innerText = notes2000;
    // console.log(amountLeft);


    // var notes500 = Math.floor((amountLeft) / 500);
    // amountLeft = amountLeft - notes500 * 500;
    // output500.innerText = notes500;

    // var notes100 = Math.floor(amountLeft / 100);
    // amountLeft = amountLeft - notes100 * 100;
    // output100.innerText = notes100;

    // var notes50 = Math.floor(amountLeft / 50);
    // amountLeft = amountLeft - notes50 * 50;
    // output50.innerText = notes50;

    // var notes10 = Math.floor(amountLeft / 10);
    // amountLeft = amountLeft - notes10 * 10;
    // output10.innerText = notes10;

    // var notes5 = Math.floor(amountLeft / 5);
    // amountLeft = amountLeft - notes5 * 5;
    // output5.innerText = notes5;

    // var notes1 = Math.floor(amountLeft / 1);
    // output1.innerText = notes1;
}
calculateButton.addEventListener("click", divideAmount);
var billInput = document.getElementById("billInput");
var peopleInput = document.getElementById("peopleInput");
var tipPrice = document.getElementById("tipPrice");
var totalPrice = document.getElementById("totalPrice");

var updateTipAmount = () =>{
    console.log(billInput.value)
    if(billInput.value === "")
        tipPrice.innerHTML = "$0.00"; 
    else
        tipPrice.innerHTML = billInput.value; 
}
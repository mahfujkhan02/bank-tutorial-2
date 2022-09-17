//console.log('Deposit available')

// step -1: add evnet listenr to the deposit button
// step -2: get deposit ammonut to the input field
// step -3: convert string deposit ammonut to a number type

document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log("deposit button added")

    // step:2

    const depostiField = document.getElementById('deposit-field');
    const newdepositAmmountString = depostiField.value;
    const newdepositAmmonut = parseFloat(newdepositAmmountString);
    // console.log(newdepositAmmonut);

    // step 3: 3deposit-field
    depostiField.value = '';

    // step:4 : get the previous total

    const depositTotalElement = document.getElementById('deposit-total');
    const previousdepositTotalString = depositTotalElement.innerText; 
    const previousdepositTotal = parseFloat(previousdepositTotalString);


    // step - 5: Calculate new deposit total and set the value to the deposit total

    const newDepostTotal = previousdepositTotal +  newdepositAmmonut;

    depositTotalElement.innerText = newDepostTotal;

    // step : 6: Get current balance

    const balanceTotalElement = document.getElementById('Balance-total');
    const previousbalancecTotalString = balanceTotalElement.innerText;
    const previousbalancecTotal = parseFloat(previousbalancecTotalString);

    // step : 7: Calculate the new balance and set it to the balance total

    const newBalanceTotal = previousbalancecTotal + newDepostTotal;

    balanceTotalElement.innerText = newBalanceTotal;






})
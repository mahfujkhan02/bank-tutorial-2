// step -1: add evnet listenr to the withdraw button
// step -2: get withdraw ammonut to the input field
// step -3: convert string withdraw ammonut to a number type


document.getElementById('btn-withdraw').addEventListener('click',function(){
    // console.log('click it')
    const withdrawField = document.getElementById('withdraw-field');
    const newwithdrawAmmountString = withdrawField.value;
    const newWithdrawAmmonut = parseFloat(newwithdrawAmmountString);
    // console.log(newWithdrawAmmonut);

    // step 3: withdraw-field

    withdrawField.value = '';


     // step:4 : get the previous total

     const withdrawTotalElement = document.getElementById('withdraw-total');
     const previouswithdrawTotalString = withdrawTotalElement.innerText; 
     const previouswithdrawTotal = parseFloat(previouswithdrawTotalString);

        // step - 5: Calculate new deposit total and set the value to the deposit total

     const newWithdrawTotal =  previouswithdrawTotal + newWithdrawAmmonut ; 
     withdrawTotalElement.innerText = newWithdrawTotal;


     // step -6 : 


     const balanceTotalElement = document.getElementById('Balance-total');
     const previousbalancecTotalString = balanceTotalElement.innerText;
     const previousbalancecTotal = parseFloat(previousbalancecTotalString);
 
     // step : 7: Calculate the new balance and set it to the balance total
 
     const newBalanceTotal = previousbalancecTotal - newWithdrawTotal;
 
     balanceTotalElement.innerText = newBalanceTotal;


    
})
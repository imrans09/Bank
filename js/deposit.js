/**
 * 1. add event listener to the deposit button
 * 2. get deposit ammount from the deposit input field
 * 2-5. convert string deposit ammount to a number type
 * 3. clear the deposit input field after getting the value
 * 4. get the previous deposit total
 * 5. calculate new deposit total and set the value to the deopsit total
 * 6. get current balance total
 * 7. calculate the new balance total and set it to the balance total element
 */
// step-1 :
document.getElementById('button-deposit').addEventListener('click', function(){
    // step-2 :
    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);
    // step-3 :
    depositField.value = '';
    // step-4 :
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step-5 :
    const newDepositTotal = newDepositAmmount + previousDepositTotal;
    depositTotalElement.innerText = newDepositTotal;
    // step-6 :
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmmount = parseFloat(previousBalanceTotalString);
    // step-7 :
    const newBalanceTotal = previousBalanceTotalAmmount + newDepositAmmount;
    balanceTotalElement.innerText = newBalanceTotal;
});
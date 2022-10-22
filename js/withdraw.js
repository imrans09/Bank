document.getElementById('button-withdraw').addEventListener('click', function(){

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmmountString = withdrawField.value ;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);

    withdrawField.value = '';

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const newWithdrawTotal = newWithdrawAmmount + previousWithdrawTotal;
    withdrawTotalElement.innerText = newWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmmount = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotalAmmount - newWithdrawAmmount;
    balanceTotalElement.innerText = newBalanceTotal;
});
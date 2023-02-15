document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount =parseFloat(depositField.value) ; 
    

    //  get the current deposit total:
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);
    const currentDepositTotal = newDepositAmount + previousDepositTotal;
    depositTotalElement.innerText = currentDepositTotal ;

    // clear the deposit field
    depositField.value= '';

    // add the deposit value to the balance
    const balanceID =  document.getElementById('balance');
    const prevBalance = parseFloat(balanceID.innerText);

    const currentBalance = prevBalance +  newDepositAmount;

    balanceID.innerText= currentBalance;


})

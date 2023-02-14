document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    let newDepositAmount =parseInt(depositField.value) ; 
    

    // step 3: get the current deposit total:
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseInt(depositTotalElement.innerText);
    const currentDepositTotal = newDepositAmount + previousDepositTotal;
    depositTotalElement.innerText = currentDepositTotal ;

    // step 4: clear the deposit field
    depositField.value= '';


})

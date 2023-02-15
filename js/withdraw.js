document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    
    const withdrawElement = document.getElementById('withdraw-total');
    const prevWithdrawAmount = parseFloat(withdrawElement.innerText);
    const totalWithdrawAmount = prevWithdrawAmount + newWithdrawAmount;
    withdrawElement.innerText = totalWithdrawAmount;


     // merge the withdraw value to the balance
     const balanceID =  document.getElementById('balance');
     const prevBalance = parseFloat(balanceID.innerText);
 
     const currentBalance = prevBalance -  newWithdrawAmount;
 
     balanceID.innerText= currentBalance;
    //  clear withdraw field
    withdrawField.value='';
})
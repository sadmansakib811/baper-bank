//step-1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    const getpass = document.getElementById('password');
    const userPass = getpass.value;
// step-4: authintication
// Danger: do not verify email password on the client side like this. I'm just doing this to practice DOM
    if (email === 'sadman@gmail.com' && userPass === '1234'){
        window.location.href = 'http://127.0.0.1:5500/bank.html';

    }

    else{
        alert('invalid-user! try again');
    }


})


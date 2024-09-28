document.getElementById('btn-add-money').addEventListener('click',function (event) {
    event.preventDefault();

    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    const pinNumbetInput = document.getElementById('input-pin-number').value;
    console.log(pinNumbetInput);
    
    
    if (pinNumbetInput === '1234') {
        console.log('adding money to your account');
        

        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        console.log(addMoneyNumber, balanceNumber);

        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);
        
        document.getElementById('account-balance').innerText = newBalance;
        getInputFIeldById();
        
    }
    else{
        alert('Falide to add money! Please try later');
    }
})

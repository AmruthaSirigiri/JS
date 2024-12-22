function bankApplication() {
    alert("--- Bank Account Menu --- \n  1. Create Account \n 2. Deposit Money \n 3. Withdraw Money \n 4. Check Balance \n 5. Exit");
    var c=+prompt("Enter your choice: ");
    switch(c){
        case 1:
            createAccount();
            break;
        case 2:
            depositeMoney();
            break;
        case 3:
            withdraw();
            break;
        case 4:
            checkBalance();
            break;
        case 5:
            exit();
            break;
        default:
            alert("Invalid option");
            bankApplication();        
    }
}
function createAccount() {
    var i_a=+prompt("Enter the initial amount: ");
    if(i_a<=0) {alert("enter valid amount"); createAccount();}
    if(i_a<=2000){
        alert("the initial amount is minimum 2000"); 
        createAccount(); 
    }
    else{
        alert("your account is created successfully, your account number is ${accountNumber} "); 
        bankApplication();  
    }
}

function depositeMoney() {
    // var an = 0; 
    var cb = 0;
    // if (an === 0) {
    //     alert("Please create account first");
    //     bankApplication();
    //     return;
    // }

    var amount = +prompt("Enter amount to deposit:");

    if (amount <= 0) {
        alert("Invalid amount to deposit");
        depositeMoney();
        return;
    }
    cb += amount;
    alert(`Rs. ${amount} deposited successfully. Your current balance is: Rs. ${cb}`);
    bankApplication();
}



bankApplication()
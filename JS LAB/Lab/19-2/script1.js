// Bank Account System Variables
var accountNumber = 0;
var currentBalance = 0;

// Main Bank Application Function
function bankApplication() {
    alert("--- Bank Account Menu ---\n1. Create Account\n2. Deposit Money\n3. Withdraw Money\n4. Check Balance\n5. Exit");
    var choice = +prompt("Enter your choice:");

    if (isNaN(choice) || choice < 1 || choice > 5) {
        alert("Invalid option");
        bankApplication();
        return;
    }

    switch (choice) {
        case 1:
            accountNumber = +prompt("Enter your account number (numeric value only):");
            if (isNaN(accountNumber) || accountNumber <= 0) {
                alert("Invalid account number. Please enter a numeric value.");
                bankApplication();
            } else {
                createAccount();
            }
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
            alert("Thank you for banking with us");
            break;
    }
}

// Create Account Function
function createAccount() {
    var initialAmount = +prompt("Enter the initial amount to open the account:");

    if (initialAmount <= 0) {
        alert("Enter valid amount");
        createAccount();
        return;
    }

    if (initialAmount <= 2000) {
        alert("The initial amount is minimum 2000");
        createAccount();
        return;
    }

    currentBalance = initialAmount;
    alert(`Your account is created successfully, your account number is ${accountNumber}`);
    bankApplication();
}

// Deposit Money Function
function depositeMoney() {
    if (accountNumber === 0) {
        alert("Please create account first");
        bankApplication();
        return;
    }

    var amount = +prompt("Enter amount to deposit:");

    if (amount <= 0) {
        alert("Invalid amount to deposit");
        depositeMoney();
        return;
    }

    currentBalance += amount;
    alert(`Rs. ${amount} deposited successfully. Your current balance is: Rs. ${currentBalance}`);
    bankApplication();
}

// Withdraw Money Function
function withdraw() {
    if (accountNumber === 0) {
        alert("Please create account first");
        bankApplication();
        return;
    }

    var amount = +prompt("Enter amount to withdraw:");

    if (amount <= 0) {
        alert("Invalid amount to withdraw");
        withdraw();
        return;
    }

    if (currentBalance - amount <= 2000) {
        alert("Insufficient Funds");
        bankApplication();
        return;
    }

    currentBalance -= amount;
    alert(`Rs. ${amount} withdrawn successfully. Your current balance is: Rs. ${currentBalance}`);
    bankApplication();
}

// Check Balance Function
function checkBalance() {
    if (accountNumber === 0) {
        alert("Please create account first");
        bankApplication();
        return;
    }

    alert(`Account number ${accountNumber} total balance: Rs. ${currentBalance}`);
    bankApplication();
}

// Start the Bank Application
bankApplication();
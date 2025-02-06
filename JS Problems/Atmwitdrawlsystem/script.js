let balance = 1000;
let pin = 1234;
let enteredPin = 1234;
let amount = 500;

let result = atmWithdrawal(balance, amount, pin, enteredPin);
console.log(result); 

function atmWithdrawal(balance, amount, pin, enteredPin) {
  // Check if the entered PIN matches the actual PIN
  if (enteredPin !== pin) {
    return "Incorrect PIN";
  }
  
  // Check if the withdrawal amount is greater than the balance
  if (amount > balance) {
    return "Insufficient Funds";
  }

  // Check if the amount is a multiple of 100
  if (amount % 100 !== 0) {
    return "Enter amount in multiples of 100";
  }

  // If all conditions are met, proceed with the withdrawal
  balance -= amount;
  return `Withdrawal successful! New balance: $${balance}`;
}


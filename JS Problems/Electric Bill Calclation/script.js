function calculateElectricityBill(units, timeOfDay) {
    let rate;
  
    // Determine the rate based on unit consumption
    if (units <= 100) {
      rate = 5;
    } else if (units <= 300) {
      rate = 4;
    } else {
      rate = 3;
    }
  
    // Check if it's peak hours (8 PM - 8 AM) and apply a 10% extra charge
    if (timeOfDay >= 20 || timeOfDay < 8) {
      rate *= 1.10; // Increase rate by 10%
    }
  
    // Calculate total bill
    let totalBill = units * rate;
  
    return `Total Electricity Bill: $${totalBill.toFixed(2)}`;
  }
  
  // Example usage:
  console.log(calculateElectricityBill(50, 10)); // Normal hours: $250.00
  console.log(calculateElectricityBill(150, 21)); // Peak hours: $660.00
  console.log(calculateElectricityBill(400, 7)); // Peak hours: $1320.00
  console.log(calculateElectricityBill(250, 15)); // Normal hours: $1000.00
  
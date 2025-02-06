function calculateTicketPrice(age, showTime) {
    let standardPrice = 12;
    let discount = 0;
  
    // Apply discounts based on age
    if (age > 60) {
      discount = 0.30; // 30% discount for seniors
    } else if (age < 12) {
      discount = 0.40; // 40% discount for children
    }
  
    // Apply matinee discount if the show is before 5 PM
    if (showTime < 17) {
      discount = Math.max(discount, 0.20); // Ensure the highest applicable discount is used
    }
  
    // Calculate final price after discount
    let finalPrice = standardPrice * (1 - discount);
  
    return `Final Ticket Price: $${finalPrice.toFixed(2)}`;
  }
  
  // Example usage:
  console.log(calculateTicketPrice(65, 14)); // Senior + Matinee: $8.40
  console.log(calculateTicketPrice(10, 16)); // Child + Matinee: $7.20
  console.log(calculateTicketPrice(30, 19)); // Standard: $12.00
  console.log(calculateTicketPrice(45, 14)); // Matinee: $9.60
  
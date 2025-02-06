function calculateFinalAmount(orderAmount) {
    let discount = 0;
    let shipping = 0;
  
    // Apply discount based on order amount
    if (orderAmount > 1000) {
      discount = 0.20 * orderAmount;  // 20% discount
    } else if (orderAmount >= 500) {
      discount = 0.10 * orderAmount;  // 10% discount
    }
  
    // Calculate discounted amount
    let discountedAmount = orderAmount - discount;
  
    // Apply shipping charges
    if (discountedAmount < 50) {
      shipping = 10; // Express shipping for orders below $50
    }
  
    // Final payable amount
    let finalAmount = discountedAmount + shipping;
  
    return `Final Payable Amount: $${finalAmount.toFixed(2)}`;
  }
  
  // Example usage:
  console.log(calculateFinalAmount(1200));  
  console.log(calculateFinalAmount(700));   
  console.log(calculateFinalAmount(40));   
  
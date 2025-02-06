function applyCoupon(orderAmount, couponCode) {
    let discount = 0;
    let shipping = 20; // Assume standard shipping is $20
  
    // Apply discount based on the coupon code
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
      discount = 0.10 * orderAmount; // 10% discount
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
      shipping = 0; // Free shipping
    }
  
    // Ensure both coupons cannot be used together
    if (couponCode === "DISCOUNT10" && couponCode === "FREESHIP") {
      return "Only one coupon can be applied.";
    }
  
    // Calculate final payable amount
    let finalAmount = orderAmount - discount + shipping;
  
    return `Final Price: $${finalAmount.toFixed(2)}`;
  }
  
  // Example usage:
  console.log(applyCoupon(600, "DISCOUNT10")); // Output: "Final Price: $560.00"
  console.log(applyCoupon(250, "FREESHIP")); // Output: "Final Price: $250.00"
  console.log(applyCoupon(150, "FREESHIP")); // Output: "Final Price: $170.00" (shipping not waived)
  console.log(applyCoupon(400, "DISCOUNT10")); // Output: "Final Price: $420.00" (discount not applied)
  
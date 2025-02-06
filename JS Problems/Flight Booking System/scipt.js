function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    let extraCharge = 0;
    let discount = 0;
  
    // Apply class-based charges
    if (classType === "Business") {
      extraCharge += 200;
    } else if (classType === "First") {
      extraCharge += 500;
    }
  
    // Calculate extra luggage charge
    if (luggageWeight > 20) {
      extraCharge += Math.ceil((luggageWeight - 20) / 10) * 50;
    }
  
    // Calculate total fare before discounts
    let totalFare = baseFare + extraCharge;
  
    // Apply discounts
    if (isStudent) {
      discount = 0.15 * totalFare; // 15% discount for students
    } else if (isSenior) {
      discount = 0.10 * totalFare; // 10% discount for seniors
    }
  
    totalFare -= discount;
  
    return `Final Ticket Price: $${totalFare.toFixed(2)}`;
  }
  
  // Example usage:
  console.log(calculateFlightFare("Economy", 25, false, false)); // $350.00 (Extra luggage charge)
  console.log(calculateFlightFare("Business", 30, true, false)); // $467.50 (Business class + luggage + student discount)
  console.log(calculateFlightFare("First", 20, false, true)); // $720.00 (First class + senior discount)
  console.log(calculateFlightFare("Economy", 15, true, false)); // $255.00 (Economy + student discount)
  
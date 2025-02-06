function trafficLightControl(density) {
    let greenTime;
  
    // Determine green signal duration based on traffic density
    if (density === "Heavy Traffic") {
      greenTime = 60;
    } else if (density === "Moderate Traffic") {
      greenTime = 40;
    } else if (density === "Light Traffic") {
      greenTime = 20;
    } else {
      return "Invalid traffic density"; // Handle unexpected input
    }
  
    return `Green light duration: ${greenTime} seconds`;
  }
  
  // Example usage:
  console.log(trafficLightControl("Heavy Traffic"));  
  console.log(trafficLightControl("Moderate Traffic")); 
  console.log(trafficLightControl("Light Traffic"));    
  console.log(trafficLightControl("No Traffic"));       
  
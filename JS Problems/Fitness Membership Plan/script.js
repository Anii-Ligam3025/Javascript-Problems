function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    let plan;
  
    // Determine the best membership plan based on user preferences
    if (wantsTrainer && wantsDietPlan) {
      plan = "VIP ($80/month) - Gym + Personal Trainer + Diet Plan";
    } else if (wantsTrainer) {
      plan = "Premium ($50/month) - Gym + Personal Trainer";
    } else {
      plan = "Basic ($20/month) - Gym Access Only";
    }
  
    return `Recommended Plan: ${plan}`;
  }
  
  // Example usage:
  console.log(choosePlan("Basic", false, false)); // Output: "Recommended Plan: Basic ($20/month) - Gym Access Only"
  console.log(choosePlan("Premium", true, false)); // Output: "Recommended Plan: Premium ($50/month) - Gym + Personal Trainer"
  console.log(choosePlan("VIP", true, true)); // Output: "Recommended Plan: VIP ($80/month) - Gym + Personal Trainer + Diet Plan"
  
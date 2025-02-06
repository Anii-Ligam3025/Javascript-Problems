function isEligibleForJob(age, experience, qualification) {
    // Check age requirement
    if (age < 21 || age > 55) {
      return "Not Eligible: Age must be between 21 and 55";
    }
  
    // Check experience requirement
    if (experience < 2) {
      return "Not Eligible: Must have at least 2 years of experience";
    }
  
    // Check qualification requirement
    if (qualification !== "Bachelor's Degree") {
      return "Not Eligible: Minimum qualification required is a Bachelor's Degree";
    }
  
    return "Eligible for the job";
  }
  
  // Example usage:
  console.log(isEligibleForJob(25, 3, "Bachelor's Degree")); // Output: "Eligible for the job"
  console.log(isEligibleForJob(20, 5, "Bachelor's Degree")); // Output: "Not Eligible: Age must be between 21 and 55"
  console.log(isEligibleForJob(30, 1, "Bachelor's Degree")); // Output: "Not Eligible: Must have at least 2 years of experience"
  console.log(isEligibleForJob(35, 4, "High School Diploma")); // Output: "Not Eligible: Minimum qualification required is a Bachelor's Degree"
  
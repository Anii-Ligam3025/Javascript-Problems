function calculateGrade(marks, attendance) {
    // Add 5 extra marks if attendance is above 90%
    if (attendance > 90) {
      marks += 5;
    }
  
    // Determine the grade based on marks
    let grade;
    if (marks >= 90) {
      grade = "A";
    } else if (marks >= 80) {
      grade = "B";
    } else if (marks >= 70) {
      grade = "C";
    } else if (marks >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }
  
    return `Final Grade: ${grade}`;
  }
  
  // Example usage:
  console.log(calculateGrade(88, 92)); 
  console.log(calculateGrade(75, 85)); 
  console.log(calculateGrade(58, 95)); 
// Function to simulate a trip among friends and calculate the exact amount of debt for each person, given the amount they already paid
const splitTheBill = (group) => {
  // Check if there is an object to calculate
  if (Object.keys(group).length > 0) {
    let totalSpent = 0;
    // First we sum what everyone has paid
    Object.keys(group).forEach((key) => {
      const value = group[key];
      totalSpent += value;
    });
    const amountForEach = totalSpent / Object.keys(group).length;
    const valuesArray = [];
    Object.values(group).forEach((value) => {
      valuesArray.push(value - amountForEach);
    });
    let counter = 0;
    Object.keys(group).forEach((key) => {
      group[key] = valuesArray[counter];
      counter += 1;
    });
  }
  return group;
};

module.exports = splitTheBill; // To export

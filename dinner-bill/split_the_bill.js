const splitTheBill = (group) => {
  // TODO: implement the function and return an Object
  if (Object.keys(group).length > 0) {
    let totalSpent = 0;
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

module.exports = splitTheBill; // Do not remove this line.

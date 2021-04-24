// Simulate a battle between Hobbits, Elves, Dwarves and Eagles

// This function checks if the soldier is good or evil
const isGood = (soldierType) => {
  // TODO: return `true` if the soldierType is Good.
  // Hint: Hobbits, Elves, Dwarves and Eagles are Good
  const goodSoldiers = ['Hobbits', 'Elves', 'Dwarves', 'Eagles'];
  return goodSoldiers.includes(soldierType);
};

// This function return an object of forces given a battlefield (String)
// The keys should be the soldier type and the value the number of soldiers of this type
const buildSoldierObject = (battlefield) => {
  const soldiers = {};
  const separatedElements = battlefield.split(',');
  separatedElements.forEach((pair) => {
    const eachPair = pair.split(':');
    soldiers[eachPair[0]] = Number.parseInt(eachPair[1], 10);
  });
  return soldiers;
};
  // This function returns "Good", "Evil" or "Tie" with the outcome of the battle, based on the battlefield's description (it's a String),
const whoWinsTheWar = (battlefield) => {
  const outcome = buildSoldierObject(battlefield);
  const typeOfSolfiers = Object.keys(outcome);
  let sumGoodForces = 0;
  let sumEvilForces = 0;
  typeOfSolfiers.forEach((soldier) => {
    if (isGood(soldier)) {
      sumGoodForces += outcome[soldier];
    } else {
      sumEvilForces += outcome[soldier];
    }
  });
  let result = '';
  if ((battlefield === '') || (sumEvilForces === sumGoodForces)) {
    result = 'Tie';
  } else if (sumGoodForces > sumEvilForces) {
    result = 'Good';
  } else {
    result = 'Evil';
  }
  return result;
};

module.exports = { whoWinsTheWar, buildSoldierObject, isGood }; // Do not remove this line

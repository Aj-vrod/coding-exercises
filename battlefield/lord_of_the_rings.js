const isGood = (soldierType) => {
  // TODO: return `true` if the soldierType is Good.
  // Hint: Hobbits, Elves, Dwarves and Eagles are Good
  const goodSoldiers = ['Hobbits', 'Elves', 'Dwarves', 'Eagles'];
  return goodSoldiers.includes(soldierType);
};

const buildSoldierObject = (battlefield) => {
  // TODO: Given a battlefield (String), return an object of forces.
  const soldiers = {};
  const separatedElements = battlefield.split(',');
  separatedElements.forEach((pair) => {
    const eachPair = pair.split(':');
    console.log(eachPair);
    soldiers[eachPair[0]] = Number.parseInt(eachPair[1], 10);
  });
  return soldiers;
};

const whoWinsTheWar = (battlefield) => {
  // TODO: Based on the battlefield's description (it's a String), return "Good", "Evil" or "Tie".
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

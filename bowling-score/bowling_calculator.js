const bowlingScore = (rolls) => {
  // TODO: computer score from rolls
  // rolls is an array
  // if rolls not empty
  let rollsCounter = 1;
  let finalScore = 0;
  if (rolls.length > 0) {
    // iterate over array
    rolls.forEach((roll, index) => {
      // console.log(finalScore);
      // console.log(rollsCounter);
      // console.log(roll);
      // 9 first rows: general rules
      if (roll === 'Skip') {
        console.log('skipped');
      } else if (rollsCounter < 10) {
        // if first score is not 10, sum the following one
        // console.log(rolls);
        if (roll < 10) {
          roll += rolls[index + 1];
          // if get fewer than 10 with two rolls, the sum is your score
          if (roll < 10) {
            finalScore += roll;
            rolls[index + 1] = 'Skip';
            // rolls.splice(0, 2);
            // console.log(rolls);
          } else if (roll === 10) {
            // if you get 10 with two (spare), score is this 10 plus next roll's pins
            roll += rolls[index + 2];
            finalScore += roll;
            rolls[index + 1] = 'Skip';
            // rolls.splice(0, 2);
            // console.log(rolls);
          }
        } else if (roll === 10) {
          // your score is this 10 plus pins from the two follosing rolls
          roll += rolls[index + 1];
          roll += rolls[index + 2];
          // get general score
          finalScore += roll;
          // if first is 10 (strike), the following is another roll (you don't get second roll)
          // rolls.shift();
        }
        rollsCounter += 1;
      } else if (rollsCounter === 10) {
        // 10 roll:
        // if first score is 10, sum following 2 rolls
        if (roll === 10) {
          roll += rolls[index + 1];
          roll += rolls[index + 2];
          finalScore += roll;
          rolls[index + 1] = 'Skip';
          rolls[index + 2] = 'Skip';
          // rolls.splice(0, 3);
        } else if (roll !== 10) {
          // if two first scores sum up 10, sum following roll
          roll += rolls[index + 1];
          if (roll === 10) {
            roll += rolls[index + 2];
            finalScore += roll;
            rolls[index + 1] = 'Skip';
            rolls[index + 2] = 'Skip';
            // rolls.splice(0, 3);
          } else {
            // if two rolls dont sum up 10, does not get a third roll
            finalScore += roll;
            rolls[index + 1] = 'Skip';
            // rolls.splice(0, 2);
          }
        }
        // get total score
      }
    });
  }
  return finalScore;
};

module.exports = bowlingScore; // Do not remove this line.

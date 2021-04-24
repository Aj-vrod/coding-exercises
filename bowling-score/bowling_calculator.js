// Write function to calculate the score of a bowling game accoring to the rules.
// The input is a list of pins knocked down per roll for one player.
// The function should return the player score.
const bowlingScore = (rolls) => {
  // rolls is an array
  // if rolls not empty
  let rollsCounter = 1;
  let finalScore = 0;
  if (rolls.length > 0) {
    // iterate over array
    rolls.forEach((roll, index) => {
      // 9 first rows: general rules
      if (roll === 'Skip') {
      } else if (rollsCounter < 10) {
        // if first score is not 10, sum the following one
        if (roll < 10) {
          roll += rolls[index + 1];
          // if get fewer than 10 with two rolls, the sum is your score
          if (roll < 10) {
            finalScore += roll;
            rolls[index + 1] = 'Skip';
          } else if (roll === 10) {
            // if you get 10 with two (spare), score is this 10 plus next roll's pins
            roll += rolls[index + 2];
            finalScore += roll;
            rolls[index + 1] = 'Skip';
          }
        } else if (roll === 10) {
          // your score is this 10 plus pins from the two follosing rolls
          roll += rolls[index + 1];
          roll += rolls[index + 2];
          // get general score
          finalScore += roll;
          // if first is 10 (strike), the following is another roll (you don't get second roll)
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
        } else if (roll !== 10) {
          // if two first scores sum up 10, sum following roll
          roll += rolls[index + 1];
          if (roll === 10) {
            roll += rolls[index + 2];
            finalScore += roll;
            rolls[index + 1] = 'Skip';
            rolls[index + 2] = 'Skip';
          } else {
            // if two rolls dont sum up 10, does not get a third roll
            finalScore += roll;
            rolls[index + 1] = 'Skip';
          }
        }
        // get total score
      }
    });
  }
  return finalScore;
};

// Must return 179
console.log(bowlingScore([1,4,2,8,6,4,7,3,10,10,10,9,1,4,5,6,4,9]))

module.exports = bowlingScore; // To export function

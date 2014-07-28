function bowlingGame() {
  this.rolls = [];
};

bowlingGame.prototype.roll = function(pins) {
  pins = ~~pins;

  if (pins < 0 || pins > 10) {
    throw new Error('Illegal move.');
  }

  this.rolls.push(pins);
};

bowlingGame.prototype.score = function() {
    var frame = 1,
        hasRolled = 0;

    return this.rolls.reduce(function(score, currentRoll, index, rolls) {
        score += currentRoll;
        // if it's a strike add the score from 2 balls from now
        if (!hasRolled && frame < 10 && currentRoll == 10) {
            score += ~~rolls[index + 2];
        }
        // if it's a strike or a spare add the score from the next ball
        if (frame < 10 && currentRoll + (hasRolled ? rolls[index - 1] : 0) == 10) {
            score += ~~rolls[index + 1];
        }
        hasRolled = hasRolled || currentRoll == 10 ? 0 : 1;
        if (!hasRolled && frame < 10) {
            frame++;
        }
        return score;
    }, 0);

};

module.exports = bowlingGame;

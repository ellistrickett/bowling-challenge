'use strict';

class Bowling {

  constructor() {
    this.rolls = [];
    this.lastRoll = 0
  }

  roll(pins){
    this.rolls.push(pins);
    this.lastRoll = pins
  }

  get score() {
    let score = 0;
    let rollNumber = 0;

    for (let frameNumber = 0; frameNumber < 10; frameNumber++) {
      if (this.isStrike(rollNumber)) {
        score += this.strikeBonus(rollNumber);
        rollNumber ++;
        continue;
      }

      const frameScore = this.rolls[rollNumber] + this.rolls[rollNumber + 1];
  
      if (this.isSpare(frameScore)) {
        score += this.spareBonus(rollNumber);
      }
      else {
        score += frameScore;
      }
      rollNumber += 2;
    }
    return score;
  }

  isSpare(frameScore) { 
    return frameScore === 10;
  }

  spareBonus(rollNumber) {
    return 10 + this.rolls[rollNumber + 2];
  }

  isStrike(rollNumber) {
    return this.rolls[rollNumber] === 10;
  }

  strikeBonus(rollNumber) {
    return 10 + this.rolls[rollNumber + 1] + this.rolls[rollNumber + 2];
  }
  
}
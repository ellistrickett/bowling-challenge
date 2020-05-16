'use strict';

class Bowling {

  constructor() {
    this.rolls = [];
  }

  roll(pins){
    this.rolls.push(pins);
  }

  get score(){
    let score = 0;
    let rollNumber = 0;

    for (let frameNumber = 0; frameNumber < 10; frameNumber++) {
      if (this.rolls[rollNumber] === 10) {
        score += 10 + this.rolls[rollNumber + 1] + this.rolls[rollNumber + 2];
        rollNumber ++;
        continue;
      }

      const frameScore = this.rolls[rollNumber] + this.rolls[rollNumber + 1];
  
      if (frameScore === 10) {
        score += 10 + this.rolls[rollNumber + 2];
      }
      else {
        score += frameScore;
      }
      rollNumber += 2;
    }
    return score;
  }

}
'use strict';

class Bowling {

  constructor() {
    this.totalScore = 0
  }

  roll(pins){
    this.totalScore += pins;
  }

  get score(){
    return this.totalScore;
  }

}
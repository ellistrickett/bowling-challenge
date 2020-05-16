'use strict';

describe('Bowling', function(){

  let bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it ('can roll a game of 0s', function(){
    manyRolls(0, 20)
    expect(bowling.score).toEqual(0);
  });

  it ('can roll a game of 1s and score will be 20', function(){
    manyRolls(1, 20)
    expect(bowling.score).toEqual(20)
  });

  function manyRolls(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      bowling.roll(pins);
    }
  }

});

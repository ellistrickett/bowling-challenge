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

  it ('can roll a spare', function(){
    bowling.roll(7);
    bowling.roll(3);
    bowling.roll(4);
    manyRolls(0, 17)
    expect(bowling.score).toEqual(18);
  });

  it('can roll a strike', function(){
    bowling.roll(10)
    bowling.roll(2)
    bowling.roll(3)
    manyRolls(0, 17)
    expect(bowling.score).toEqual(20)
  });

  function manyRolls(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      bowling.roll(pins);
    }
  }

});

'use strict';

describe('Bowling', function(){

  let bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it ('can roll a game of 0s', function(){
    for (let i = 0; i < 20; i++) {
      bowling.roll(0);
    }
    expect(bowling.score).toEqual(0);
  });

  it ('can roll a game of 1s and score will be 20', function(){
    for (let i = 0; i < 20; i++) {
      bowling.roll(1);
    }
    expect(bowling.score).toEqual(20)
  });

});

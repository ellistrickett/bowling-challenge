'use strict';

describe('Bowling', function(){

  let bowling;

  beforeEach(function(){
    bowling = new bowling();
  });

  it ('can roll a game of zeros', function(){
    for (let i = 0; i < 20; i++) {
      bowling.roll(0);
    }
  expect(bowling.score).toEqual(0);
  });

});
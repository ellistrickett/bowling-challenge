$(document).ready(function (){

  var bowling = new Bowling();

  function updateScore() {
    $('#pins').text(bowling.lastRoll);
  }

  $('#1').on('click', function() {
    bowling.roll(1);
    updateScore()
  })

  // $('#2').on('click', function(){
  //   this.roll(2)
  // })

  // $('#3').on('click', function(){
  //   this.roll(3)
  // })

  // $('#4').on('click', function(){
  //   this.roll(4)
  // })

  // $('#5').on('click', function(){
  //   this.roll(5)
  // })

  // $('#6').on('click', function(){
  //   this.roll(6)
  // })

  // $('#7').on('click', function(){
  //   this.roll(7)
  // })

  // $('#8').on('click', function(){
  //   this.roll(8)
  // })

  // $('#9').on('click', function(){
  //   this.roll(9)
  // })

  // $('#10').on('click', function(){
  //   this.roll(10)
  // })

})
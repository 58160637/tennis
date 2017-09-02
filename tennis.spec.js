function TennisGame(){
  this.reset = () => {

  }
  this.echo = () => {
    return 'Love - Love'
  }
}

test('Echo "Love - Love" when game start', () => {
  //arrange
  let app = new TennisGame()
  //act
  app.reset();
  let result = app.echo()
  //assert
  expect(result).toBe('Love - Love')
})

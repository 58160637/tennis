function TennisGame() {
    const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forthy']
    this.playerAScore = 0
    this.playerBScore = 0

    this.reset = () => {
        this.playerAScore = 0
        this.playerBScore = 0
    }

    this.echo = () => {
       return `${scoreString[this.playerAScore]} - ${scoreString[this.playerBScore]}`
    }

    this.playerAGetScore = () => {
        this.playerAScore++
    }

    this.playerBGetScore = () => {
      this.playerBScore++
    }
}

describe('echo()' , () => {
  let app

  beforeEach(() => {
    app = new TennisGame()
    app.reset()
  })

  test('Echo "Love - Love" when game start', () => {

    let result = app.echo()
    //assert
    expect(result).toBe('Love - Love')
  })

  test('Echo "Fifteen - Love" when playerA get first score', () => {

      app.playerAGetScore()

      // Act
      let result = app.echo()

      // Assert
      expect(result).toBe('Fifteen - Love')
  })

  test('Echo "Love - Fifteen" when playerB gte first score ', () => {

      app.playerBGetScore()

      // Act
      let result = app.echo()

      // Assert
      expect(result).toBe('Love - Fifteen')
  })

  test('Echo "Thirty - Fifteen" when score 30 - 15 ', () => {

      app.playerAGetScore()
      app.playerAGetScore()
      app.playerBGetScore()

      // Act
      let result = app.echo()

      // Assert
      expect(result).toBe('Thirty - Fifteen')
  })

})

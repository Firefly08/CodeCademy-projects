onst team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 21
    },
    {
      firstName: 'Pele',
      lastName: 'Edison',
      age: 30
    },
    {
      firstName: 'Maradona',
      lastName: 'Diego',
      age: 35
    }],

  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Santos',
      teamPoints: 33,
      opponentPoints: 13
    },
    {
      opponent: 'Ronaldo',
      teamPoints: 75,
      opponentPoints: 80
    }],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },

  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    }
    this.games.push(game);
  }
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
team.addGame('Titans', 100, 98);
team.addGame('Hawks', 82, 75);
team.addGame('Saints', 75, 50);
console.log(team.games);

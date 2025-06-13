function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
                
            }
        }
    };
}
console.log(gameObject());

//numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
function numPointsScored(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey];
        for (let player in team.players) {
            if (player === playerName) {
                return team.players[player].points;
            }
        }
    }
}
console.log(numPointsScored("Jeff Adrein")); // Got 10

//shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
function shoeSize(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey];
        for (let player in team.players) {
            if (player === playerName) {
                return team.players[player].shoe;
            }
        }
    }
}

//teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(teamName) {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey];
        if (team.teamName === teamName) {
            return team.colors;
        }
    }
}

//teamNames, that operates on the game object to return an array of the team names
function teamNames() {
    const game = gameObject();
    const names = [];
    for (let teamKey in game) {
        names.push(game[teamKey].teamName);
    }
    return names;
}

//playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.
function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];
    for (let teamKey in game) {
        const team = game[teamKey];
        if (team.teamName === teamName) {
            for (let player in team.players) {
                numbers.push(team.players[player].number);
            }
        }
    }
    return numbers;
}

//playerStats, that takes in an argument of a player's name and returns an object of that player's stats. 
function playerStats(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey];
        for (let player in team.players) {
            if (player === playerName) {
                return team.players[player];
            }
        }
    }
}

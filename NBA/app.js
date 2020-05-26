const warriorsGames = [
	{
		awayTeam: {
			team: 'Golden State',
			points: 119,
			isWinner: true
		},
		homeTeam: {
			team: 'Houston',
			points: 106,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 105,
			isWinner: false
		},
		homeTeam: {
			team: 'Houston',
			points: 127,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 126,
			isWinner: true
		},
		awayTeam: {
			team: 'Houston',
			points: 85,
			isWinner: false
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 92,
			isWinner: false
		},
		awayTeam: {
			team: 'Houston',
			points: 95,
			isWinner: true
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 94,
			isWinner: false
		},
		homeTeam: {
			team: 'Houston',
			points: 98,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 115,
			isWinner: true
		},
		awayTeam: {
			team: 'Houston',
			points: 86,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 101,
			isWinner: true
		},
		homeTeam: {
			team: 'Houston',
			points: 92,
			isWinner: false
		}
	}
];

const makeChart = (games, targetTeam) => {
	const ulParent = document.createElement('ul');
	for (let game of games) {
		const gameLi = document.createElement('li');
		gameLi.innerHTML = getScoreLine(game);
		isWinner(game, targetTeam);
		gameLi.classList.add(isWinner(game, targetTeam) ? 'has-won' : 'has-lost');
		ulParent.appendChild(gameLi);
	}
	return ulParent;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
	const { team: hTeam, points: hPoints } = homeTeam;
	const { team: aTeam, points: aPoints } = awayTeam;
	const teamNames = `${aTeam} @ ${hTeam}`;
	let scoreLine;
	if (aPoints > hPoints) {
		scoreLine = `<b>${aPoints}</b>-${hPoints}`;
	} else {
		scoreLine = `${aPoints}-<b>${hPoints}</b>`;
	}
	return `${teamNames} ${scoreLine}`;
};

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
	const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
	return target.isWinner;
};
// const ulParent = document.createElement('ul');
// for (let game of warriorsGames) {
// 	const gameLi = document.createElement('li');
// 	const { homeTeam, awayTeam } = game;
// 	const { team: hTeam, points: hPoints } = homeTeam;
// 	const { team: aTeam, points: aPoints } = awayTeam;
// 	const teamNames = `${aTeam} @ ${hTeam}`;
// 	let scoreLine;
// 	if (aPoints > hPoints) {
// 		scoreLine = `<b>${aPoints}</b>-${hPoints}`;
// 	} else {
// 		scoreLine = `${aPoints}-<b>${hPoints}</b>`;
// 	}
// 	const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
// 	gameLi.classList.add(warriors.isWinner ? 'has-won' : 'has-lost');
// 	console.log(warriors);
// 	gameLi.innerHTML = `${teamNames} ${scoreLine}`;
// 	ulParent.appendChild(gameLi);

// 	console.log(awayTeam.team, homeTeam.team);
// 	console.log(scoreLine);
// }
// document.body.prepend(ulParent);
const gsSection = document.querySelector('#gs');
const hrSection = document.querySelector('#hr');
const hrChart = makeChart(warriorsGames, 'Houston');
const gsChart = makeChart(warriorsGames, 'Houston');
gsSection.appendChild(gsChart);
hrSection.appendChild(hrChart);

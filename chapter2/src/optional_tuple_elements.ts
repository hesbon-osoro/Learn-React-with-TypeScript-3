export type Score = [number, number?, number?];

const samScores: Score = [55];
const bobScores: Score = [85, 98];
const janeScores: Score = [55, 66, 44];

// this is not allowed
// const notAllowed: Score = [45, 45, 45, 41];
// const notValid: Score = [];

// not valid to have a required value after an optional
// export type ProblematicScore = [number?, number?, number]

export type Scores = [number, number?, number?];

export function logScores(...scores: Scores) {
	console.log(scores);
}

logScores(10, 12);
logScores(10, 12, 13);

export function logScoresEnhanced(...scores: Scores) {
	if (scores.length === 3) {
		console.log(scores, 'Thank you for logging all 3 scores');
	} else {
		console.log(scores);
	}
}

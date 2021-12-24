export type Scores = [string, ...number[]];

function logNameAndScores(...scores: Scores) {
	console.log(scores);
}

logNameAndScores('Billy', 60, 70, 75);

function logScores(...scores: [...number[]]) {
	console.log(scores);
}

logScores(50, 85, 75);

function logScores1(score1: number, score2: number, score3: number) {
	console.log(score1, score2, score3);
}
const scores: number[] = [10, 20, 30];

// logScores1(...scores: number[]);

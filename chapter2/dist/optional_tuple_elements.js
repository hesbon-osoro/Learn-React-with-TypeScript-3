const samScores = [55];
const bobScores = [85, 98];
const janeScores = [55, 66, 44];
export function logScores(...scores) {
	console.log(scores);
}
logScores(10, 12);
logScores(10, 12, 13);
export function logScoresEnhanced(...scores) {
	if (scores.length === 3) {
		console.log(scores, 'Thank you for logging all 3 scores');
	} else {
		console.log(scores);
	}
}
//# sourceMappingURL=optional_tuple_elements.js.map

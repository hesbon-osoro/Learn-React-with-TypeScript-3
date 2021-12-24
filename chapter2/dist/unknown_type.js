export function logScores(scores) {
	console.log(scores.firstName);
	console.log(scores.scores);
}
logScores({ name: 'Billy', scores: [60, 70, 75] });
// throws correct errors
// export function logScoresBetter(scores:unknown){
//     console.log(scores.firstName);
//     console.log(scores.scores);
// }
const scoresCheck = scores => {
	return 'name' in scores && 'scores' in scores;
};
// using the scoresCheck function to do unknown type checking
// function logScores1(scores:unknown){
//     if(scoresCheck(scores)){
//         console.log(scores.firstName);
//         console.log(scores.scores);
//     }
// }
// correcting error
function logScores1(scores) {
	if (scoresCheck(scores)) {
		console.log(scores.name);
		console.log(scores.scores);
	}
}
// using a type predicate in this way is called type guard
const scoresCheck1 = scores => {
	return 'name' in scores && 'scores' in scores;
};
// using type assertions for type narrowing
function logScores2(scores) {
	// this will correctly complain
	// console.log((scores as Scores1).firstName);
	console.log(scores.name);
	console.log(scores.scores);
}
//# sourceMappingURL=unknown_type.js.map

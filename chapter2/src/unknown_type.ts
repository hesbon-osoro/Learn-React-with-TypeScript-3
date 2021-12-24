export function logScores(scores: any) {
	console.log(scores.firstName);
	console.log(scores.scores);
}

logScores({ name: 'Billy', scores: [60, 70, 75] });

// throws correct errors
// export function logScoresBetter(scores:unknown){
//     console.log(scores.firstName);
//     console.log(scores.scores);
// }

const scoresCheck = (
	scores: any
): scores is { name: string; scores: number[] } => {
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

function logScores1(scores: unknown) {
	if (scoresCheck(scores)) {
		console.log(scores.name);
		console.log(scores.scores);
	}
}

// making the predicate readable

export type Scores = { name: string; scores: number[] };

// using a type predicate in this way is called type guard
const scoresCheck1 = (scores: any): scores is Scores => {
	return 'name' in scores && 'scores' in scores;
};

type Scores1 = { name: string; scores: number[] };

// using type assertions for type narrowing

function logScores2(scores: unknown) {
	// this will correctly complain
	// console.log((scores as Scores1).firstName);

	console.log((scores as Scores1).name);
	console.log((scores as Scores1).scores);
}

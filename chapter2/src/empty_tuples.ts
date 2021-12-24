type Empty = [];

const empty: Empty = [];

// const notEmpty: Empty = ['Billy']

export type Scores =
	| []
	| [number]
	| [number, number]
	| [number, number, number];

const benScores: Scores = [];
const samScores: Scores = [55];
const janeScores: Scores = [55, 66];
const jimScores: Scores = [55, 66, 77];
// the score is not allowed
// const hbScores:Scores=[55,66,77,77]

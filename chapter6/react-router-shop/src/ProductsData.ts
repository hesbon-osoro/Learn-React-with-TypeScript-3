export interface IReview {
	comment: string;
	reviewer: string;
}

export interface IProduct {
	id: number;
	name: string;
	description: string;
	price: number;
	reviews: IReview[];
}

export const products: IProduct[] = [
	{
		description:
			'A collection of navigational components that compose declaratively with your app',
		id: 1,
		name: 'React Router',
		price: 8,
		reviews: [
			{
				comment: 'Excellent! This does everything I want',
				reviewer: 'Billy',
			},
			{
				comment: "The best router I've ever worked with",
				reviewer: 'Sally',
			},
		],
	},
	{
		description: 'A library that helps manage state across your app',
		id: 2,
		name: 'React Redux',
		price: 12,
		reviews: [
			{
				comment: "I've found thiis really useful in a large app I'm working on",
				reviewer: 'Billy',
			},
			{
				comment: 'A bit confusing at first but simple when you get used to it',
				reviewer: 'Sally',
			},
		],
	},
	{
		description: 'A library that helps you interact with a QraphQL backend',
		id: 3,
		name: 'React Apollo',
		price: 12,
		reviews: [
			{
				comment: "I'll never work with a REST API again!",
				reviewer: 'Billy',
			},
			{
				comment: 'It makes working with GraphQL backends a breeze',
				reviewer: 'Sally',
			},
		],
	},
];

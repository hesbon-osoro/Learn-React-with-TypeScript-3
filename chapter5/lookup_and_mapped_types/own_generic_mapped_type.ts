export interface IPerson {
	id: number;
	name: string;
}

export type Stringify<T> = {
	[P in keyof T]: string;
};

export let tim: Stringify<IPerson> = {
	id: '1',
	name: 'Tim',
};

// this is not possible
// tim.id = 1

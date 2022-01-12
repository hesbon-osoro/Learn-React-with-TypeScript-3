export interface IPerson {
	id: number;
	name: string;
}

export type ReadonlyPerson = { readonly [P in keyof IPerson]: IPerson[P] };

export let billy: ReadonlyPerson = {
	id: 1,
	name: 'Billy',
};

// Not possible
// billy.name = 'Sally'

export let sally: Readonly<IPerson> = {
	id: 1,
	name: 'Sally',
};

// Not possible
// sally.name= 'Sally'

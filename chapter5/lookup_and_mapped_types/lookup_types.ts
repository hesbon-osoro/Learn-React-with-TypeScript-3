export interface IPerson {
	id: number;
	name: string;
	age: number;
}

export type PersonProps = keyof IPerson;

export class Field<T, K extends keyof T> {
	name: K;
	label: string;
	defaultValue: T[K];
}

export const idField: Field<IPerson, 'id'> = new Field();

idField.defaultValue = 2;

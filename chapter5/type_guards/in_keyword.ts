export interface IPerson {
	id: number;
	firstName: string;
	surname: string;
}

export interface ICompany {
	id: number;
	name: string;
}

export type PersonOrCompany = IPerson | ICompany;

export function logName(personOrCompany: PersonOrCompany) {
	if ('firstName' in personOrCompany) {
		console.log(`${personOrCompany.firstName} ${personOrCompany.surname}`);
	} else {
		console.log(`${personOrCompany.name}`);
	}
}

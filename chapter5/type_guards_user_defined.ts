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

export function isPerson(
	personOrCompany: PersonOrCompany
): personOrCompany is IPerson {
	return 'firstName' in personOrCompany;
}

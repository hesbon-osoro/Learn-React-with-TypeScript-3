export class Person {
	id: number;
	firstName: string;
	surname: string;
}

export class Company {
	id: number;
	name: string;
}

export type PersonOrCompany = Person | Company;

export function logName(personOrCompany: PersonOrCompany) {
	if (personOrCompany instanceof Person) {
		console.log(`${personOrCompany.firstName} ${personOrCompany.surname}`);
	} else {
		console.log(`${personOrCompany.name}`);
	}
}

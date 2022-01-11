export function condenseString(string: string): string {
	return string.split(' ').join('');
}

export function condenseArray(array: string[]): string[] {
	return array.map(item => item.split(' ').join(''));
}

export function condense(string: string): string;

export function condense(array: string[]): string[];

export function condense(stringOrArray: string | string[]): string | string[] {
	return typeof stringOrArray === 'string'
		? stringOrArray.split(' ').join('')
		: stringOrArray.map(item => item.split(' ').join(''));
}

const condensedText = condense('the cat sat on the mat');
console.log('condensedText', condensedText);

export type StringOrStringArray = string | string[];

export function first(stringOrArray: StringOrStringArray): string {
	if (typeof stringOrArray === 'string') {
		return stringOrArray.substr(0, 1);
	} else {
		return stringOrArray[0];
	}
}

console.log(first('Hello'));
console.log(first(['Hello', 'World']));

export function firstEnhanced(stringOrArray: StringOrStringArray): string {
	if (typeof stringOrArray === 'string') {
		return stringOrArray.substr(0, 1);
	} else if (typeof stringOrArray === 'object') {
		return stringOrArray[0];
	} else {
		const shouldNotReach: never = stringOrArray;
	}
}

'use strict';
exports.__esModule = true;
exports.first = void 0;
function first(stringOrArray) {
	if (typeof stringOrArray === 'string') {
		return stringOrArray.substr(0, 1);
	} else {
		return stringOrArray[0];
	}
}
exports.first = first;
console.log(first('Hello'));
console.log(first(['Hello', 'World']));

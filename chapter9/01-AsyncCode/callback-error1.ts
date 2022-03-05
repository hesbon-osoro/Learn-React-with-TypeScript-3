interface IResult {
	success: boolean;
	error?: any;
}

let result: IResult = { success: true };

setTimeout(() => {
	try {
		throw new Error('Something went wrong');
	} catch (ex) {
		result.success = false;
		result.error = ex;
	}
}, 1000);

console.log(result);

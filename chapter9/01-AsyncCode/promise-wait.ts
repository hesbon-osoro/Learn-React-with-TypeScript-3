export const wait = (ms: number) => {
	return new Promise((res, rej) => {
		if (ms > 1000) {
			rej('Too long');
		}
		setTimeout(() => {
			res('Successfully waited');
		}, ms);
	});
};

wait(500)
	.then(res => console.log('then >', res))
	.catch(err => console.log('catch >', err));

wait(1500)
	.then(res => console.log('then >', res))
	.catch(err => console.log('catch >', err));

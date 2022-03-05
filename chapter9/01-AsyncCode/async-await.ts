import { wait } from './promise-wait';

const someWork = async () => {
	try {
		const res = await wait(500);
		console.log(res);
	} catch (err) {
		console.log(err);
	}
};

someWork();

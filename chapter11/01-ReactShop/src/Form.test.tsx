import { required, IValues } from './Form';

describe('required', () => {
	test("When required is called with empty title, 'title is required' should be returned", () => {
		const values: IValues = {
			title: '',
		};
		const result = required('title', values);
		expect(result).toBe('title is required');
	});
});

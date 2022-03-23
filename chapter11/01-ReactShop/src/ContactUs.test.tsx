import React from 'react';
import ReactDOM from 'react-dom';
import { Simulate } from 'react-dom/test-utils';
import ContactUs from './ContactUs';
import { ISubmitResult } from './Form';

describe('ContactUs', () => {
	test('When submit without filling in fields should display errors', () => {
		const handleSubmit = async (): Promise<ISubmitResult> => {
			return {
				success: true,
			};
		};
		const container = document.createElement('div');
		ReactDOM.render(<ContactUs onSubmit={handleSubmit} />, container);
		const form = container.querySelector('form');
		expect(form).not.toBeNull();
		Simulate.submit(form!);
		const errorSpans = container.querySelectorAll('.form-error');
		expect(errorSpans.length).toBe(3);
		ReactDOM.unmountComponentAtNode(container);
	});
});

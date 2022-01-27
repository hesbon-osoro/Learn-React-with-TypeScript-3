import React from 'react';

import ContactUs from './ContactUs';

export interface IState {
	name: string;
	email: string;
	reason: string;
	notes: string;
}

export class ContactUsPage extends React.Component<{}, IState> {
	public constructor(props: {}) {
		super(props);
		this.state = {
			email: '',
			name: '',
			notes: '',
			reason: '',
		};
	}
	public render() {
		return (
			<div className="page-container">
				<h1>Contact Us</h1>
				<p>
					If you enter your details we'll get back to you as soon as we can.
				</p>
				<ContactUs
					name={this.state.name}
					email={this.state.email}
					reason={this.state.reason}
					notes={this.state.notes}
				/>
			</div>
		);
	}
}

export default ContactUsPage;

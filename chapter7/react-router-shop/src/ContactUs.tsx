import React from 'react';

export interface IProps {
	name: string;
	email: string;
	reason: string;
	notes: string;
}

const ContactUs: React.FC<IProps> = props => {
	return (
		<form className="form" noValidate={true}>
			<div className="form-group">
				<label htmlFor="name">Your name</label>
				<input type="text" id="name" />
			</div>
		</form>
	);
};

export default ContactUs;

import React from 'react';

const ContactUs: React.FC = () => {
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

import React from 'react';

export interface IProps {
	name: string;
	onNameChange: (name: string) => void;
	email: string;
	onEmailChange: (email: string) => void;
	reason: string;
	onReasonChange: (reason: string) => void;
	notes: string;
	onNotesChange: (notes: string) => void;
}

const ContactUs: React.FC<IProps> = props => {
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.onNameChange(e.currentTarget.value);
	};
	return (
		<form className="form" noValidate={true}>
			<div className="form-group">
				<label htmlFor="name">Your name</label>
				<input
					type="text"
					id="name"
					value={props.name}
					onChange={handleNameChange}
				/>
			</div>
		</form>
	);
};

export default ContactUs;

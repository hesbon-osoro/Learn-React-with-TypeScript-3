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
	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.onEmailChange(e.currentTarget.value);
	};
	const handleReasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		props.onReasonChange(e.currentTarget.value);
	};
	const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		props.onNotesChange(e.currentTarget.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
	};
	return (
		<form className="form" noValidate={true} onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="name">Your name</label>
				<input
					type="text"
					id="name"
					value={props.name}
					onChange={handleNameChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="email">Your email address</label>
				<input
					type="email"
					id="email"
					value={props.email}
					onChange={handleEmailChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="reason">Reason you need to contact us</label>
				<select id="reason" value={props.reason} onChange={handleReasonChange}>
					<option value="Marketing">Marketing</option>
					<option value="Support" selected>
						Support
					</option>
					<option value="Feedback">Feedback</option>
					<option value="Jobs">Jobs</option>
					<option value="Other">Other</option>
				</select>
			</div>
			<div className="form-group">
				<label htmlFor="notes">Additional notes</label>
				<textarea id="notes" value={props.notes} onChange={handleNotesChange} />
			</div>
		</form>
	);
};

export default ContactUs;

import * as React from 'react';

export interface IValues {
	[key: string]: any;
}

export interface IFormProps {
	defaultValues: IValues;
}

export interface IState {
	values: IValues;
}

export interface IFieldProps {
	name: string;
	label: string;
	type?: 'Text' | 'Email' | 'Select' | 'TextArea';
	options?: string[];
}

export class Form extends React.Component<IFormProps, IState> {
	constructor(props: IFormProps) {
		super(props);
		this.state = {
			values: props.defaultValues,
		};
	}
	public static Field: React.FC<IFieldProps> = props => {
		const { name, label, type, options } = props;
		return (
			<div className="form-group">
				<label htmlFor={name}>{label}</label>
				{(type === 'Text' || type === 'Email') && (
					<input type={type?.toLowerCase()} id={name} />
				)}
				{type === 'TextArea' && <textarea id={name} />}
				{type === 'Select' && (
					<select>
						{options &&
							options.map(option => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
					</select>
				)}
			</div>
		);
	};
	public render() {
		return (
			<form className="form" noValidate={true}>
				{this.props.children}
			</form>
		);
	}
}

Form.Field.defaultProps = {
	type: 'Text',
};

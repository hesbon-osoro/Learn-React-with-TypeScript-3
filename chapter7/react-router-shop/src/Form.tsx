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
export interface IFormContext {
	values: IValues;
}
const FormContext = React.createContext<IFormContext>({
	values: {},
});
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
			<FormContext.Consumer>
				{context => (
					<div className="form-group">
						<label htmlFor={name}>{label}</label>
						{(type === 'Text' || type === 'Email') && (
							<input
								type={type?.toLowerCase()}
								id={name}
								value={context.values[name]}
							/>
						)}
						{type === 'TextArea' && (
							<textarea id={name} value={context.values[name]} />
						)}
						{type === 'Select' && (
							<select value={context.values[name]}>
								{options &&
									options.map(option => (
										<option key={option} value={option}>
											{option}
										</option>
									))}
							</select>
						)}
					</div>
				)}
			</FormContext.Consumer>
		);
	};
	public render() {
		const context: IFormContext = {
			values: this.state.values,
		};
		return (
			<FormContext.Provider value={context}>
				<form className="form" noValidate={true}>
					{this.props.children}
				</form>
			</FormContext.Provider>
		);
	}
}

Form.Field.defaultProps = {
	type: 'Text',
};

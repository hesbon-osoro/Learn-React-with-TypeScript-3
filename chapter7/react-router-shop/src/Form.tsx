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
	setValue?: (fieldName: string, value: any) => void;
}
export type Validator = (
	fieldName: string,
	values: IValues,
	args?: any
) => string;

export const required: Validator = (
	fieldName: string,
	values: IValues,
	args?: any
): string =>
	values[fieldName] === undefined ||
	values[fieldName] === null ||
	values[fieldName] === ''
		? `${fieldName} is required`
		: '';
export const minLength: Validator = (
	fieldName: string,
	values: IValues,
	length: number
): string =>
	values[fieldName]?.length < length
		? `${fieldName} must be at least ${length} characters`
		: '';
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
		const handleChange = (
			e:
				| React.ChangeEvent<HTMLInputElement>
				| React.ChangeEvent<HTMLTextAreaElement>
				| React.ChangeEvent<HTMLSelectElement>,
			context: IFormContext
		) => {
			if (context.setValue) {
				context.setValue(props.name, e.currentTarget.value);
			}
		};
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
								onChange={e => handleChange(e, context)}
							/>
						)}
						{type === 'TextArea' && (
							<textarea
								id={name}
								value={context.values[name]}
								onChange={e => handleChange(e, context)}
							/>
						)}
						{type === 'Select' && (
							<select
								value={context.values[name]}
								onChange={e => handleChange(e, context)}
							>
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
	private setValue = (fieldName: string, value: any) => {
		const newValues = { ...this.state.values, [fieldName]: value };
		this.setState({ values: newValues });
	};
	public render() {
		const context: IFormContext = {
			setValue: this.setValue,
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

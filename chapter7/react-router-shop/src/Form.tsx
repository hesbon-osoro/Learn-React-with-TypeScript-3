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
		return <div></div>;
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

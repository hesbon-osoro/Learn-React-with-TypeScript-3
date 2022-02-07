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

export class Form extends React.Component<IFormProps, IState> {
	constructor(props: IFormProps) {
		super(props);
		this.state = {
			values: props.defaultValues,
		};
	}

	public render() {
		return (
			<form className="form" noValidate={true}>
				{this.props.children}
			</form>
		);
	}
}

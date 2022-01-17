import React from 'react';

export interface IProps {
	headings: string[];
}
export interface IState {
	activeHeading: string;
}

class Tabs extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props);
		this.state = {
			activeHeading:
				this.props.headings && this.props.headings.length > 0
					? this.props.headings[0]
					: '',
		};
	}
	public render() {
		return (
			<ul className="tabs">
				{this.props.headings.map(heading => (
					<li className={heading === this.state.activeHeading ? 'active' : ''}>
						{heading}
					</li>
				))}
			</ul>
		);
	}
}

export default Tabs;

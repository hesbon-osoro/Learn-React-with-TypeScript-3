// Basic component
// import React from 'react';

// export interface IProps {
// 	headings: string[];
// }
// export interface IState {
// 	activeHeading: string;
// }

// class Tabs extends React.Component<IProps, IState> {
// 	public constructor(props: IProps) {
// 		super(props);
// 		this.state = {
// 			activeHeading:
// 				this.props.headings && this.props.headings.length > 0
// 					? this.props.headings[0]
// 					: '',
// 		};
// 	}

// 	private handleTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
// 		const li = e.target as HTMLLIElement;
// 		const heading: string = li.textContent ? li.textContent : '';
// 		this.setState({ activeHeading: heading });
// 	};
// 	public render() {
// 		return (
// 			<ul className="tabs">
// 				{this.props.headings.map(heading => (
// 					<li
// 						onClick={this.handleTabClick}
// 						className={heading === this.state.activeHeading ? 'active' : ''}
// 					>
// 						{heading}
// 					</li>
// 				))}
// 			</ul>
// 		);
// 	}
// }

// export default Tabs;

// Refactored component
import React from 'react';

export interface ITabsContext {
	activeName?: string;
	handleTabClick?: (name: string) => void;
}

export const TabsContext = React.createContext<ITabsContext>({});
export interface IState {
	activeName: string;
}

export interface ITabProps {
	name: string;
	initialActive?: boolean;
}
class Tabs extends React.Component<{}, IState> {
	public static Tab: React.FC<ITabProps> = props => <li>{props.children}</li>;
	private handleTabClick = (name: string) => {
		this.setState({ activeName: name });
	};
	public render() {
		return (
			<TabsContext.Provider
				value={{
					activeName: this.state ? this.state.activeName : '',
					handleTabClick: this.handleTabClick,
				}}
			>
				<ul className="tabs">{this.props.children}</ul>
			</TabsContext.Provider>
		);
	}
}

export default Tabs;

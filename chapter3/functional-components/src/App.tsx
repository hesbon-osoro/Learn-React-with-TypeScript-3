import React, { Component } from 'react';
import logo from './logo.svg';
import Confirm from './Confirm';
import './App.css';

interface IState {
	confirmOpen: boolean;
	confirmMessage: string;
	confirmVisible: boolean;
	countDown: number;
}
class App extends Component<{}, IState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			confirmMessage: 'Please hit the confirm button',
			confirmOpen: false,
			confirmVisible: true,
			countDown: 10,
		};
	}
	public static getDerivedStateFromProps(props: {}, state: IState) {
		console.log('getDerivedStateFromProps', props, state);
		return null;
	}
	private timer: number = 0;
	private renderCount = 0;

	public getSnapshotBeforeUpdate(prevProps: {}, prevState: IState) {
		this.renderCount += 1;
		console.log('getSnapshotBeforeUpdate', prevProps, prevState, {
			renderCount: this.renderCount,
		});
		return this.renderCount;
	}
	public componentDidUpdate(
		prevProps: {},
		prevState: IState,
		snapshot: number
	) {
		console.log('componentDidUpdate', prevProps, prevState, snapshot, {
			renderCount: this.renderCount,
		});
	}

	public componentDidMount() {
		this.timer = window.setInterval(() => this.handleTimerTick(), 1000);
	}
	public componentWillUnmount() {
		clearInterval(this.timer);
	}

	public shouldComponentUpdate(nextProps: {}, nextState: IState) {
		console.log('shouldComponentUpdate', nextProps, nextState);
		return true;
	}
	private handleCancelConfirmClick = () => {
		this.setState({
			confirmMessage: `Take a break, I'm sure you will later`,
			confirmOpen: false,
		});
		clearInterval(this.timer);
	};
	private handleOkConfirmClick = () => {
		this.setState({
			confirmMessage: `Cool, carry on reading!`,
			confirmOpen: false,
		});
		clearInterval(this.timer);
	};
	private handleConfirmClick = () => {
		this.setState({ confirmOpen: true });
		clearInterval(this.timer);
	};

	private handleTimerTick() {
		this.setState(
			{
				confirmMessage: `Please hit the confirm button ${this.state.countDown} seconds to go`,
				countDown: this.state.countDown - 1,
			},
			() => {
				if (this.state.countDown <= 0) {
					clearInterval(this.timer);
					this.setState({
						confirmMessage: 'Too late to confirm!',
						confirmVisible: false,
					});
				}
			}
		);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React & TypeScript
					</a>
				</header>
				<p>{this.state.confirmMessage}</p>
				{this.state.confirmVisible && (
					<button onClick={this.handleConfirmClick}>Confirm</button>
				)}
				{this.state.countDown > 0 && (
					<Confirm
						open={this.state.confirmOpen}
						title="React and TypeScript"
						content="Are you sure you want to learn React and TypeScript"
						cancelCaption="No way"
						okCaption="Yes please!"
						onOkClick={this.handleOkConfirmClick}
						onCancelClick={this.handleCancelConfirmClick}
					/>
				)}
			</div>
		);
	}
}

export default App;

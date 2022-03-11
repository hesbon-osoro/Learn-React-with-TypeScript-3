import React, { Component } from 'react';
import { Header } from './Header';
import './App.css';

class App extends Component {
	public render() {
		return (
			<div className="App">
				<header className="App-header">
					<Header />
				</header>
			</div>
		);
	}
}

export default App;

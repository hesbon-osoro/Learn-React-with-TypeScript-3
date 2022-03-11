import React, { Component } from 'react';
import { Header } from './Header';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import { credentials } from './credentials';
import RepoSearch from './RepoSearch';

const client = new ApolloClient({
	uri: 'https://api.github.com/graphql',
	headers: {
		authorization: `Bearer ${credentials.GITHUB_TOKEN}`,
	},
});
class App extends Component {
	public render() {
		return (
			<ApolloProvider client={client}>
				<div className="App">
					<header className="App-header">
						<Header />
					</header>
					<RepoSearch client={client} />
				</div>
			</ApolloProvider>
		);
	}
}

export default App;

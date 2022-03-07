import React, { Component } from 'react';
import axios from 'axios';

interface IPost {
	userId: number;
	id?: number;
	title: string;
	body: string;
}

interface IState {
	posts: IPost[];
	error: string;
}

class App extends Component<{}, IState> {
	public constructor(props: {}) {
		super(props);
		this.state = { posts: [], error: '' };
	}
	public componentDidMount() {
		axios
			.get<IPost[]>('https://jsonplaceholder.typicode.com/posts', {
				headers: { 'Content-Type': 'application/json' },
			})
			.then(response => {
				this.setState({ posts: response.data });
			})
			.catch(err => {
				const error =
					err.response.status === 404
						? 'Resource not found'
						: 'An unexpected error has occurred';
				this.setState({ error });
			});
	}
	public render() {
		return (
			<div className="App">
				<ul className="posts">
					{this.state.posts.map(post => (
						<li key={post.id}>
							<h3>{post.title}</h3>
							<p>{post.body}</p>
						</li>
					))}
				</ul>
				{this.state.error && <p className="error">{this.state.error}</p>}
			</div>
		);
	}
}
export default App;

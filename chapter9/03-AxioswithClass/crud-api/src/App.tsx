import React, { Component } from 'react';
import axios, { CancelTokenSource } from 'axios';

interface IPost {
	userId: number;
	id?: number;
	title: string;
	body: string;
}

interface IState {
	posts: IPost[];
	error: string;
	cancelTokenSource?: CancelTokenSource;
	loading: boolean;
	editPost: IPost;
}

class App extends Component<{}, IState> {
	public constructor(props: {}) {
		super(props);
		this.state = {
			posts: [],
			error: '',
			loading: true,
			editPost: {
				body: '',
				title: '',
				userId: 1,
			},
		};
	}
	public componentDidMount() {
		const cancelToken = axios.CancelToken;
		const cancelTokenSource = cancelToken.source();
		this.setState({ cancelTokenSource });
		axios
			.get<IPost[]>('https://jsonplaceholder.typicode.com/posts', {
				cancelToken: cancelTokenSource.token,
				headers: { 'Content-Type': 'application/json' },
				timeout: 5000,
			})
			.then(response => {
				this.setState({ posts: response.data, loading: false });
			})
			.catch(err => {
				const error = axios.isCancel(err)
					? 'Request cancelled'
					: err.code === 'ECONNABORTED'
					? 'A timeout has occurred'
					: err.response.status === 404
					? 'Resource not found'
					: 'An unexpected error has occurred';
				this.setState({ error, loading: false });
			});
	}
	public render() {
		return (
			<div className="App">
				<div className="post-edit">
					<input
						type="text"
						placeholder="Enter title"
						value={this.state.editPost.title}
						onChange={this.handleTitleChange}
					/>
					<textarea
						placeholder="Enter body"
						value={this.state.editPost.body}
						onChange={this.handleBodyChange}
					/>
					<button onClick={this.handleSaveClick}>Save</button>
				</div>
				{this.state.loading && (
					<button onClick={this.handleCancelClick}>Cancel</button>
				)}
				<ul className="posts">
					{this.state.posts.map(post => (
						<li key={post.id}>
							<h3>{post.title}</h3>
							<p>{post.body}</p>
							<button onClick={() => this.handleUpdateClick(post)}>
								Update
							</button>
						</li>
					))}
				</ul>
				{this.state.error && <p className="error">{this.state.error}</p>}
			</div>
		);
	}
	private handleCancelClick = () => {
		if (this.state.cancelTokenSource) {
			this.state.cancelTokenSource.cancel('User cancelled operation');
		}
	};
	private handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			editPost: { ...this.state.editPost, title: e.currentTarget.value },
		});
	};
	private handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		this.setState({
			editPost: { ...this.state.editPost, body: e.currentTarget.value },
		});
	};
	private handleSaveClick = () => {
		if (this.state.editPost.id) {
			axios
				.put<IPost>(
					`https://jsonplaceholder.typicode.com/posts/${this.state.editPost.id}`,
					this.state.editPost,
					{ headers: { 'Content-Type': 'application/json' } }
				)
				.then(() => {
					this.setState({
						editPost: {
							body: '',
							title: '',
							userId: 1,
						},
						posts: this.state.posts
							.filter(post => post.id !== this.state.editPost.id)
							.concat(this.state.editPost),
					});
				});
		} else {
			axios
				.post<IPost>(
					'https://jsonplaceholder.typicode.com/posts',
					{
						body: this.state.editPost.body,
						title: this.state.editPost.title,
						userId: this.state.editPost.userId,
					},
					{
						headers: {
							'Content-Type': 'application/json',
						},
					}
				)
				.then(res => {
					this.setState({ posts: this.state.posts.concat(res.data) });
				});
		}
	};
	private handleUpdateClick = (post: IPost) => {
		this.setState({ editPost: post });
	};
}
export default App;

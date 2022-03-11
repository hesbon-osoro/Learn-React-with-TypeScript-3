import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { credentials } from './credentials';

interface IViewer {
	name: string;
	avatarUrl: string;
}

interface IQueryResult {
	data: {
		viewer: IViewer;
	};
}
export const Header: React.FC = () => {
	const [viewer, setViewer]: [IViewer, (viewer: IViewer) => void] = useState({
		name: '',
		avatarUrl: '',
	});
	useEffect(() => {
		axios
			.post<IQueryResult>(
				'https://api.github.com/graphql',
				{
					query: `query{
            viewer{
                name
                avatarUrl
            }
        }`,
				},
				{
					headers: {
						Authorization: `bearer ${credentials.GITHUB_TOKEN}`,
					},
				}
			)
			.then(res => {
				setViewer(res.data.data.viewer);
			});
	}, []);
	return (
		<div>
			<img src={viewer.avatarUrl} className="avatar" alt={viewer.name} />
			<div className="viewer">{viewer.name}</div>
			<h1>GitHub Search</h1>
		</div>
	);
};

import React from 'react';
export interface IProps {
	loading: boolean;
}
const withLoader =
	<P extends object>(Component: React.ComponentType<P>): React.FC<P & IProps> =>
	({ loading, ...props }: IProps) =>
		loading ? (
			<div className="loader-overlay">
				<div className="loader-circle-wrap">
					<div className="loader-circle" />
				</div>
			</div>
		) : (
			<Component {...props} />
		);
export default withLoader;

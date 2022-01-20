import React from 'react';
export interface IProps {
	loading: boolean;
}
const withLoader =
	<P extends object>(Component: React.ComponentType<P>): React.FC<P & IProps> =>
	({
		loading,
		...props
	}: IProps) => // TODO - return a loading spinner if loading is true otherwise return the component passed in
	{
		return null;
	};
export default withLoader;

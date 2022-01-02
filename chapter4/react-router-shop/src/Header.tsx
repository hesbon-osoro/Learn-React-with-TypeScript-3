import React, {
	FC,
	useState,
	useEffect,
	ChangeEvent,
	KeyboardEvent,
} from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import 'url-search-params-polyfill';
import logo from './logo.svg';

const Header: FC<RouteComponentProps> = props => {
	const [search, setSearch] = useState('');
	useEffect(() => {
		const searchParams = new URLSearchParams(props.location.search);
		setSearch(searchParams.get('search') || '');
	}, []);

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.currentTarget.value);
	};

	const handleSearchKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			props.history.push(`/products?search=${search}`);
		}
	};
	return (
		<header className="header">
			<div className="search-container">
				<input
					type="search"
					placeholder="search"
					value={search}
					onChange={handleSearchChange}
					onKeyDown={handleSearchKeydown}
				/>
			</div>
			<img src={logo} className="header-logo" alt="logo" />
			<h1 className="header-title">React Shop</h1>
			<nav>
				<NavLink
					to="/products"
					className="header-link"
					activeClassName="header-link-active"
				>
					Products
				</NavLink>
				<NavLink
					to="/admin"
					className="header-link"
					activeClassName="header-link-active"
				>
					Admin
				</NavLink>
			</nav>
		</header>
	);
};

export default withRouter(Header);

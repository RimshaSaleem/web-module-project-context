import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { useContext } from 'react';

// const Navigation = props => {
	const Navigation = () => {
		const cart = useContext(ShoppingCartContext);
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;

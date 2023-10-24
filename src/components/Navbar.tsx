import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Navbar: FC = () => (
	<>
		<nav>
			<div className="nav-wrapper px1">
				<NavLink to="/" className="brand-logo ">react TypeScript</NavLink>
				<ul className="right hide-on-med-and-down">
					<li><NavLink to="/">List todo</NavLink></li>
					<li><NavLink to="/about">information</NavLink></li>
				</ul>
			</div>
		</nav >
	</>

)
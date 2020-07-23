import React, {useState} from 'react';
import logo from '../images/logo.png'

import { Link, NavLink } from 'react-router-dom';


function Nav() {

	const [toggle, setToggle] =  useState(false);

	const makeToggle = () => setToggle(!toggle);

	return (
		<header>
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark mb-5">
				<Link to={'/'} onClick={() => setToggle(false)}><img id="logo" src={logo}alt="" /></Link>
				<button className={ toggle ?  "navbar-toggler" :  "navbar-toggler collapsed"}  type="button" data-toggle="collapse" data-target="#nav" aria-controls="nav"
					aria-expanded="false" aria-label="Toggle navigation" onClick={makeToggle}>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className={ toggle ? "collapse navbar-collapse animate fadeInDown show " : "collapse navbar-collapse"} id="nav">
					<ul className="navbar-nav ml-auto">
						<NavLink to={'/users'} className="nav-link" activeClassName="active" onClick={() => setToggle(false)}><li className="nav-item "><i class="fas fa-users"></i> Users</li></NavLink>
					</ul>
				</div>
			</nav>
		</header>

	)


}

export default Nav;
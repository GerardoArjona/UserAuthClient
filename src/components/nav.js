import React, {useState} from 'react';
import logo from '../images/logo.png'

import { Link, NavLink, useHistory} from 'react-router-dom';

import { isLoggedIn, getUserTok, logout } from '../services/auth'


function Nav() {

	let history = useHistory();
	const [toggle, setToggle] =  useState(false);

	const makeToggle = () => setToggle(!toggle);

	const backToHome = () =>{
		setToggle(false)
		history.push(`/`)
	}

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
						<NavLink to={'/users'} className="nav-link" activeClassName="active" onClick={() => setToggle(false)}><li className="nav-item "><i className="fas fa-users"></i> Users</li></NavLink>
						{
							isLoggedIn() ?
								<React.Fragment>
									<NavLink to={`/profile/${getUserTok()}`} className="nav-link" activeClassName="active" onClick={() => setToggle(false)}><li className="nav-item "><i className="fas fa-user"></i> Profile</li></NavLink>
									<a href="/#" className="nav-link" onClick={() => logout(backToHome)}><li className="nav-item "><i className="fas fa-user-plus"></i> Log Out</li></a>
								</React.Fragment>
								:
								<React.Fragment>
									<NavLink to={'/signin'} className="nav-link" activeClassName="active" onClick={() => setToggle(false)}><li className="nav-item "><i className="fas fa-sign-in-alt"></i> Sign In</li></NavLink>
									<NavLink to={'/signup'} className="nav-link" activeClassName="active" onClick={() => setToggle(false)}><li className="nav-item "><i className="fas fa-user-plus"></i> Sign Up</li></NavLink>
								</React.Fragment>
						}
					</ul>
				</div>
			</nav>
		</header>

	)


}

export default Nav;
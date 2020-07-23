import React, {useState} from 'react';



function Nav() {

	const [toggle, setToggle] =  useState(false);

	const makeToggle = () => setToggle(!toggle);

	return (
		<header>
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
				<button className={ toggle ?  "navbar-toggler" :  "navbar-toggler collapsed"}  type="button" data-toggle="collapse" data-target="#nav" aria-controls="nav"
					aria-expanded="false" aria-label="Toggle navigation" onClick={makeToggle}>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className={ toggle ? "collapse navbar-collapse animate fadeInDown show " : "collapse navbar-collapse"} id="nav">
					<ul className="navbar-nav ml-auto">
                        <a href="#"> prueba</a>
					</ul>


				</div>
			</nav>
		</header>

	)


}

export default Nav;
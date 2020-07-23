import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types"

import Nav from './nav';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css'
//import "./layout.css"

function Layout({ children }){

	return(
            <React.Fragment>
                <Nav />
                <main>{children}</main>
                <Footer />
            </React.Fragment>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout

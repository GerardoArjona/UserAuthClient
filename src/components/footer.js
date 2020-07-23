import React from 'react';

function Footer() {

	return (
		<footer className="section footer-classic context-dark py-3 footer" >
			<div className="container-fluid">
				<div className="row justify-content-between">
					<div id="info-footer" className="col-lg-6 col-md-6 col-sm-12 col-12">
						<h2 id="info-footer-title">UserAPI</h2>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-12">
						<div className="social-icons desktop-icons-margin">
							<a target="_blank" rel="noopener noreferrer" href="https://facebook.com/isolarmarket/"><i class="fab fa-github"></i></a>
							<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/isolarmarket"><i className="fab fa-linkedin"></i></a>
							<a target="_blank" rel="noopener noreferrer" href="https://instagram.com"><i className="fab fa-instagram"></i></a>
						</div>
					</div>
				</div>
			</div>
		</footer >

	)

}

export default Footer;
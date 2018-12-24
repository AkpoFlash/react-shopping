import React from 'react';

const Footer = (props) => {
	return (
		<footer className="footer">
			Copyright &#169; {(new Date()).getFullYear()}
		</footer>
	);
}

export default Footer;
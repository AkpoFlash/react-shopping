import React from 'react';
import styled from 'styled-components';

const Footer = (props) => {

	const Footer = styled.footer`
		background-color: var(--secendaryColor);
		grid-row: 4;
		grid-column: 2;
		width: 100%;
		text-align: center;
		line-height: 50px;
	`;

	return (
		<Footer>
			Copyright &#169; {(new Date()).getFullYear()}
		</Footer>
	);
}

export default Footer;
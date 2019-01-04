import React from 'react';
import styled from 'styled-components';

import { COLOR_GRAY } from '../../constants/styles';

const StyledFooter = styled.footer`
	background-color: ${ COLOR_GRAY };
	grid-row: 3;
	grid-column: 2;
	width: 100%;
	text-align: center;
	line-height: 50px;
`;

const Footer = React.memo((props) => {
	return (
		<StyledFooter>
			Copyright &#169; {(new Date()).getFullYear()}
		</StyledFooter>
	);
});

export default Footer;
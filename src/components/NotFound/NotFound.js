import React from 'react';
import styled from 'styled-components';

import {
	HEADER_HEIGHT,
	FOOTER_HEIGHT,
	GRID_GAP
} from '../../constants/styles';

const ErrorPage = styled.div`
	grid-column: 2;
	grid-row: 2;
	height: calc( 100vh - ${ HEADER_HEIGHT} - ${ FOOTER_HEIGHT } - 2 * ${ GRID_GAP } );
`;

const NotFound = (props) => {
	return (
		<ErrorPage>
			404 - Page not found
		</ErrorPage>
	);
};

export default NotFound;
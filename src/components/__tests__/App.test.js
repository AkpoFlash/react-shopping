import React from 'react';
import "isomorphic-fetch";

import ConnectedApp, { App } from '../App';

describe('Dumb App', () => {
	const app = shallow(<App />);

	it('check App shapshot', () => {
		expect(app).toMatchSnapshot();
	});
});
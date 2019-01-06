import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import ConnectedFilter, { Filter } from '../Filter';

describe('Dumb Filter', () => {
	const shallowWrapper = shallow(<Filter />);
	const mountWrapper = mount(<Filter />);

	it('check Filter shapshot', () => {
		expect(shallowWrapper).toMatchSnapshot();
	});

	it('Filter must be the list', () => {
		expect(mountWrapper.find('ul').exists()).toBe(true);
	});

	it('Filter contain element with "all" name', () => {
		expect(mountWrapper.find('ul li[name="all"]').exists()).toBe(true);
	});

});

// Enzyme is not supported new `memo` feature from React 16.6, without `memo` all work good

// describe('Connected Filter', () => {
// 	const mockStore = configureStore();
// 	const initialState = {
// 		filter: {
// 			filterBy: 'all',
// 			searchQuery: 'Test',
// 		},
// 		languages: {
// 			userLang: 'Rus',
// 		},
// 	};
// 	const store = mockStore(initialState);
// 	const mountWrapper = mount(<Provider store={store}><ConnectedFilter /></Provider>);

// 	it('Filter\'s prop searchQuery equalens InitialState', () => {
// 		expect(mountWrapper.find('Filter').prop('searchQuery')).toBe(initialState.filter.searchQuery);
// 	});

// 	it('Filter\'s search input must be equalens InitialState', () => {
// 		expect(mountWrapper.find('Filter input')).toHaveValue(initialState.filter.searchQuery);
// 	});

// });
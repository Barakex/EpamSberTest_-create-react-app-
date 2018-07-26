import React from 'react';
import { shallow } from 'enzyme';
import { Search } from './index';

const setup = (propOverrides) => {
    const props = {
        search: {
            data: [],
        },
    }

    return shallow(<Search {...props} />);
}

describe('search Component', () => {
    const wrapper = setup();
    const searchButtonComponent = wrapper.find('.t_searchButton');
    test('check searchButton', () => {
        expect(searchButtonComponent).toHaveLength(1);
    });
});

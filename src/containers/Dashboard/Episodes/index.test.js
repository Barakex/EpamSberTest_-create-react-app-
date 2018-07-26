import React from 'react';
import { shallow } from 'enzyme';
import { Episodes } from './index';

const setup = (propOverrides) => {
    // const props = {
    //     search: {
    //         data: [],
    //     },
    // }

    return shallow(<Search />);
}

describe('search Component', () => {
    const wrapper = setup();
    const searchButtonComponent = wrapper.find('.t_searchButton');
    test('check searchButton', () => {
        expect(searchButtonComponent).toHaveLength(1);
    });
});

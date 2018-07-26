import reducer, { initialState } from './data';
import * as actionTypes from '../constants';

describe('src -> redux -> reducers', () => {
    test('Check initialState', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    test('Check receive api data', () => {
        const dataItem = {
            id: 123,
            code: 'yoyoyo',
        };
        
        const action = {
            type: actionTypes.RECEIVE_API_DATA,
            data: [dataItem]
        };

        const expected = {
            ...initialState,
            data: [dataItem]
        };

        expect(reducer(initialState, action)).toEqual(expected);
    });
});
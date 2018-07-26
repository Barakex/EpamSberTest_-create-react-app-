import * as actions from './actions';
import * as actionTypes from './constants';

describe('src -> redux -> actions', () => {
    test('requestApiData', () => {
        const data = {};
        const expectedAction = {type: actionTypes.REQUEST_API_DATA, data};

        expect(actions.requestApiData(data)).toEqual(expectedAction);
    });
});

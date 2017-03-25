// @flow
import { combineReducers } from 'redux';
import login from '../../pages/login/state/loginReducer';

const rootReducer = combineReducers({
	login
});

export default rootReducer;

//export default (state, action) => state;

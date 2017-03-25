// @flow
import * as actionTypes from './loginActionTypes';
import type { LoginAction } from './loginActionCreators';

type LoginState = {
	isLoggedIn: boolean,
	email: string,
	uid: string
};

const initialState = {
	isLoggedIn: false,
	email: null,
	uid: null
};

const loginReducer = (state: LoginState = initialState, action: LoginAction): LoginSte => {
	switch(action.type) {
		case actionTypes.LOGIN_REQUEST :
			return {
				...state,
				email: action.email
			};
		
		case actionTypes.LOGIN_SUCCESS :
			return {
				...state,
				isLoggedIn: true,
				uid: action.uid
			};

		case actionTypes.LOGIN_FAILURE :
			return {
				...state,
				isLoggedIn: false
			};

		default:
			return state;
	}
};

export default loginReducer;
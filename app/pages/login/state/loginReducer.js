// @flow
import * as actionTypes from './loginActionTypes';
import type { LoginActionType } from './loginActionCreators';

type LoginStateType = {
	isLoggedIn: boolean,
	email: string,
	uid: string,
	token: string,
	message: string
};

const initialState = {
	isLoggedIn: false,
	email: null,
	uid: null,
	token: null,
	message: null
};

const loginReducer = (state: LoginStateType = initialState, action: LoginActionType): LoginStateType => {
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
				uid: action.uid,
				token: action.token
			};

		case actionTypes.LOGIN_FAILURE :
			return {
				...state,
				isLoggedIn: false,
				message: action.message
			};

		case actionTypes.LOGOUT_REQUEST :
			return {
				...state,
				isLoggedIn: false,
				email: null,
				uid: null,
				token: null
			};

		case actionTypes.LOGOUT_SUCCESS :
			return state;

		case actionTypes.LOGOUT_FAILURE :
			return {
				...state,
				message: action.message
			};

		default:
			return state;
	}
};

export default loginReducer;
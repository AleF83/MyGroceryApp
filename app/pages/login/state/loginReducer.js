// @flow
import * as actionTypes from './loginActionTypes';
import type { LoginActionType } from './loginActionCreators';

type LoginStateType = {
	isLoggedIn: boolean,
	email: string,
	uid: string,
	message: string
};

const initialState = {
	isLoggedIn: false,
	email: null,
	uid: null,
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
				uid: action.uid
			};

		case actionTypes.LOGIN_FAILURE :
			return {
				...state,
				isLoggedIn: false,
				message: action.message
			};

		default:
			return state;
	}
};

export default loginReducer;
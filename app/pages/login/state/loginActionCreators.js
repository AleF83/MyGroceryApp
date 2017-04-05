// @flow
import * as actionTypes from './loginActionTypes';

export type LoginStateType = {
	type: string,
	email?: strin,
	uid?: string,
	message?: string
};

export const doLogin = (email: string): LoginStateType => ({ 
	type: actionTypes.LOGIN_REQUEST, 
	email
});

export const loginSuccess = (uid: string): LoginStateType => ({ 
	type: actionTypes.LOGIN_SUCCESS,
	uid
});

export const loginFailure = (message: string): LoginStateType =>({ 
	type: actionTypes.LOGIN_FAILURE,
	message
});

export const doLogOut = (): LoginStateType => ({
	type: actionTypes.LOGOUT_REQUEST
});

export const logOutSuccess = (): LoginStateType => ({ 
	type: actionTypes.LOGOUT_SUCCESS
});

export const logOutFailure = (message: string): LoginStateType =>({ 
	type: actionTypes.LOGOUT_FAILURE,
	message
});
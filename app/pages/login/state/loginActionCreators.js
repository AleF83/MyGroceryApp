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
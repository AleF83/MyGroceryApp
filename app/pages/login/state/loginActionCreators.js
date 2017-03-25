// @flow
import * as actionTypes from './loginActionTypes';

export type LoginAction = {
	type: string,
	email: strin,
	uid: string
};

export const doLogin = (email: string): LoginAction => ({ 
	type: actionTypes.LOGIN_REQUEST, 
	email
});

export const loginSuccess = (uid: string): LoginAction => ({ 
	type: actionTypes.LOGIN_SUCCESS,
	uid
});

export const loginFailure = (): LoginAction =>({ 
	type: actionTypes.LOGIN_FAILURE 
});
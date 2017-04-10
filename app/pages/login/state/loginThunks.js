// @flow
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import * as sceneNames from '../../../infrastructure/navigation/sceneNames';
import firebaseApi from '../../../infrastructure/firebase';

import * as actions from './loginActionCreators';


export const login = (email: string, password: string): void => async (dispatch): void => {
	dispatch(actions.doLogin(email));
	try {
		const user = await firebaseApi.login(email, password);
		const token = await user.getToken();
		dispatch(actions.loginSuccess(user.uid, token));
		Actions[sceneNames.HOME_PAGE]({ type: 'replace', userUID: user.uid });
	}
	catch(error) {
		dispatch(actions.loginFailure(error.message));
	}
};

export const loginWithToken = (token: string): void => async (dispatch): void => {
	try {
		const user = await firebaseApi.loginWithToken(token);
		dispatch(actions.loginSuccess(user.uuid, token));
		Actions[sceneNames.HOME_PAGE]({ type: 'replace', userUID });
	}
	catch(error) {
		dispatch(actions.loginFailure(error.message));
	}
};

export const logOut = (): void => async (dispatch): void => {
	dispatch(actions.doLogOut());
	try {
		const result = await firebaseApi.logOut();
		if (result) {
			dispatch(actions.logOutSuccess());
			Actions[sceneNames.LOGIN_PAGE]();
		}
	}
	catch(error) {
		dispatch(actions.logOutFailure(error.message));
	}
};
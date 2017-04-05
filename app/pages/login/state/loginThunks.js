// @flow
import { Actions } from 'react-native-router-flux';

import * as sceneNames from '../../../infrastructure/navigation/sceneNames';
import firebaseApi from '../../../infrastructure/firebase';

import * as actions from './loginActionCreators';


export const login = (email: string, password: string): void => async (dispatch): void => {
	dispatch(actions.doLogin(email));
	try {
		const userUID = await firebaseApi.login(email, password);
		dispatch(actions.loginSuccess(userUID));
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
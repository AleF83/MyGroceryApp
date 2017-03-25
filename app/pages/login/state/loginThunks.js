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
		Actions[sceneNames.LIST_MANAGEMENT_PAGE]({ userUID });
	}
	catch(error) {
		console.warn('Error', error);
		dispatch(actions.loginFailure());
	}
};
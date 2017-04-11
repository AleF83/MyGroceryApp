// @flow
import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import withProps from 'recompose/withProps';
import compose from 'recompose/compose';

import * as sceneNames from '../../infrastructure/navigation/sceneNames';
import {logOut} from '../login/state/loginThunks';
import WelcomeView from './WelcomeView';

type OwnerPropsType = {

};

type PropsType = {
	isLoggedIn: boolean,
	email: string,
	navigateToHome: () => void,
	navigateToLogin: () => void,
	logOut: () => void
};

const WelcomePage = (props: PropsType): React.ComponentClass<PropsType> =>
	<WelcomeView	isLoggedIn={props.isLoggedIn} 
					email={props.email}
					navigateToHome={props.navigateToHome(props.uid)}
					navigateToLogin={props.navigateToLogin}
					logOut={props.logOut} />;

const mapStateToProps = state => ({
	isLoggedIn: state.login.isLoggedIn,
	uid: state.login.uid,
	token: state.login.token,
	email: state.login.email
});

const mapDispatchToProps = dispatch => ({
	logOut: async () => dispatch(await logOut())
});

const enhance = compose(
	connect(mapStateToProps, mapDispatchToProps),
	withProps((props: OwnerProps): Props => ({
		navigateToHome: (userUID) => () => Actions[sceneNames.HOME_PAGE]({userUID}),
		navigateToLogin: Actions[sceneNames.LOGIN_PAGE]
	}))
);

export default enhance(WelcomePage);
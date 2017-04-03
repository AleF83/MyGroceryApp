// @flow
import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import withProps from 'recompose/withProps';
import compose from 'recompose/compose';

import * as sceneNames from '../../infrastructure/navigation/sceneNames';

import WelcomeView from './WelcomeView';

type OwnerPropsType = {

};

type PropsType = {
	isLoggedIn: boolean,
	email: string,
	navigateToHome: () => void,
	navigateToLogin: () => void
};

const WelcomePage = (props: PropsType): React.ComponentClass<PropsType> =>
	<WelcomeView	isLoggedIn={props.isLoggedIn} 
					email={props.email}
					navigateToHome={props.navigateToHome(props.uid)}
					navigateToLogin={props.navigateToLogin} />;

const mapStateToProps = state => ({
	isLoggedIn: state.login.isLoggedIn,
	uid: state.login.uid,
	email: state.login.email
});

const enhance = compose(
	connect(mapStateToProps),
	withProps((props: OwnerProps): Props => ({
		navigateToHome: (userUID) => () => Actions[sceneNames.HOME_PAGE]({userUID}),
		navigateToLogin: Actions[sceneNames.LOGIN_PAGE]
	}))
);

export default enhance(WelcomePage);
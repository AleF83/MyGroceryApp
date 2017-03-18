// @flow
import React from 'react';
import { Actions } from 'react-native-router-flux';
import withProps from 'recompose/withProps';

import * as sceneNames from '../../infrastructure/navigation/sceneNames';

import WelcomeView from './WelcomeView';

type OwnerProps = {

};

type Props = {
	navigateToLogin: () => void
};

const WelcomePage = (props: Props) =>
	<WelcomeView navigateToLogin={props.navigateToLogin} />;

const enhance = withProps((props: OwnerProps): Props => ({
	navigateToLogin: Actions[sceneNames.LOGIN_PAGE]
}));

export default enhance(WelcomePage);
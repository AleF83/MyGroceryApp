// @flow
import React from 'react';
import withProps from 'recompose/withProps';

import LoginView from './LoginView';

type Props = {
	email: string,
	password: string
};

const LoginPage = (props: Props) =>
	<LoginView {...props} />;

const enhance = withProps({
	email: 'AlexanderFux83@gmail.com',
	password: '123456'
});

export default enhance(LoginPage);
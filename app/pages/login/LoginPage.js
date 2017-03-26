// @flow
import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';

import { login } from './state/loginThunks';
import LoginView from './LoginView';

type PropsType = {
	email: string,
	password: string,

	onLogin: () => void
};

const LoginPage = (props: PropsType): React.ComponentClass<PropsType> =>
	<LoginView {...props} />;

const mapDispatchToProps = (dispatch, ownerProps) => ({
	onLogin: async () => dispatch(await login(ownerProps.email, ownerProps.password))
});

const enhance = compose(
	withProps({
		email: 'AlexanderFux83@gmail.com',
		password: '123456'
	}),
	connect(null, mapDispatchToProps)
);

export default enhance(LoginPage);
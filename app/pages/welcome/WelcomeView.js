// @flow
import React from 'react';
import styled from 'styled-components/native';

type PropsType = {
	isLoggedIn: boolean,
	email: string,
	navigateToLogin: () => void
};

const WelcomeView = (props: PropsType): React.ComponentClass<PropsType> =>
	<ContainerView>
		<WelcomeMessage>Welcome!</WelcomeMessage>
		{
			props.isLoggedIn
			?
			<UserName>{props.email}</UserName>
			:
			<LoginButton	title="Login"
					 		onPress={props.navigateToLogin} />
		}
		
	</ContainerView>;

export default WelcomeView;

const ContainerView = styled.View`
	margin: 60;
	alignItems: center
`;

const WelcomeMessage = styled.Text`
	fontWeight: bold;
`;

const UserName = styled.Text`
	fontWeight: bold;
`;

const LoginButton = styled.Button`
	marginTop: 50;
`;

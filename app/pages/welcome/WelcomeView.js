// @flow
import React from 'react';
import styled from 'styled-components/native';

type PropsType = {
	isLoggedIn: boolean,
	email: string,
	navigateToHome: () => void,
	navigateToLogin: () => void
};

const WelcomeView = (props: PropsType): React.ComponentClass<PropsType> =>
	<ContainerView>
		<WelcomeMessage>Welcome!</WelcomeMessage>
		{
			props.isLoggedIn
			?
			<LoggedInView>
				<UserName>{props.email}</UserName>
				<GetStartedButton title="Get Started"
									onPress={props.navigateToHome} />
			</LoggedInView>
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

const LoggedInView = styled.View`
`;

const UserName = styled.Text`
	fontWeight: bold;
`;

const GetStartedButton = styled.Button`
`;

const LoginButton = styled.Button`
	marginTop: 50;
`;

// @flow
import React from 'react';
import styled from 'styled-components/native';

type Props = {
	navigateToLogin: () => void
};

const WelcomeView = (props: Props) =>
	<ContainerView>
		<WelcomeMessage>Welcome!</WelcomeMessage>
		<LoginButton title="Login"
					 onPress={props.navigateToLogin} />
	</ContainerView>;

export default WelcomeView;

const ContainerView = styled.View`
	margin: 40;
	alignItems: center
`;

const WelcomeMessage = styled.Text`
	fontWeight: bold;
`;

const LoginButton = styled.Button`
	marginTop: 50;
`;

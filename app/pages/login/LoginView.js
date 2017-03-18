// @flow
import React from 'react';
import styled from 'styled-components/native';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';

type Props = {
	email: string,
	password: string,
	onLogin: () => void
};

const LoginView = (props: Props) =>
	<ContainerView>
		<Title>My Grocery App</Title>
		<Email	autoCapitalize='none'
				autoCorrect={false}
				autoFocus={true}
				blurOnSubmit={false}
				keyboardType='email-address'
				placeholder="Email"
				returnKeyType='next'
				value={props.email} />
		<Password	autoCapitalize='none'
					autoCorrect={false}
					autoFocus={true}
					placeholder="Password"
					returnKeyType='done'
					secureTextEntry={true}
					value={props.password}
					onSubmitEditing={props.onLogin}/>
		<LoginButton onPress={props.onLogin}>
			<LoginButtonText>Log In</LoginButtonText>
		</LoginButton>
		<FBLogin style={{ margin: 30 }} />
	</ContainerView>;

export default LoginView;

const ContainerView = styled.View`
	margin: 60;
	alignItems: stretch
`;

const Title = styled.Text`
	fontSize: 30;
	textAlign: center;
`;

const Email = styled.TextInput`
	height: 30;

	borderWidth: 1;
	borderStyle: solid;
	borderColor: black;
	borderRadius: 3;

	padding: 5;
	margin: 3;
`;

const Password = styled.TextInput`
	height: 30;

	borderWidth: 1;
	borderStyle: solid;
	borderColor: black;
	borderRadius: 3;

	padding: 5;
	margin: 3;
`;

const LoginButton = styled.TouchableOpacity`
	backgroundColor: #2196F3;
	alignItems: center;

	borderRadius: 3;

	padding: 5;
	margin: 3;	
`

const LoginButtonText = styled.Text`
`;
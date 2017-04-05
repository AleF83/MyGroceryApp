// @flow
import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';

type PropsType = {
	email: string,
	password: string,
	message: string,
	onLogin: () => void
};

class LoginView extends Component {
	props: PropsType;

	constructor(props: PropsType) {
		super(props);

		this._focusPassword = this._focusPassword.bind(this);
	}

	render(): React.ComponentElement {
	return (
		<ContainerView>
			<Title>My Grocery App</Title>
			<Email	autoCapitalize='none'
					autoCorrect={false}
					autoFocus={true}
					blurOnSubmit={false}
					keyboardType='email-address'
					placeholder="Email"
					returnKeyType='next'
					value={this.props.email}
					onSubmitEditing={this._focusPassword} />
			<TextInput  ref="passwordTxt"
						autoCapitalize='none'
						autoCorrect={false}
						autoFocus={false}
						placeholder="Password"
						returnKeyType='done'
						secureTextEntry={true}
						value={this.props.password}
						style={PasswordStyle}
						onSubmitEditing={this.props.onLogin}/>
			<Message>{this.props.message}</Message>
			<LoginButton onPress={this.props.onLogin}>
				<LoginButtonText>Log In</LoginButtonText>
			</LoginButton>
			<FBLogin style={{ margin: 30 }} />
		</ContainerView>);
	}

	_focusPassword() {
		this.refs.passwordTxt.focus();
	}
}

const mapStateToProps = state => ({
	message: state.login.message
});

const enhance = connect(mapStateToProps);

export default enhance(LoginView);

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

const PasswordStyle = {
	height: 30,

	borderWidth: 1,
	borderStyle: 'solid',
	borderColor: 'black',
	borderRadius: 3,

	padding: 5,
	margin: 3
};
/* TODO: Check why Styled(TextInput) doesn't work with ref attribute
const Password = styled.TextInput`
	height: 30;

	borderWidth: 1;
	borderStyle: solid;
	borderColor: black;
	borderRadius: 3;

	padding: 5;
	margin: 3;
`;*/

const LoginButton = styled.TouchableOpacity`
	backgroundColor: #2196F3;
	alignItems: center;

	borderRadius: 3;

	padding: 5;
	margin: 3;	
`

const LoginButtonText = styled.Text`
`;

const Message = styled.Text`
	color: red;
`;
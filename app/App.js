// @flow
import React from 'react';
import styled from 'styled-components/native';

const App = () =>
	<HelloWorld>My Grocery App</HelloWorld>;

export default App;

const HelloWorld = styled.Text`
	fontSize: 20;
	fontWeight: bold;
	margin: 30;
`;
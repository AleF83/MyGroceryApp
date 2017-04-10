import React from 'react';
import styled from 'styled-components/native';

type PropsType = {
	name: string
};

const ProductListSelectionHeader = (props: PropsType): React.ComponentClass<PropsType> =>
	<ContainerView>
		<Name>{props.name}</Name>
	</ContainerView>;

export default ProductListSelectionHeader;

const ContainerView = styled.View`
	flexDirection: row;
	justifyContent: center;

	margin: 5;

	borderWidth: 1;
	borderStyle: solid;
	borderColor: black;
`;

const Name = styled.Text`
	fontSize: 14;

	
`;
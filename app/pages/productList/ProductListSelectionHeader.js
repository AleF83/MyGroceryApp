import React from 'react';
import styled from 'styled-components/native';

type PropsType = {
	name: string
};

const ProductListSelectionHeader = (props: PropsType): React.ComponentClass<PropsType> =>
	<Name>{props.name}</Name>;

export default ProductListSelectionHeader;

const Name = styled.Text`
`;
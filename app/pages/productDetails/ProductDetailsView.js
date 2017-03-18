// @flow
import React from 'react';
import styled from 'styled-components/native';

type Props = {
	product: {
		name: string
	}
};

const ProductDetailsView = (props: Props) =>
	<ProductName>{props.product.name}</ProductName>

export default ProductDetailsView;

const ProductName = styled.Text`
	margin: 20;
`;
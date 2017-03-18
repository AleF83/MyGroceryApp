// @flow
import React from 'react';
import styled from 'styled-components/native';

import ProductListItemView from './ProductListItemView';

type Props = {
	data: any,
	products: Array<*>
};

const ProductListView = (props: Props) =>
	<ContainerView>
		<Title>{props.data.name}</Title>
		{
			props.products.map(product =>
				<ProductListItemView key={product.key} product={product} />)
		}
	</ContainerView>;

export default ProductListView;

const ContainerView = styled.View`
	margin: 20;
`;

const Title = styled.Text`
`;
// @flow
import React from 'react';
import styled from 'styled-components/native';

import * as model from '../../model/Types';

import ProductListItemView from './ProductListItemView';

type PropsType = {
	data: model.ProductListType,
	products: Array<model.ProductType>
};

const ProductListView = (props: PropsType): React.ComponentClass<PropsType> =>
	<ContainerView>
		<Title>{props.data.name}</Title>
		{
			props.products.map(
				(product: model.ProductType): React.ComponentClass<*> =>
					<ProductListItemView key={product.key} product={product} />)
		}
	</ContainerView>;

export default ProductListView;

const ContainerView = styled.View`
	margin: 60;
`;

const Title = styled.Text`
`;
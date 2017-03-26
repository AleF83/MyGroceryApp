// @flow
import React from 'react';
import styled from 'styled-components/native';

import * as model from '../../model/Types';

type PropsType = {
	product: model.ProductType
};

const ProductDetailsView = (props: PropsType): React.ComponentClass<PropsType> =>
	<ProductName>{props.product.name}</ProductName>

export default ProductDetailsView;

const ProductName = styled.Text`
	margin: 80;
`;
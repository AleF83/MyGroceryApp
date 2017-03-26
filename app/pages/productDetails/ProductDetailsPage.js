// @flow
import React from 'react';
import mapProps from 'recompose/mapProps';

import * as model from '../../model/Types';

import ProductDetailsView from './ProductDetailsView';

type PropsType = {
	product: model.ProductType
};

const ProductDetailsPage = (props: PropsType): React.ComponentClass<PropsType> =>
	<ProductDetailsView product={props.product} />;

export default ProductDetailsPage;
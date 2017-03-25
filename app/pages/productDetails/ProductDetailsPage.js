// @flow
import React from 'react';
import mapProps from 'recompose/mapProps';

import ProductDetailsView from './ProductDetailsView';

type Props = {
	product: {
		name: string
	}
};

const ProductDetailsPage = (props: Props) =>
	<ProductDetailsView product={props.product} />;

export default ProductDetailsPage;
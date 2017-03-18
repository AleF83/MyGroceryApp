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

const propsMapper = (originalProps: OriginalProps): Props => ({
	product: originalProps.payload.product
});

const enhance = mapProps(propsMapper);

export default enhance(ProductDetailsPage);
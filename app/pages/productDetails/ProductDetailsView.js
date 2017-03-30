// @flow
import React from 'react';
import styled from 'styled-components/native';

import * as model from '../../model/Types';

type PropsType = {
	product: model.ProductType
};

const ProductDetailsView = (props: PropsType): React.ComponentClass<PropsType> =>
	<ContainerView>
		<Name>{props.product.name}</Name>
		<Category>{props.product.category}</Category>
		<Remark>{props.product.remark}</Remark>
	</ContainerView>;
	

export default ProductDetailsView;

const ContainerView = styled.View`
	marginTop: 80;
`;

const Name = styled.Text`
	fontSize: 20;
`;

const Category = style.Text`
`;

const Remark = styled.Text`
	fontSize: 15;
`;
// @flow
import React from 'react';
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux';
import withProps from 'recompose/withProps';

import * as sceneNames from '../../infrastructure/navigation/sceneNames';

import * as model from '../../model/Types';


type PropsType = {
	product: model.ProductType,
	navigateToProductDetails: (product: model.ProductType) => () => void
};

const ProductListItemView = (props: PropsType): React.ComponentClass<PropsType> =>
	<ContainerView>
		<TouchContainer onPress={props.navigateToProductDetails(props.product)}>
			<ProductName>{props.product.name}</ProductName>
		</TouchContainer>
	</ContainerView>;

const enhance = withProps((props: OwnerProps): Props => ({
	navigateToProductDetails: (product: model.ProductType) => () => Actions[sceneNames.PRODUCT_DETAILS_PAGE]({ product })
}));

export default enhance(ProductListItemView);

const ContainerView = styled.View`
	flexDirection: row;
`;

const TouchContainer = styled.TouchableOpacity`
	flexDirection: row;
`
const ProductName = styled.Text`
`;
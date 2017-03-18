// @flow
import React from 'react';
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux';
import withProps from 'recompose/withProps';

import * as sceneNames from '../../infrastructure/navigation/sceneNames';


type Props = {
	product: {
		name: string
	},
	navigateToProductDetails: (product: any) => () => void
}

const ProductListItemView = (props: Props) =>
	<ContainerView>
		<TouchContainer onPress={props.navigateToProductDetails(props.product)}>
			<ProductName>{props.product.name}</ProductName>
		</TouchContainer>
	</ContainerView>;

const enhance = withProps((props: OwnerProps): Props => ({
	navigateToProductDetails: (product: any) => Actions[sceneNames.PRODUCT_DETAILS_PAGE](product)
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
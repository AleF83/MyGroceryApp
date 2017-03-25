// @flow
import React from 'react';
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux';
import withProps from 'recompose/withProps';

import * as sceneNames from '../../infrastructure/navigation/sceneNames';

type OwnerProps = {
	list: {
		name: string
	}
};

type Props = {
	list: {
		name: string
	},
	navigateToProductList: (list: any) => () => void
};

const ProductListListItemView = (props: Props) =>
	<ContainerView>
		<TouchContainer onPress={props.navigateToProductList(props.list)}>
			<ListName>{props.list.name}</ListName>
		</TouchContainer>
	</ContainerView>;


const enhance = withProps((props: OwnerProps): Props => ({
	navigateToProductList: (list: any) => Actions[sceneNames.PRODUCT_LIST_PAGE]({ list })
}));

export default enhance(ProductListListItemView);

const ContainerView = styled.View`
	flexDirection: row;
`;

const TouchContainer = styled.TouchableOpacity`
	flexDirection: row;
`

const ListName = styled.Text`
`;
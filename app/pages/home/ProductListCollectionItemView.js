// @flow
import React from 'react';
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux';
import withProps from 'recompose/withProps';

import * as sceneNames from '../../infrastructure/navigation/sceneNames';
import * as model from '../../model/Types';

type PropsType = {
	list: model.ProductListType,
	navigateToProductList: (list: model.ProductListType) => () => void
};

const ProductListCollectionItemView = (props: PropsType): React.ComponentClass<PropsType> =>
	<ContainerView>
		<TouchContainer onPress={props.navigateToProductList(props.list)}>
			<ListName>{props.list.name}</ListName>
		</TouchContainer>
	</ContainerView>;

const enhance = withProps((props): Props => ({
	navigateToProductList: (list: model.ProductListType) => () => Actions[sceneNames.PRODUCT_LIST_PAGE]({ list })
}));

export default enhance(ProductListCollectionItemView);

const ContainerView = styled.View`
	flexDirection: row;
`;

const TouchContainer = styled.TouchableOpacity`
	flexDirection: row;
`;

const ListName = styled.Text`
`;
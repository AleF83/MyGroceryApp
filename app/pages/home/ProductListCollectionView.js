// @flow
import React from 'react';
import { ListView } from 'react-native';
import withProps from 'recompose/withProps';
import styled from 'styled-components/native';

import * as model from '../../model/Types';

import ProductListCollectionItemView from './ProductListCollectionItemView';

type PropsType = {
	lists: Array<model.ProductListType>
};

const ProductListCollectionView = (props: PropsType): React.ComponentClass<PropsType> =>
	<ContainerView>
		<Header>My Lists</Header>
		<ProductLists dataSource={props.dataSource}
						renderRow={renderRow}
						enableEmptySections={true} />
	</ContainerView>;

const enhance = withProps(props => ({
	dataSource: ds.cloneWithRows(props.lists)
}));

export default enhance(ProductListCollectionView);

const renderRow = (list: model.ProductListType): React.ComponentClass<*> => 
	<ProductListCollectionItemView key={list.key} list={list} />;

const ds = new ListView.DataSource({
	rowHasChanged: (r1: model.ProductListType, r2: model.ProductListType): boolean => r1 !== r2,
});

const ContainerView = styled.View`
	marginTop: 80;
`;

const Header = styled.Text`
	fontWeight: bold;
`;

const ProductLists = styled.ListView`
	marginLeft: 5;
`;
// @flow
import React from 'react';
import { ListView } from 'react-native';
import styled from 'styled-components/native';

import * as model from '../../model/Types';

import ProductListListItemView from './ProductListListItemView';

type PropsType = {
	lists: Array<model.ProductListType>
};

const ListManagementView = (props: PropsType): React.ComponentClass<PropsType> => 
	<ContainerView>
		<Header>My Lists</Header>
		<ProductLists dataSource={ds.cloneWithRows(props.data)}
						renderRow={renderRow} />
	</ContainerView>;

export default ListManagementView;

const renderRow = (list: model.ProductListType): React.ComponentClass<*> =>
	<ProductListListItemView key={list.key} list={list} />;

const ds = new ListView.DataSource({
	rowHasChanged: (r1: model.ProductListType, r2: model.ProductListType): boolean => r1 !== r2,
});

const ContainerView = styled.View`
	margin: 60;
`;

const Header = styled.Text`
`;

const ProductLists = styled.ListView`
`;
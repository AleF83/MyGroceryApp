// @flow
import React from 'react';
import { ListView } from 'react-native';
import withProps from 'recompose/withProps';
import styled from 'styled-components/native';

import * as model from '../../model/Types';

import ProductListSelectionHeader from './ProductListSelectionHeader';
import ProductListItemView from './ProductListItemView';

type PropsType = {
	list: model.ProductListType,
	products: any
};

const ProductListView = (props: PropsType): React.ComponentClass<PropsType> =>
	<ContainerView>
		<Title>{props.list.name}</Title>
		<ProductList dataSource={props.dataSource}
			renderRow={renderRow}
			renderSectionHeader={renderSectionHeader} />
	</ContainerView>;

const enhance = withProps(props => ({
	dataSource: ds.cloneWithRowsAndSections(props.products)
}));

export default enhance(ProductListView);

const ds = new ListView.DataSource({
	rowHasChanged: (r1: model.ProductType, r2: model.ProductType): boolean => r1 !== r2,
	sectionHeaderHasChanged: (s1: string, s2: string): boolean => s1 != s2
});

const renderSectionHeader = (sectionData: string, category: string): React.ComponentClass<*> => 
	<ProductListSelectionHeader name={category} />;

const renderRow = (product: model.ProductType): React.ComponentClass<*> =>
	<ProductListItemView key={product.key} product={product} />;

const ContainerView = styled.View`
	marginTop: 60;
`;

const ProductList = styled.ListView`
`;

const Title = styled.Text`
`;
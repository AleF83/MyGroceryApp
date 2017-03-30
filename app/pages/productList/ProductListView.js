// @flow
import React from 'react';
import { ListView } from 'react-native';
import styled from 'styled-components/native';

import * as model from '../../model/Types';

import ProductListItemView from './ProductListItemView';

type PropsType = {
	data: model.ProductListType,
	products: Array<model.ProductType>
};

const ProductListView = (props: PropsType): React.ComponentClass<PropsType> =>
	<ContainerView>
		<Title>{props.data.name}</Title>
		{
			props.products.map(
				(product: model.ProductType): React.ComponentClass<*> =>
					<ProductListItemView key={product.key} product={product} />)
		}
		<ProductList dataSource={ds.cloneWithRowsAndSections(props.data)}
			renderRow={renderRow}
			renderSectionHeader={renderSectionHeader} />
	</ContainerView>;

export default ProductListView;

const ds = new ListView.DataSource({
	rowHasChanged: (r1: model.ProductType, r2: model.ProductType): boolean => r1 !== r2,
	sectionHeaderHasChanged: (s1: string, s2: string): boolean => s1 != s2
});

const renderSectionHeader = (sectionData: string, category: string): React.ComponentClass<*> => 
	<ProductListSelectionHeader data={category} />;

const renderRow = (product: model.ProductType): React.ComponentClass<*> =>
			<ProductListItemView key={product.key} product={product} />;

const ContainerView = styled.View`
	marginTop: 60;
`;

const ProductList = styled.ListView`
`;

const Title = styled.Text`
`;
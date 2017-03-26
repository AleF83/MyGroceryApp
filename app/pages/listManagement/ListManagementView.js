// @flow
import React from 'react';
import styled from 'styled-components/native';

import * as model from '../../model/Types';

import ProductListListItemView from './ProductListListItemView';

type PropsType = {
	lists: Array<model.ProductListType>
};

const ListManagementView = (props: PropsType): React.ComponentClass<PropsType> => 
	<ContainerView>
		<Header>My Lists</Header>
		{
			props.lists.map(
				(list: model.ProductListType): React.ComponentClass<*> =>
					<ProductListListItemView key={list.key} list={list} />)
		}
	</ContainerView>;

export default ListManagementView;

const ContainerView = styled.View`
	margin: 60;
`;

const Header = styled.Text`
`;
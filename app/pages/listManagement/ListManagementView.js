// @flow
import React from 'react';
import styled from 'styled-components/native';

import ProductListListItemView from './ProductListListItemView';

type Props = {
	lists: Array<*>
};

const ListManagementView = (props: Props) => 
	<ContainerView>
		<Header>My Lists</Header>
		{
			props.lists.map(list =>
				<ProductListListItemView key={list.key} list={list} />)
		}
	</ContainerView>;

export default ListManagementView;

const ContainerView = styled.View`
	margin: 60;
`;

const Header = styled.Text`
`;
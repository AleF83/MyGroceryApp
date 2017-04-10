// @flow
import React from 'react';
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux';
import withProps from 'recompose/withProps';

import * as sceneNames from '../../infrastructure/navigation/sceneNames';

import * as model from '../../model/Types';

import CheckedCheckboxSvg from '../../svgs/CheckedCheckboxSvg';
import UncheckedCheckboxSvg from '../../svgs/UncheckedCheckboxSvg';

const CheckboxSize: number = 36;

type PropsType = {
	product: model.ProductType,
	navigateToProductDetails: (product: model.ProductType) => () => void
};

const ProductListItemView = (props: PropsType): React.ComponentClass<PropsType> =>
	<ContainerView>
		<Checkbox onPress={() => {}}>
			{
				props.product.isInCart
				?
				<CheckedCheckboxSvg width={CheckboxSize} height={CheckboxSize} />
				:
				<UncheckedCheckboxSvg width={CheckboxSize} height={CheckboxSize} />
			}
		</Checkbox>
		<TouchContainer onPress={props.navigateToProductDetails(props.product)}>
			<FirstRow>
				<Name>{props.product.name}</Name>
				<Quantity>{props.product.quantity}</Quantity>
				<QuantityUnit>{props.product.quantityUnit}</QuantityUnit>
			</FirstRow>
			<Remark>{props.product.remark}</Remark>
		</TouchContainer>
	</ContainerView>;

const enhance = withProps((props: OwnerProps): Props => ({
	navigateToProductDetails: (product: model.ProductType) => () => Actions[sceneNames.PRODUCT_DETAILS_PAGE]({ product })
}));

export default enhance(ProductListItemView);

const ContainerView = styled.View`
	flexDirection: row;
	marginLeft: 10;
	marginRight: 10;
`;

const Checkbox = styled.TouchableOpacity`
`;

const TouchContainer = styled.TouchableOpacity`
	flexDirection: column;

	marginTop: 3;
`;

const FirstRow = styled.View`
	flexDirection: row;
`;

const Name = styled.Text`
	fontSize: 16;
	fontWeight: bold;
	marginLeft: 4;
`;

const Quantity = styled.Text`
	marginLeft: 2;
`;

const QuantityUnit = styled.Text`
	marginLeft: 2;
`;

const Remark = styled.Text`
	fontStyle: italic;
	margin: 2;
`;
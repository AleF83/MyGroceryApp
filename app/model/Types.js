// @flow
type QuantityUnitType = 
	'unit' |
	'gr' |
	'kg' |
	'liter';

export type ProductType = {
	key: string,
	name: string,
	category: string,
	quantity: number,
	quantityUnit: QuantityUnitType,
	remark: string,
	isInCart: boolean
};

export type ProductListType = {
	key: string,
	name: string,
	updateDate: Date
};
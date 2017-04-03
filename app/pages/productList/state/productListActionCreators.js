// @flow
import * as actionTypes from './productListActionTypes';

export const updateProducts = () => ({ type: actionTypes.PRODUCT_LIST_UPDATE_PRODUCTS });
export const updateProductListPros = () => ({ type: actionTypes.PRODUCT_LIST_UPDATE_PROPS });

export const createProductList = () => ({ type: actionTypes.PRODUCT_LIST_CREATE });
export const deleteProductList = () => ({ type: actionTypes.PRODUCT_LIST_DELETE });

export const addPermission = () => ({ type: actionTypes.PRODUCT_LIST_ADD_PERMISSION });
export const revokePermission = () => ({ type: actionTypes.PRODUCT_LIST_REVOKE_PERMISSION });

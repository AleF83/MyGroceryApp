// @flow
import React, { Component } from 'react';

import firebase from 'firebase';
import firebaseApi from '../../infrastructure/firebase';

import * as model from '../../model/Types';

import ProductListView from './ProductListView';

type PropsType = {
	list: model.ProductListType
};

type StateType = {
	products: any
};

class  ProductListPage extends Component {
	props: PropsType;
	state: StateType;

	products: any;
	listProductsRef: firebase.database.Reference;
	
	constructor(props: PropsType) {
		super(props);

		this.products = {};

		this.state = {
			products: {}
		};

		this._listProductsChildAdded = this._listProductsChildAdded.bind(this);
		this._listProductsChildRemoved = this._listProductsChildRemoved.bind(this);
		this._listProductsChildChanged = this._listProductsChildChanged.bind(this);
	}

	componentDidMount() {
		const listRef: firebase.database.Reference = firebaseApi.listRef(this.props.list.key);

		this.listProductsRef = listRef.child('products');
		this.listProductsRef.on('child_added', this._listProductsChildAdded);
		this.listProductsRef.on('child_removed', this._listProductsChildRemoved);
		this.listProductsRef.on('child_changed', this._listProductsChildChanged);
	}

	componentWillUnmount() {
		this.listProductsRef.off('child_added', this._listProductsChildAdded);
		this.listProductsRef.off('child_removed', this._listProductsChildRemoved);
		this.listProductsRef.off('child_changed', this._listProductsChildChanged);
	}

	render(): void {
		return <ProductListView list={this.props.list}
								products={this.state.products} />;
	}

	_listProductsChildAdded(snap) {
		firebaseApi.productRef(snap.key)
					.once('value')
					.then(data => ({...data.val(), key: snap.key}))
					.then((product: model.ProductType) => {
						if(!this.products.hasOwnProperty(product.category)) {
							this.products[product.category] = [];
						}
						this.products[product.category].push(product);
						this.setState({products: this.products}); 
					});
	}

	_listProductsChildRemoved(snap) {

	}
	
	_listProductsChildChanged(snap){

	}
}

export default ProductListPage;

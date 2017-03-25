// @flow
import React, { Component } from 'react';

import firebase from 'firebase';
import firebaseApi from '../../infrastructure/firebase';

import ProductListView from './ProductListView';

type Props = {
	list: any
};

type State = {
	products: Array<*>
}

class  ProductListPage extends Component {
	props: Props;
	state: State;

	products: Array<*>;
	
	constructor(props: Props) {
		super(props);

		this.products = [];

		this.state = {
			products: []
		};

		this._listProductsChildAdded = this._listProductsChildAdded.bind(this);
		this._listProductsChildRemoved = this._listProductsChildRemoved.bind(this);
		this._listProductsChildChanged = this._listProductsChildChanged.bind(this);
	}

	componentDidMount() {
		const listRef: firebase.database.Reference = firebaseApi.listRef(this.props.list.key);

		const listProductsRef: firebase.database.Reference = listRef.child('products');
		listProductsRef.on('child_added', this._listProductsChildAdded);
		listProductsRef.on('child_removed', this._listProductsChildRemoved);
		listProductsRef.on('child_changed', this._listProductsChildChanged);
	}

	render() {
		return <ProductListView data={this.props.list}
								products={this.state.products} />;
	}

	_listProductsChildAdded(snap) {
		firebaseApi.productRef(snap.key)
					.once('value')
					.then(data => ({...data.val(), key: snap.key}))
					.then(product => { this.products.push(product); this.setState({products: this.products}); });
	}

	_listProductsChildRemoved(snap) {

	}
	
	_listProductsChildChanged(snap){

	}
}

export default ProductListPage;

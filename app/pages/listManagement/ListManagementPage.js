// @flow
import React, { Component } from 'react';

import firebase from 'firebase';
import firebaseApi from '../../infrastructure/firebase';

import * as model from '../../model/Types';

import ListManagementView from './ListManagementView';

type PropsType = {
	userUID: string
};

type StateType = {
	lists: Array<model.ProductListType>
};

class ListManagementPage extends Component {
	props: PropsType;
	state: StateType;

	lists: Array<model.ProductListType>;
	userListsRef: firebase.database.Reference;

	constructor(props: PropsType) {
		super(props);
		this.lists = [];

		this.state = {
			lists: []
		};

		this._childAdded = this._childAdded.bind(this);
	}

	componentDidMount() {
		this.userListsRef = firebaseApi.userRef(this.props.userUID).child('lists');
		this.userListsRef.on('child_added', this._childAdded);
		this.userListsRef.on('child_removed', this._childRemoved);
	}

	componentWillUnmount() {
		this.userListsRef.off('child_added', this._childAdded);
		this.userListsRef.off('child_removed', this._childRemoved);
	}

	render(): void {
		return <ListManagementView lists={this.state.lists} />;
	}

	_childAdded(snap) {
		firebaseApi.listRef(snap.key)
					.once('value')
					.then(data => ({...data.val(), key: snap.key}))
					.then((list: model.ProductListType) => { this.lists.push(list); this.setState({lists: this.lists}); });
	}

	_childRemoved(snap) {

	}
}

export default ListManagementPage;
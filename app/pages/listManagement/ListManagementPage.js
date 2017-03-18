// @flow
import React, { Component } from 'react';
import mapProps from 'recompose/mapProps';

import firebase from 'firebase';
import firebaseApi from '../../infrastructure/firebase';

import ListManagementView from './ListManagementView';

type OriginalProps = {
	payload: {
		userUID: string
	}
}

type Props = {
	userUID: string
};

type State = {
	lists: Array<any>
};

class ListManagementPage extends Component {
	props: Props;
	state: State;

	lists: Array<string>;

	constructor(props: Props) {
		super(props);
		this.lists = [];

		this.state = {
			lists: []
		};

		this._childAdded = this._childAdded.bind(this);
	}

	componentDidMount() {
		const userListsRef: firebase.database.Reference = firebaseApi.userRef(this.props.userUID).child('lists');
		userListsRef.on('child_added', this._childAdded);
		userListsRef.on('child_removed', this._childRemoved);
	}

	render() {
		return <ListManagementView lists={this.state.lists} />;
	}

	_childAdded(snap) {
		firebaseApi.listRef(snap.key)
					.once('value')
					.then(data => ({...data.val(), key: snap.key}))
					.then(list => { this.lists.push(list); this.setState({lists: this.lists}); });
	}

	_childRemoved(snap) {

	}
}

const propsMapper = (originalProps: OriginalProps): Props => ({
	userUID: originalProps.payload.userUID
});

const enhance = mapProps(propsMapper);

export default enhance(ListManagementPage);
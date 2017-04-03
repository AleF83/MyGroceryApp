// @flow
import firebase from 'firebase';

import type { FirebaseConfig } from './firebaseConfig';
import config from './firebaseConfig';

type FirebaseApiType = {

};

let app;
let user;

const firebaseApi: FirebaseApiType = {
	init: () => {
		app = firebase.initializeApp(config);
	},
	login: async (email: string, password: string): string => {
		user = await firebase.auth().signInWithEmailAndPassword(email, password);
		return user.uid;
	},

	userRef: (userUID: string): firebase.database.Reference => 
		app.database().ref('users').child(userUID),

	listRef: (listUID: string): firebase.database.Reference => 
		app.database().ref('lists').child(listUID),

	productRef: (productUID: string): firebase.database.Reference => 
		app.database().ref('products').child(productUID)
};

export default firebaseApi;
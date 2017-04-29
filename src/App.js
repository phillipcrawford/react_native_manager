import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router'

class App extends Component {

	componentWillMount(){
	  var config = {
    	apiKey: 'AIzaSyAXHRZNdh5z9qBanMU3wNIMQ93-GGyclrU',
  	  authDomain: 'manager-532a1.firebaseapp.com',
	    databaseURL: 'https://manager-532a1.firebaseio.com',
    	projectId: 'manager-532a1',
  	 	storageBucket: 'manager-532a1.appspot.com',
    	messagingSenderId: '998828393119'
  	};
  	firebase.initializeApp(config);		
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
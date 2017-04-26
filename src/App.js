import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>
						Hello!
					</Text>
				</View>
			</Provider>
		);
	}
}

export default App;
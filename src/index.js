import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import store from './redux/redux-store';
// import {addPost, updateNewPostText, sendMessage, subscribe} from './redux/state';
import {Provider} from 'react-redux';

let reRenderEntireTree = (state) => {
	ReactDOM.render(
	  <BrowserRouter>
	  	<Provider store={store}>
	    	<App />
	    </Provider>
	  </BrowserRouter>,
	  document.getElementById('root')
	);
}

reRenderEntireTree (store.getState());

store.subscribe (()=> {
	let state = store.getState();
	reRenderEntireTree(state);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// state={state} dispatch={store.dispatch.bind(store)} 

// state={state} dispatch={store.dispatch.bind(store)}
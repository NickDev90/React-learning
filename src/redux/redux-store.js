import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer.js';
import friendsReducer from './friends-reducer.js';
import authReducer from './auth-reducer.js';
import appReducer from './app-reducer.js';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	friendsPage: friendsReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer
});

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
 ));

window.store = store;
// window.this = this;

export default store;
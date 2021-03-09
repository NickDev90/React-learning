import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer.js';
import friendsReducer from './friends-reducer.js';
import authReducer from './auth-reducer.js';
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	friendsPage: friendsReducer,
	auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;

export default store;
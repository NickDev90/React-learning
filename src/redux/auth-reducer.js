import {authAPI} from '../API/api.js';
import {Redirect} from 'react-router-dom';
import {stopSubmit} from 'redux-form';


const SET_USER_DATA = 'ADD-SET_USER_DATA';


let initialState = {
		userId: null,
      	email: null,
      	login: null,
      	isAuthed: false
    }

const authReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case SET_USER_DATA: 
			return {
				...state,
				...action.payload,
				// isAuthed: true
			}

		default:
			return state;
	}
}

export const setAuthUserData = (userId, email, login, isAuthed) => ( {type: SET_USER_DATA, payload: {userId, email, login, isAuthed}} );

export const getAuthUserData = () => async (dispatch) => { //this is Thunk creator
	let response = await authAPI.getMe(); 
		
	if (response.data.resultCode === 0) {
		let {id, login, email} = response.data.data;
			dispatch(setAuthUserData(id, email, login, true));
		}
}


export const loginThunk = (email, password, rememberMe) => async (dispatch) => { //this is Thunk creator
	

	let response = await authAPI.logIn(email, password, rememberMe, true);
	
	console.log(response.data);
	if (response.data.resultCode === 0) {
		dispatch(getAuthUserData());
	}else {
		let errorMessage = response.data.messages;
		dispatch(stopSubmit('login', {_error : errorMessage}));
	}
}


export const logoutThunk = () => async (dispatch) => { //this is Thunk creator
	let response = await authAPI.logOut();
	
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
}




export default authReducer;
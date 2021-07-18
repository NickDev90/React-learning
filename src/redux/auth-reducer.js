import {authAPI, securityAPI} from '../API/api.js';
import {Redirect} from 'react-router-dom';
import {stopSubmit} from 'redux-form';


const SET_USER_DATA = 'ADD-SET_USER_DATA';
const SET_CAPTCHA_URL_SUCCESS = 'SET_CAPTCHA_URL_SUCCESS';



let initialState = {
		userId: null,
      	email: null,
      	login: null,
      	isAuthed: false, 
      	captchaUrl: null // if null, then captcha is not required
    }

const authReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case SET_USER_DATA: 
			return {
				...state,
				...action.payload,
				// isAuthed: true
			}

		case SET_CAPTCHA_URL_SUCCESS: 
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

export const setCaptchaUrl = (captchaUrl) => ( {type: SET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}} );

export const getAuthUserData = () => async (dispatch) => { //this is Thunk creator
	let response = await authAPI.getMe(); 
		
	if (response.data.resultCode === 0) {
		let {id, login, email} = response.data.data;
			dispatch(setAuthUserData(id, email, login, true));
		}
}


export const loginThunk = (email, password, rememberMe, captcha) => async (dispatch) => { //this is Thunk creator
	

	let response = await authAPI.logIn(email, password, rememberMe, captcha);
	
	console.log(response.data);
	if (response.data.resultCode === 0) {
		dispatch(getAuthUserData());
	}else { 
		if (response.data.resultCode === 10) {
			dispatch(getCaptcha());
		}
		let errorMessage = response.data.messages;
		dispatch(stopSubmit('login', {_error : errorMessage}));
	}
}

export const getCaptcha = () => async (dispatch) => { //this is Thunk creator
	const response = await securityAPI.getCaptchaUrl();
	const captchaUrl = response.data.url;
	dispatch(setCaptchaUrl(captchaUrl));
}


export const logoutThunk = () => async (dispatch) => { //this is Thunk creator
	let response = await authAPI.logOut();
	
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
		dispatch(setCaptchaUrl(null));
	}
}




export default authReducer;
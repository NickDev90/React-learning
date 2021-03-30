import {authAPI} from '../API/api.js'

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
				...action.data,
				isAuthed: true
			}

		default:
			return state;
	}
}

export const setAuthUserData = (userId, email, login) => ( {type: SET_USER_DATA, data: {userId, email, login}} );

export const getAuthUserData = () => (dispatch) => { //this is Thunk creator
	authAPI.getMe()
		.then(response => {
				if (response.data.resultCode === 0) {
					let {id, login, email} = response.data.data;
					dispatch(setAuthUserData(id, email, login));
				}
			})
	}



export default authReducer;
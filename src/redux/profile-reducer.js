import {friendsAPI, profileAPI} from '../API/api.js'


const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
		posts : [
			  {id: 1, message: 'Hello, how are you?', likesCount: 10},
			  {id: 2, message: "It's my first post", likesCount: 2},
			  {id: 3, message: "I'm trying React", likesCount: 23},
			  {id: 4, message: "I know something", likesCount: 12},
			  {id: 5, message: "Let's practice in React!", likesCount: 55}
		],
		profile: null,
		status: ""
}

const profileReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case ADD_POST: 
			let newPost = {
				id : 6,
				message : action.newPostTextForm,
				likesCount : 0};

			return {
				...state,
				posts: [...state.posts, newPost],
				// newPostText: ""
			}

		// case UPDATE_NEW_POST_TEXT:
		// 	return {
		// 		...state,
		// 		newPostText: action.newText
		// 	}

		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}

		case SET_USER_STATUS:
			return {
				...state,
				status: action.status
			}

		case SAVE_PHOTO_SUCCESS:
			return {
				...state,
				profile: {...state.profile, photos: action.photos } //here may be a problem!!!
			}

		default:
			return state;
	}
}

export const addPostActionCreator = (newPostTextForm) => ( {type: ADD_POST, newPostTextForm} );

// export const updateNewPostTextActionCreator = (textChange) => 
// 	( { type: UPDATE_NEW_POST_TEXT,
//     	newText: textChange } );

export const setUserProfile = (profile) => ( {type: SET_USER_PROFILE, profile} );

export const savePhotoSuccess = (photos) => ( {type: SAVE_PHOTO_SUCCESS, photos} );

export const getUserProfile = (userId) => async (dispatch) => {
	let response = await friendsAPI.getProfile(userId);
	dispatch(setUserProfile(response.data));
}

export const setUserStatus = (status) => ( {type: SET_USER_STATUS, status} );

export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId);
	dispatch(setUserStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => { //this is a Thunk
	let response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setUserStatus(status));
	}
}

export const savePhoto = (file) => async (dispatch) => {
	let response = await profileAPI.savePhoto(file)
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
	}
}

export default profileReducer;
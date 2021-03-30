import {friendsAPI} from '../API/api.js'


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
			posts : [
			  {id: 1, message: 'Hello, how are you?', likesCount: 10},
			  {id: 2, message: "It's my first post", likesCount: 2},
			  {id: 3, message: "I'm trying React", likesCount: 23},
			  {id: 4, message: "I know something", likesCount: 12},
			  {id: 5, message: "Let's practice in React!", likesCount: 55}
			],
			newPostText : "hello React ho ho ho" },
			profile: null

const profileReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case ADD_POST: 
			let newPost = {
				id : 6,
				message : state.newPostText,
				likesCount : 0};

			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ""
			}

		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			}

		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}

		default:
			return state;
	}
}

export const addPostActionCreator = () => ( {type: ADD_POST} );

export const updateNewPostTextActionCreator = (textChange) => 
	( { type: UPDATE_NEW_POST_TEXT,
    	newText: textChange } );

export const setUserProfile = (profile) => ( {type: SET_USER_PROFILE, profile} );

export const getUserProfile = (userId) => (dispatch) => {
	friendsAPI.getProfile(userId).then(response => {
		dispatch(setUserProfile(response.data));
	});
};

export default profileReducer;
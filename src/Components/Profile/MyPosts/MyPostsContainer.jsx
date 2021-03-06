import React from 'react';

import MyPosts from './MyPosts.jsx';
import {addPostActionCreator } from './../../../redux/profile-reducer.js';
import {connect} from 'react-redux';



// const MyPostsContainer = (props) => {

// let state = props.store.getState();


// let addPostUI = () => {
//   props.store.dispatch(addPostActionCreator());
// }

// let onPostChange = (textChange) => {
//   let action = updateNewPostTextActionCreator(textChange);
//   props.store.dispatch (action);
// }


// 	return  <MyPosts updateNewPostText={onPostChange}
//           addPost={addPostUI} profilePage={state.profilePage}/>

// }

function mapStateToProps (state) {
	// console.log('MyPosts mapStateToProps');
	return {
		posts: state.profilePage.posts
	}
}

function mapDispatchToProps (dispatch) {

	return {
		addPost: (newPostText) => {
			dispatch(addPostActionCreator(newPostText))
		},
		// updateNewPostText: (textChange) => {
		// 	dispatch(updateNewPostTextActionCreator(textChange))
		// }
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
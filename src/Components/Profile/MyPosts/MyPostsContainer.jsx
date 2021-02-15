import React from 'react';

import MyPosts from './MyPosts.jsx';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profile-reducer.js';
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
	return {
		profilePage: state.profilePage
	}
}

function mapDispatchToProps (dispatch) {

	return {
		addPost: () => {
			dispatch(addPostActionCreator())
		},
		updateNewPostText: (textChange) => {
			dispatch(updateNewPostTextActionCreator(textChange))
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
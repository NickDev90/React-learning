import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import {Redirect} from 'react-router-dom';





const Profile = (props) => {

	// if (!props.isAuthed) return <Redirect to={"/login"} />
	console.log('profile is here');

	return <div>
	  <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
	  isOwner={props.isOwner} savePhoto={props.savePhoto}/>

      <MyPostsContainer />

    </div>

}

export default Profile; 
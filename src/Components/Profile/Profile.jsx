import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import {Redirect} from 'react-router-dom';





const Profile = (props) => {

	return <div>
	  <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
	  isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>

      <MyPostsContainer />

    </div>

}

export default Profile; 
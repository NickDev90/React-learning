import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import {Redirect} from 'react-router-dom';





const Profile = (props) => {

	// if (!props.isAuthed) return <Redirect to={"/login"} />
	

	return <div>
	  <ProfileInfo profile={props.profile}/>

      <MyPostsContainer />

    </div>

}

export default Profile; 
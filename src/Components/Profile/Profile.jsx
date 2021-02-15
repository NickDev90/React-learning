import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'




const Profile = (props) => {

	return <div>
	  <ProfileInfo profile={props.profile}/>

      <MyPostsContainer />

    </div>

}

export default Profile; 
import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'



const Profile = (props) => {

	return <div>
	  <ProfileInfo ava="Avatar" description="some description"/>

      <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />

    </div>

}

export default Profile; 
import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'
const Profile = () => {
	return <div>
      <div> 
        <img src="https://asiatec.sg/wp-content/uploads/2016/09/nature-1000x600.jpg" alt=""/>
      </div>
      <div>
        ava + descr.
      </div>

      <MyPosts />

    </div>

}

export default Profile;
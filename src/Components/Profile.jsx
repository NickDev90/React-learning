import React from 'react';
import s from './Profile.module.css';
const Profile = () => {
	return <div className={s.content}>
      <div> 
        <img src="https://asiatec.sg/wp-content/uploads/2016/09/nature-1000x600.jpg" alt=""/>
      </div>
      <div>
        ava + descr.
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div className={s.posts}>
          <div className={s.item}>
            Post 1
          </div>  
          <div className={s.item}>
            Post 2
          </div>  
          <div className={s.item}>
            Post 3
          </div>  
        </div>
      </div>
    </div>

}

export default Profile;
import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../Friends/Preloader/Preloader.jsx'

const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader />
	}

	return <div>
  	        <div> 
            <img src="https://asiatec.sg/wp-content/uploads/2016/09/nature-1000x600.jpg" alt=""/>
          </div>
          <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} alt="" />
            ava + description
          </div>
    </div>

}

export default ProfileInfo;
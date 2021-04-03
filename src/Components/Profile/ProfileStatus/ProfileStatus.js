import React from 'react';
import s from '../ProfileInfo/ProfileInfo.module.css';
// import Preloader from './../../Friends/Preloader/Preloader.jsx'

const ProfileStatus = (props) => {

	return <div>
          <div>
            <span className={s.fullname}>{props.profile.fullName}</span>
          </div>
          <div>
            <span className={s.status_content}>{props.profile.aboutMe}</span>
          </div>
    </div>

}

export default ProfileStatus;
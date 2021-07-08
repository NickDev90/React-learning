import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../Friends/Preloader/Preloader.jsx'
import ProfileStatusWihtHooks from '../ProfileStatus/ProfileStatusWithHooks.js'

const ProfileInfo = ({profile, status, updateStatus}) => {

	if (!profile) {
		return <Preloader />
	}
	return <div>
          <div className={s.descriptionBlock}>
            <img src={profile.photos.large} alt="" />
          </div>
          <ProfileStatusWihtHooks profile={profile} status={status}
                  updateStatus={updateStatus}/>
    </div>

}

export default ProfileInfo;
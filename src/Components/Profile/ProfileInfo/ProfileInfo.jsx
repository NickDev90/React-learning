import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../Friends/Preloader/Preloader.jsx'
import ProfileStatusWihtHooks from '../ProfileStatus/ProfileStatusWithHooks.js'
import userPhoto from './../../../assets/images/user-young-boy.jpg';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

	if (!profile) {
		return <Preloader />
	}
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
      console.log(e.target.files[0])
    }
  }

  console.log('profile info rendered');
	return <div>
          <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} alt="" className={s.userPhoto}/>
          </div>
          <div>
            { isOwner && 
              <input type="file" name="" id="" onChange={onMainPhotoSelected}/> 
            }
          </div>
          <ProfileStatusWihtHooks profile={profile} status={status}
                  updateStatus={updateStatus}/>
    </div>

}

export default ProfileInfo;
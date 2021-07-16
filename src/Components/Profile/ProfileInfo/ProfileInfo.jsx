import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../Friends/Preloader/Preloader.jsx';
import ProfileData from './ProfileData.jsx';
import ProfileDataEditWithReduxForm from './ProfileDataEditForm.jsx';
import ProfileStatusWihtHooks from '../ProfileStatus/ProfileStatusWithHooks.js';
import userPhoto from './../../../assets/images/user-young-boy.jpg';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
  let [editMode, setEditMode] = useState(false);


	if (!profile) {
		return <Preloader />
	}

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]) 
      console.log(e.target.files[0])
    }
  }

  const onEditProfile = () => {
    setEditMode(true)
  }
  const onSumbitEditedProfile = (formData) => {
    saveProfile(formData).then(
      ()=> {
          setEditMode(false)
      })
  }

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

          { editMode ? <ProfileDataEditWithReduxForm profile={profile} 
          onSubmit={onSumbitEditedProfile} initialValues={profile}/> 
          : <ProfileData profile={profile} isOwner={isOwner} 
          onEditProfile={onEditProfile}/> }
    
{/*          { isOwner && editMode ?
              <button name="" id="" onClick={onSubmitEditedProfile}>Save changes</button> 
              : <button name="" id="" onClick={onEditProfile}>Edit profile</button>
            } */}
    </div>
} 


export default ProfileInfo; 


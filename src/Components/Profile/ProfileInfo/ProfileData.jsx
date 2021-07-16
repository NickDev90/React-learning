import React, {useState} from 'react';
import s from './ProfileInfo.module.css';


export const Contacts = ({contactTitle, contactValue}) => {
  return <div><b>{contactTitle}</b> : {contactValue}</div>
}


const ProfileData = ({profile, onEditProfile, isOwner}) => {
  return <div className={s.fullInfo}>
            <div>
              <b>Full name: </b> {profile.fullName}
            </div>
            <div>
              <b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            { profile.lookingForAJob &&
              <div>
                <b>My professional skills: </b> {profile.lookingForAJobDescription}
              </div>
            }
            <div>
              <b>About me: </b> {profile.aboutMe}
            </div>
            <div>
              <b>Contacts :</b>
                  <div className={s.contactsList}>
                  {Object.keys(profile.contacts).map( item => {
                      return <Contacts key={item} contactTitle={item} 
                     contactValue={profile.contacts[item]}/> })
                  }
                  </div>
            </div>
            { isOwner && <button onClick={onEditProfile}>Edit profile</button>}
            
          </div>
}
 
export default ProfileData;
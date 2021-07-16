import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import {Contacts} from './ProfileData.jsx';
import { Field, reduxForm } from 'redux-form'; 



const ProfileDataEditForm = ({handleSubmit, profile, error}) => {
  return <form className={s.fullInfo} onSubmit={handleSubmit}>
            <div>
              <b>Full name: </b> 
              <div>
                      <Field component="input" 
                            name="fullName" type="text"
                            placeholder="Full name"/>
              </div>
            </div>
            <div>
              <b>Looking for a job: </b>  
                  <label>
                      <Field name="lookingForAJob" component="input" type="radio" value="true" />{' '}
                      Yes
                  </label>
                  <label>
                    <Field name="lookingForAJob" component="input" type="radio" value="false" />{' '}
                    No
                  </label>
            </div>

            <div>
                <b>My professional skills: </b> 
                <div>
                    <Field component="input" 
                          name="lookingForAJobDescription" type="text"
                          placeholder="My skills"/>
                </div>
            </div>

            <div>
              <b>About me: </b> 
                <div>
                  <Field component="textarea" 
                        name="aboutMe" type="text"
                        placeholder="About me"/>
                </div>
                                  
            </div>
            <div>
              <b>Contacts :</b>
                  <div className={s.contactsList}>
                  {Object.keys(profile.contacts).map( item => {
                      return <div className={s.contact} key={item}>
                          <b>{item} :</b>
                          <Field component="input" 
                              name={'contacts.' + item} type="text"
                              placeholder={item}/>
                      </div>
                    })
                  }
                  </div>
            </div>
            <button>Save changes</button>
               
                  { 
                      error && <div className={s.formSummaryError}>
                          {error}
                      </div>
                  }
          

          </form>
}

const ProfileDataEditWithReduxForm = reduxForm({ 
  form: 'editProfile'
})(ProfileDataEditForm);

export default ProfileDataEditWithReduxForm;
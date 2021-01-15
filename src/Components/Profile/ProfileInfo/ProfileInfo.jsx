import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return <div>
  	        <div> 
            <img src="https://asiatec.sg/wp-content/uploads/2016/09/nature-1000x600.jpg" alt=""/>
          </div>
          <div className={s.descriptionBlock}>
            {props.ava} + {props.description}.
          </div>
    </div>

}

export default ProfileInfo;
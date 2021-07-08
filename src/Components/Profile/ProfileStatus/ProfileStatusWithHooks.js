import React, {useState, useEffect} from 'react';
import s from '../ProfileInfo/ProfileInfo.module.css';
// import Preloader from './../../Friends/Preloader/Preloader.jsx'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [locStatus, setLocStatus] = useState(props.status);

    useEffect ( () => {
        setLocStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deActivateEditMode = () => {
        setEditMode(false); 
        props.updateStatus(locStatus) 
    }
    const onStatusChange = (e) => {
        setLocStatus(e.currentTarget.value);
    }


    return (
    <div>
                
               <div>
                 <span className={s.fullname}>{props.profile.fullName}</span>
               </div>
              
              { !editMode && 
                <div>
                  <span className={s.status_content} onDoubleClick={activateEditMode}>
                      {props.status}
                  </span>
                </div>
              } 
            {editMode &&
              <div>
                <input autoFocus={true} onBlur={deActivateEditMode} onChange={onStatusChange}
                value={locStatus}/>
              </div>
            }
    </div>
    )
  }

export default ProfileStatusWithHooks;
import React from 'react';
import classes from './Friends.module.css'; 
import {NavLink} from 'react-router-dom';
import userPhoto from './../../assets/images/user-young-boy.jpg';



const User = ({user, followingInProgress, follow, unfollow, ...props}) => {

	return  <div>
				<span>
  						<div>
              <NavLink to={'profile/' + user.id}>
                 <img src={user.photos.small != null? user.photos.small : userPhoto} 
                 className={classes.userPhoto}/>
              </NavLink>
  						
  						</div>
  						<div>
  							{ user.followed
  								?<button disabled={followingInProgress.some(id => id === user.id)}
                     onClick={ () => {unfollow(user.id)} }>
                  Unfollow</button>
  					         
                  :<button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={ () => {follow(user.id)} }>
                  Follow</button>
  							}

  						</div>
  					</span>

  					<span>
  						<span>
  							<div>
  								{user.name}
  							</div>
  							<div>
  								{user.status}
  							</div>
  						</span>
  						<span>
  							<div>u.location.country"</div>
  							<div>"u.location.city"</div>
  						</span>
  					</span>
  		}   		  	

    </div>
}






export default User;
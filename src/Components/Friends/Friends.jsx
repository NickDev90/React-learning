import React from 'react';
import User from './User.jsx'



const Friends = ({users, ...props}) => {

	return  <div>
  		{
  			users.map( (u) => <User user={u} key={u.id} follow={props.follow} 
  				unfollow={props.unfollow} followingInProgress={props.followingInProgress}/>
  			)
  		}   		  	
    </div>
}

export default Friends;
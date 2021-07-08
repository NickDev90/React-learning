import React from 'react';
import * as axios from 'axios';
import classes from './Friends.module.css'; 
import {NavLink} from 'react-router-dom';
import userPhoto from './../../assets/images/user-young-boy.jpg';
import {friendsAPI} from './../../API/api.js'
import Paginator from './Paginator.js'
import User from './User.jsx'



const Friends = ({users, ...props}) => {

	return  <div>

		<Paginator totalFriendsCount={props.totalFriendsCount} pageSize={props.pageSize}
		currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>

  		{
  			users.map( (u) => <User user={u} key={u.id} follow={props.follow} unfollow={props.unfollow}
  				followingInProgress={props.followingInProgress}/>

  			)
  		}   		  	

    </div>
}






export default Friends;
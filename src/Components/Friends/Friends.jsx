import React from 'react';
import * as axios from 'axios';
import classes from './Friends.module.css'; 
import {NavLink} from 'react-router-dom';
import userPhoto from './../../assets/images/user-young-boy.jpg';
import {friendsAPI} from './../../API/api.js'



const Friends = (props) => {



	let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize);
		
	let pages = []; 
			
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

		
	return  <div>
		<div>
			{
				pages.map( p => {
					return <span className={props.currentPage === p && classes.selectedPage}
					onClick={ (e) => props.onPageChanged(p) }> {p} </span>;
				})

			}
		</div>

  		{
  			props.users.map( (u) => <div key={u.id}>
  				
  					<span>
  						<div>
              <NavLink to={'profile/' + u.id}>
                 <img src={u.photos.small != null? u.photos.small : userPhoto} 
                 className={classes.userPhoto}/>
              </NavLink>
  						
  						</div>
  						<div>
  							{ u.followed
  								?<button disabled={props.followingInProgress.some(id => id === u.id)}
                     onClick={ () => {props.follow(u.id)} }>
                  Unfollow</button>
  					         
                  :<button disabled={props.followingInProgress.some(id => id === u.id)}
                        onClick={ () => {props.unfollow(u.id)} }>
                  Follow</button>
  							}

  						</div>
  					</span>
  					<span>
  						<span>
  							<div>
  								{u.name}
  							</div>
  							<div>
  								{u.status}
  							</div>
  						</span>
  						<span>
  							<div>"u.location.country"</div>
  							<div>"u.location.city"</div>
  						</span>
  					</span>
  				</div>
  			)
  		}   		  	

    </div>
}






export default Friends;
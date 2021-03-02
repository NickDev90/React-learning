import React from 'react';
import * as axios from 'axios';
import classes from './Friends.module.css'; 
import {NavLink} from 'react-router-dom';
import userPhoto from './../../assets/images/user-young-boy.jpg';
import {followFreind} from './../../API/api.js'



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
  								?<button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
                    props.toggleFollowingProgress(true, u.id);
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, 
                                  {withCredentials: true,
                                    headers: {
                                      "API-KEY": "1ee5a7d0-492f-4228-bc66-5a58b902c8a2"
                                    }
                                  })
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                    } } >Unfollow</button>
  					         
                    :<button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
                    props.toggleFollowingProgress(true, u.id);
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, 
                              {withCredentials: true,
                                headers: {
                                      "API-KEY": "1ee5a7d0-492f-4228-bc66-5a58b902c8a2"
                                    }
                              }) 

                    // followFriend(u.id)
                    .then(response => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });

                    }}>Follow</button>
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
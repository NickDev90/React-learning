import React from 'react';
import classes from './Friends.module.css'; 
import {NavLink} from 'react-router-dom';
import userPhoto from './../../assets/images/user-young-boy.jpg';
import {friendsAPI} from './../../API/api.js'



const Paginator = (props) => {

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
		</div>

}

export default Paginator;
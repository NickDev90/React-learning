import React from 'react';
import * as axios from 'axios';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import Friends from './Friends.jsx'
import {friendsAPI} from './../../API/api.js'
import Preloader from './Preloader/Preloader.jsx'
import classes from './Friends.module.css'; 
import {getUsers, getUsersSuper, getPageSize, getCurrentPage, getIsFetching, getTotalFriendsCount,
		 getFollowingInProgress} from './../../redux/user-selectors.js';
import {followSuccess, unfollowSuccess, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, 
	toggleFollowingProgress, getUsersThunkCreator, follow, unfollow} from './../../redux/friends-reducer.js'


class FriendsContainer extends React.Component {

	componentDidMount () {

		this.props.getUsersThunkCreator(this.props.pageNumber, this.props.pageSize);

			// 	this.props.setIsFetching(true);
			// 	friendsAPI.getFriends(this.props.currentPage, this.props.pageSize).then(data => {
					
			// 		this.props.setIsFetching(false);
			// 		this.props.setUsers(data.items);
			// 		this.props.setTotalUsersCount(data.totalCount);

			// })
		
	}
		 
	onPageChanged = (pageNumber) => {
		this.props.setIsFetching(true);
		this.props.setCurrentPage(pageNumber);
		// axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
		friendsAPI.pageChange(pageNumber, this.props.pageSize).then(data => {

					this.props.setIsFetching(false);
					this.props.setUsers(data.items);
		})
	}

	render() {
		console.log('Render friends');

		return <div>
				{ this.props.isFetching ? <Preloader /> : null}
				 
				 <Friends totalFriendsCount={this.props.totalFriendsCount}
				pageSize={this.props.pageSize} currentPage={this.props.currentPage}
				users={this.props.users} onPageChanged={this.onPageChanged}
				followingInProgress={this.props.followingInProgress}
				follow={this.props.follow} unfollow={this.props.unfollow}/>
			
			</div>
	}
}


// let mapStateToProps = (state) => {
// 	return {
// 		users: state.friendsPage.users,
// 		pageSize: state.friendsPage.pageSize,
// 		totalFriendsCount: state.friendsPage.totalFriendsCount,
// 		currentPage: state.friendsPage.currentPage,
// 		isFetching: state.friendsPage.isFetching,
// 		followingInProgress: state.friendsPage.followingInProgress
// 	}
// }

let mapStateToPropsNew = (state) => {
	console.log('selector works');

	return {
		users: getUsersSuper(state),
		pageSize: getPageSize(state),
		totalFriendsCount: getTotalFriendsCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}


// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userID) => {
// 			dispatch(followAC(userID))
// 		},
// 		unfollow: (userID) => {
// 			dispatch(unfollowAC(userID))
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users))
// 		}, 
// 		setCurrentPage: (pageNumber) => {
// 			dispatch(setCurrentPageAC(pageNumber))
// 		},
// 		setTotalUsersCount: (totalCount) => {
// 			dispatch(setTotalUsersCountAC(totalCount))
// 		},
// 		setIsFetching: (isFetching) => {
// 			dispatch(FetchingAC(isFetching))
// 		}
// 	}
// }

export default connect(mapStateToPropsNew, {followSuccess, unfollowSuccess, setUsers, 
	setCurrentPage, setTotalUsersCount, setIsFetching, 
	toggleFollowingProgress, getUsersThunkCreator, 
	follow, unfollow})(FriendsContainer);



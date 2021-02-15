import React from 'react';
import * as axios from 'axios';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import Friends from './Friends.jsx'
import Preloader from './Preloader/Preloader.jsx'
import classes from './Friends.module.css'; 
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching} from './../../redux/friends-reducer.js'


class FriendsContainer extends React.Component {

	componentDidMount () {
				this.props.setIsFetching(true);
				axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
					this.props.setIsFetching(false);
					this.props.setUsers(response.data.items);
					this.props.setTotalUsersCount(response.data.totalCount);

			})
		
	}
		 
	onPageChanged = (pageNumber) => {
		this.props.setIsFetching(true);
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
					this.props.setIsFetching(false);
					this.props.setUsers(response.data.items);
		})
	}

	render() {
		
		return <div>
				{ this.props.isFetching ? <Preloader /> : null}
				 
				 <Friends totalFriendsCount={this.props.totalFriendsCount}
				pageSize={this.props.pageSize} currentPage={this.props.currentPage}
				users={this.props.users} onPageChanged={this.onPageChanged}
				follow={this.props.follow} unfollow={this.props.unfollow} />
			
			</div>
	}
}



let mapStateToProps = (state) => {
	return {
		users: state.friendsPage.users,
		pageSize: state.friendsPage.pageSize,
		totalFriendsCount: state.friendsPage.totalFriendsCount,
		currentPage: state.friendsPage.currentPage,
		isFetching: state.friendsPage.isFetching
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

export default connect(mapStateToProps, {follow, unfollow, setUsers, 
	setCurrentPage, setTotalUsersCount, setIsFetching})(FriendsContainer);
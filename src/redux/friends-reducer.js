import {friendsAPI} from '../API/api.js'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
 
let initialState = {
	users: [],
	pageSize: 15,
	totalFriendsCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],
};

export const followSuccess = (userID) => ({type: FOLLOW, userID});

export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUsersCount = (totalFriendsCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalFriendsCount});

export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const toggleFollowingProgress = (isFetching, userID) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID});


export const getUsersThunkCreator = (page, pageSize) => async (dispatch) => {
		dispatch(setIsFetching(true));
		dispatch(setCurrentPage(page));

		let data = await friendsAPI.getFriends(page, pageSize)
		dispatch(setIsFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(true, userID));
                    
    let response = await apiMethod(userID);

    if (response.data.resultCode === 0) {
    	dispatch(actionCreator(userID));
    }
    dispatch(toggleFollowingProgress(false, userID));
}


export const follow = (userID) => async (dispatch) => {
	dispatch(toggleFollowingProgress(true, userID));

    followUnfollowFlow(dispatch, userID, friendsAPI.follow.bind(userID), followSuccess);
}


export const unfollow = (userID) => async (dispatch) => {
	dispatch(toggleFollowingProgress(true, userID));  

    followUnfollowFlow(dispatch, userID, friendsAPI.unfollow.bind(userID), unfollowSuccess);
}



const friendsReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case 'FAKE': 

		return {...state, fake: state.fake + 1}
		
		case FOLLOW: 
			return {
				...state,
				users: state.users.map( (u) => {
					if (u.id === action.userID) {
						return {...u, followed: true}
					}
					else return u;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map( (u) => {
					if (u.id === action.userID) {
						return {...u, followed: false}
					}
					else return u;
				})
			}

		case SET_USERS:
			return {
				...state, 
				users: action.users
			}

		case SET_CURRENT_PAGE:
			return {
				...state, 
				currentPage: action.currentPage
			}

		case SET_TOTAL_USERS_COUNT:
			return {
				...state, 
				totalFriendsCount: action.count
			}

		case TOGGLE_IS_FETCHING:
			return {
				...state, 
				isFetching: action.isFetching
			}

		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching 
				? [...state.followingInProgress, action.userID]
				: [...state.followingInProgress.filter(id => id != action.userID)]
			}

		default:
			return state;
	}
}



export default friendsReducer;
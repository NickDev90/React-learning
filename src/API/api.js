import React from 'react';
import * as axios from 'axios';

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {"API-KEY": "1ee5a7d0-492f-4228-bc66-5a58b902c8a2"}
})

export const friendsAPI = {
	getFriends (currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => response.data)
	},

	pageChange (pageNumber, pageSize) {
		return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
		.then(response => response.data)
	},
	getProfile(userId) {
		return instance.get(`profile/${userId}`);
	},
	follow(userId) {
		return instance.post(`follow/${userId}`) 
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
	}
}

export const authAPI = {
	getMe () {
		return instance.get(`auth/me`);
	}
}

// export const getFriends = (currentPage, pageSize) => {
// 	return instance.get(`users?page=${currentPage}&count=${pageSize}`)
// 	.then(response => response.data)
// }

// export const pageChange = (pageNumber, pageSize) => {
// 	return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
// 	.then(response => response.data)
// }

// export const followFreind = (u.id) => {
// 	return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, 
//                               {withCredentials: true,
//                                 headers: {
//                                       "API-KEY": "1ee5a7d0-492f-4228-bc66-5a58b902c8a2"
//                                     }
//                               }) 
// }

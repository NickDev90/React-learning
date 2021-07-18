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
		console.warn("Це застарілий метод. Використовуйте аналогічний метод, який міститься в об'єкті profileAPI");
		return profileAPI.getProfile(userId);
	}, // this is an obsolete method
	follow(userId) {
		return instance.post(`follow/${userId}`) 
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`);
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`);
	},
	updateStatus(status) {
		return instance.put(`profile/status`, {status: status});
	},
	savePhoto(photoFile) {
		const formData = new FormData();
		formData.append('image', photoFile);

		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	},

	saveProfile(profile) {
		return instance.put(`profile`, profile);
	}
}


export const authAPI = {
	getMe () {
		return instance.get(`auth/me`);
	},
	logIn (email, password, rememberMe = false, captcha) {
		return instance.post(`auth/logIn`, {email, password, rememberMe, captcha})
	},
	logOut () {
		return instance.delete(`auth/logIn`)
	},
}


export const securityAPI = {
	getCaptchaUrl () {
		return instance.get(`security/get-captcha-url`);
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

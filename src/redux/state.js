let store = {
	_state : {
		profilePage : {
			posts : [
			  {id: 1, message: 'Hello, how are you?', likesCount: 10},
			  {id: 2, message: "It's my first post", likesCount: 2},
			  {id: 3, message: "I'm trying React", likesCount: 23},
			  {id: 4, message: "I know something", likesCount: 12},
			  {id: 5, message: "Let's practice in React!", likesCount: 55}
			],
			newPostText : "hello React ho ho ho"
		},
		
		dialogsPage : {
			dialogsData : [
			  {id:1, name:'Kolyan', src:'https://img.icons8.com/bubbles/2x/user-male.png'}, 
			  {id:'Mariana', name:'Mariana', src: 'https://www.pngkey.com/png/full/781-7813239_brown-pigtail-hair-lady-icon-icon.png'}, 
			  {id:3, name:'Lesia', src: 'https://cdn2.iconfinder.com/data/icons/school-flat-circle/512/Girl_lady_user_woman-512.png'}, 
			  {id: 4, name:'Andrew', src: 'https://cdn.dribbble.com/users/79571/screenshots/2562782/user_-_illustration.png'}, 
			  {id:6, name:'Iryna', src: 'https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Woman-Lady-Girl-Female-Avatar-People-Happy-512.png'},
			  {id:'Oksi', name:'Oksana', src: 'https://cdn4.iconfinder.com/data/icons/avatar-circle-1-1/72/63-512.png'}
			],
			messagesData : [
			  {id: 1, message: 'Hello!'},
			  {id: 2, message: 'How are you?'},
			  {id: 3, message: 'Do you like react?'},
			  {id: 4, message: "I'm just learning it now"},
			  {id: 5, message: 'How is your IT-Kamasutra?'},
			  {id: 6, message: "It's very interesting now"},
			],
		}	
	},
	_callSubscriber() {
		console.log("state changed")},

	getState() {
		return this._state;
	},
	subscribe (observer) {
		this._callSubscriber = observer;
	},

	dispatch (action) {
		if (action.type === 'ADD-POST') {
			let newPost = {
				id : 6,
				message : this._state.profilePage.newPostText,
				likesCount : 0};
		
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === 'SEND-MESSAGE') {
			let newMessage = {
				id : 7,
				message : action.writeMe
				};
			this._state.dialogsPage.messagesData.push(newMessage);
			this._callSubscriber(this._state);
		}
	}

	// addPost () {
	// 	let newPost = {
	// 		id : 6,
	// 		message : this._state.profilePage.newPostText,
	// 		likesCount : 0};
		
	// 	this._state.profilePage.posts.push(newPost);
	// 	this._state.profilePage.newPostText = '';
	// 	this._callSubscriber(this._state);
	// },

	// updateNewPostText (newText) {
	// 	this._state.profilePage.newPostText = newText;
	// 	this._callSubscriber(this._state);
	// },

	// sendMessage (writeMe) {
	// 	let newMessage = {
	// 		id : 7,
	// 		message : writeMe
	// 	};
	// 	this._state.dialogsPage.messagesData.push(newMessage);
	// 	this._callSubscriber(this._state);
	// },
	

}


// let reRenderEntireTree = () => {
// 	console.log("state changed");
// }

// let state = {
// 		profilePage : {
// 			posts : [
// 			  {id: 1, message: 'Hello, how are you?', likesCount: 10},
// 			  {id: 2, message: "It's my first post", likesCount: 2},
// 			  {id: 3, message: "I'm trying React", likesCount: 23},
// 			  {id: 4, message: "I know something", likesCount: 12},
// 			  {id: 5, message: "Let's practice in React!", likesCount: 55}
// 			],
// 			newPostText : "hello React ho ho ho"
// 		},
		
// 		dialogsPage : {
// 			dialogsData : [
// 			  {id:1, name:'Kolyan', src:'https://img.icons8.com/bubbles/2x/user-male.png'}, 
// 			  {id:'Mariana', name:'Mariana', src: 'https://www.pngkey.com/png/full/781-7813239_brown-pigtail-hair-lady-icon-icon.png'}, 
// 			  {id:3, name:'Lesia', src: 'https://cdn2.iconfinder.com/data/icons/school-flat-circle/512/Girl_lady_user_woman-512.png'}, 
// 			  {id: 4, name:'Andrew', src: 'https://cdn.dribbble.com/users/79571/screenshots/2562782/user_-_illustration.png'}, 
// 			  {id:6, name:'Iryna', src: 'https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Woman-Lady-Girl-Female-Avatar-People-Happy-512.png'},
// 			  {id:'Oksi', name:'Oksana', src: 'https://cdn4.iconfinder.com/data/icons/avatar-circle-1-1/72/63-512.png'}
// 			],
// 			messagesData : [
// 			  {id: 1, message: 'Hello!'},
// 			  {id: 2, message: 'How are you?'},
// 			  {id: 3, message: 'Do you like react?'},
// 			  {id: 4, message: "I'm just learning it now"},
// 			  {id: 5, message: 'How is your IT-Kamasutra?'},
// 			  {id: 6, message: "It's very interesting now"},
// 			],

// 		}		
// 	}



// export const sendMessage = (writeMe) => {
// 	let newMessage = {
// 		id : 7,
// 		message : writeMe
// 	};
// 	state.dialogsPage.messagesData.push(newMessage);
// 	reRenderEntireTree(state);
// }


// export const addPost = function () {
// 	let newPost = {
// 		id : 6,
// 		message : state.profilePage.newPostText,
// 		likesCount : 0
// 	};


// 	state.profilePage.posts.push(newPost);
// 	state.profilePage.newPostText = '';
// 	reRenderEntireTree(state);
// }

// export const updateNewPostText = function (newText) {
// 	state.profilePage.newPostText = newText;
// 	reRenderEntireTree(state);
// }

// export const subscribe = (observer) => {
// 	reRenderEntireTree = observer;
// }

window.store = store;


export default store;
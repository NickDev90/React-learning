import {reRenderEntireTree} from './../render.js';

	let state = {
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
	}

window.state = state;

export let sendMessage = (writeMe) => {
	let newMessage = {
		id : 7,
		message : writeMe
	};
	state.dialogsPage.messagesData.push(newMessage);
	reRenderEntireTree(state);
}


export let addPost = function () {
	let newPost = {
		id : 6,
		message : state.profilePage.newPostText,
		likesCount : 0
	};


	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	reRenderEntireTree(state);
}

export let updateNewPostText = function (newText) {
	

	state.profilePage.newPostText = newText;
	reRenderEntireTree(state);
}



export default state;
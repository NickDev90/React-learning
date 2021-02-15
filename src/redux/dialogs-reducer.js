const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessageCreator = () => ( {type: SEND_MESSAGE} );

export const updateNewMessageTextCreator = (textChange) => 
	( { type: UPDATE_NEW_MESSAGE_TEXT,
    	newDiagText: textChange } );

let initialState = {
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
		newMessageText: ''
}
	
const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case SEND_MESSAGE: 
			let newMessage = {
				id : 7,
				message : state.newMessageText
				};

			return {
				...state, 
				messagesData: [...state.messagesData, newMessage],
				newMessageText: ''
			};
					
		case UPDATE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.newDiagText
			};

		default:
			return state;
	}
}

export default dialogsReducer;
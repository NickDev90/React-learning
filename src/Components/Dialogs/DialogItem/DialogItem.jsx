import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form'; 
import {required, maxLengthCreator} from './../../../utils/validators.js';
import {Textarea} from './../../common/FormsControls/FormsControls.js';


const AddMessageForm = (props) => {
	const maxLength50 = maxLengthCreator(50);

	return (
				<form onSubmit={props.handleSubmit}>
					<div>
						<Field component={Textarea} type="text" 
						name="message_text" placeholder='Write your message'
						validate={[required, maxLength50]}/>
					</div>

					<div>
						<button type='submit'>Send 222</button>
					</div>
			</form>
	)
}

const AddMessageFormByReduxForm = reduxForm({
	form: 'messageForm'
})(AddMessageForm);



const DialogItem = (props) => {

	let path = "/dialogs/" + props.id;

	// let newPostElement = React.createRef();

	// let send = () => {
	// 	  let text = newPostElement.current.value;
	// 	  props.sendMessage(); 
	// }

	// let onTextChange = (e) => {
	// 	  let textChange = e.target.value;
	// 	  props.onTextMessageChange(textChange);
	// }


	const addNewMessage = (values) => {
		debugger
		console.log(values.message_text);
	};

	return <div className={s.dialog}>
				<NavLink className={s.dialog_item} activeClassName={s.active} to={path}>
					<div className={s.member}>
						<img className={s.dial_ava} src={props.src} alt="" />
					 	{props.name} 
				 	</div> 
				 	<div className={s.send_text}>

				 		<AddMessageFormByReduxForm onSubmit={addNewMessage} />

					</div>

				</NavLink> 
			</div>
			debugger
};



export default DialogItem;
import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';



const DialogItem = (props) => {

	let path = "/dialogs/" + props.id;

	let newPostElement = React.createRef();

	let send = () => {
		  let text = newPostElement.current.value;
		  props.sendMessage(); 
	}

	let onTextChange = (e) => {
		  let textChange = e.target.value;
		  props.onTextMessageChange(textChange);
	}

	return <div className={s.dialog}>
				<NavLink className={s.dialog_item} activeClassName={s.active} to={path}>
					<div className={s.member}>
						<img className={s.dial_ava} src={props.src} alt="" />
					 	{props.name} 
				 	</div>
				 	<div className={s.send_text}>
					  	<textarea ref={newPostElement} cols="20" rows="10" 
					  		onChange={onTextChange} value={props.newMessageText}></textarea>
						<div><button onClick= {send} >Send message</button></div>
					</div>
				</NavLink> 
			</div>
};

export default DialogItem;
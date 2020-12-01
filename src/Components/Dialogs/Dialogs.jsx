import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<div className={s.dialog + ' ' + s.active}> Kolyan </div>
				<div className={s.dialog}> Mariana </div>
				<div className={s.dialog}> Lesia </div>
				<div className={s.dialog}> Andrew </div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>Hello!</div>
				<div className={s.message}>How are you?</div>
				<div className={s.message}>Do you like react?</div>
				<div className={s.message}>I'm just learning it now</div>
			</div>
		</div>
	) 	
}

export default Dialogs;
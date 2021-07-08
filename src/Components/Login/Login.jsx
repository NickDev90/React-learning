import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form'; 
import {Input} from './../common/FormsControls/FormsControls.js';
import {required, maxLengthCreator} from './../../utils/validators.js';
import {loginThunk} from './../../redux/auth-reducer.js';
import {Redirect} from 'react-router-dom';
import style from './../common/FormsControls/FormsControls.module.css';



const maxLength20 = maxLengthCreator(20);


const LoginForm = ({handleSubmit, error}) => {

	return (
			<form onSubmit={handleSubmit} className={style.form}>
				<div>
					<Field component={Input} type="text" name="email" 
					placeholder='Email' validate={[required]}/>
				</div>
				<div>
					<Field component={Input} name="password" type="password" 
					placeholder='password' validate={[required, maxLength20]} />				</div>
				<div>
				<div>
					<Field component={'input'} id="rememberMe" name="rememberMe" type="checkbox"/>
					<label htmlFor="rememberMe"> Remember me </label>
				</div>

				</div>
				<div>
					<button type='submit'>Login</button>
				</div>
				{ 
					error && <div className={style.formSummaryError}>
							{error}
					</div>
				}
			</form>
		)
}

const LoginReduxForm = reduxForm({ 
	form: 'login'
})(LoginForm)

// evaluate it for ContactForm component

const Login = (props) => {
	const onSubmit = (formData) => {
		props.loginThunk(formData.email, formData.password, formData.rememberMe);
	}



	if (props.isAuthed) {
		return <Redirect to={`/profile`} />
	}else {
		return <div>
			<h1>LOGIN</h1>
			<LoginReduxForm onSubmit={onSubmit}/>
		</div>
	}

}

const mapStateToProps = (state) => ({
	isAuthed : state.auth.isAuthed
})

export default connect(mapStateToProps, {loginThunk})(Login);
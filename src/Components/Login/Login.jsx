import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form'; 
import {Input} from './../common/FormsControls/FormsControls.js';
import {required, maxLengthCreator} from './../../utils/validators.js';
import {loginThunk} from './../../redux/auth-reducer.js';
import {Redirect} from 'react-router-dom';
import style from './../common/FormsControls/FormsControls.module.css';



const maxLength20 = maxLengthCreator(20);


const LoginForm = ({handleSubmit, error, captchaUrl}) => {

	return (
			<form onSubmit={handleSubmit} className={style.form}>
				<div>
					<Field component={Input} type="text" name="email" 
					placeholder='Email' validate={[required]}/>
				</div>
				<div>
					<Field component={Input} name="password" type="password" 
					placeholder='password' validate={[required, maxLength20]} />			
				</div>
				<div>
					<div>
						<Field component={'input'} id="rememberMe" name="rememberMe" type="checkbox"/>
						<label htmlFor="rememberMe"> Remember me </label>
					</div>
				</div>
				{
					captchaUrl && 
					<div className={style.captchaBlock}>
						<img className={style.captchaImg} src={captchaUrl} alt=""/>
						<Field component={Input} type="text" placeholder="enter captcha symbols" 
						name="captcha" validate={[required]}/>
					</div>
				}
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
		props.loginThunk(formData.email, formData.password, 
						formData.rememberMe, formData.captcha);
		console.log(formData)
	}
	if (props.isAuthed) {
		return <Redirect to={`/profile`} />
	}else {
		return <div>
			<h1>LOGIN</h1>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
		</div>
	}

}

const mapStateToProps = (state) => ({
	isAuthed : state.auth.isAuthed,
	captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {loginThunk})(Login);
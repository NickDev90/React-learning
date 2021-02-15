import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';


const Header = (props) => {
	return <header className={s.header}>
        <img src="https://a.storyblok.com/f/47007/410x200/d1811e7e9b/joom-200x100.png" alt=""/>
     	<div className={s.loginBlock}>
     		{props.isAuthed? props.login : <NavLink to={'/login'}>Login</NavLink>}
     		
     		
     	</div>
      </header>
}

export default Header;
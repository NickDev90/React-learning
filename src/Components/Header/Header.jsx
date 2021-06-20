import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';


const Header = (props) => {
	return <header className={s.header}>
        <img src="https://a.storyblok.com/f/47007/410x200/d1811e7e9b/joom-200x100.png" alt=""/>
     	<div className={s.loginBlock}>
     		{props.isAuthed
                ? <div> {props.login} 
                        <button onClick={props.logoutThunk}>Log out</button> 
                    </div> 
                : <NavLink to={'/login'}>Login</NavLink>}
     		
     		
     	</div>
{/*        <div className={s.loginBlock}>
            {props.isAuthed? <LogOut /> : null }
        </div>*/}
      </header>
}

export default Header;
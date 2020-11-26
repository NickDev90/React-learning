import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
	return <nav className={classes.nav}>
      <div >
        <NavLink to="/profile" className={classes.item} activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={classes.item} activeClassName={classes.active}>Messages</NavLink>
      </div>
      <div>
        <NavLink to="/feed" className={classes.item} activeClassName={classes.active}>Feed</NavLink>
      </div>
      <div>
        <NavLink to="/music" className={classes.item} activeClassName={classes.active}>Music</NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={classes.item} activeClassName={classes.active}>Settings</NavLink>
      </div>
    </nav>
}

export default Navbar;
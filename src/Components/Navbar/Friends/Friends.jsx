import React from 'react';
import classes from './../Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Friends = () => {
	return  <div >
        <NavLink to="/friends" className={classes.item} activeClassName={classes.active}>Friends</NavLink>
      </div>
};

export default Friends;
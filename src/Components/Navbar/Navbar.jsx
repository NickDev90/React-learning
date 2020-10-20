import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
	return <nav className={classes.nav}>
      <div >
        <a href="#" className={classes.item}>Profile</a>
      </div>
      <div >
        <a href="#" className={`${classes.item} ${classes.active}`}>Messages</a>
      </div>
      <div>
        <a href="#" className={classes.item}>Feed</a>
      </div>
      <div>
        <a href="#" className={classes.item}>Music</a>
      </div>
      <div>
        <a href="#" className={classes.item}>Settings</a>
      </div>
    </nav>
}

export default Navbar;
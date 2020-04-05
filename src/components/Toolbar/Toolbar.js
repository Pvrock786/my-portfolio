import React from 'react'
import {Link, NavLink } from 'react-router-dom';

import classes from './Toolbar.module.css'
import logo from '../../assests/image/logo/newLogo_1.png';

import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';

const Toolbar = props => (

    <header className={classes.toolbar}>
        <nav className={classes.toolbar__navigation}>
            <div className={classes.toolbar__toggle_button}>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <Link to="/"><div className={classes.toolbar__logo}><img src={logo} alt="tFLogo" width="90px" /></div></Link>
            <div className={classes.spacer} />
            <div className={classes.toolbar_navigation_items}>
                <ul className={classes.links}>
                    <li className={classes.links_items}><NavLink  to="/about" activeStyle={{color: "rgb(174, 43, 226)"}}>ABOUT</NavLink ></li>
                    <li className={classes.links_items}><NavLink  to="/event" activeStyle={{color: "rgb(174, 43, 226)"}}>Events</NavLink ></li>
                    <li className={classes.links_items}><NavLink  to="/gallary" activeStyle={{color: "rgb(174, 43, 226)"}}>GALLERY</NavLink ></li>
                    <li className={classes.links_items}><NavLink  to="/sponsors" activeStyle={{color: "rgb(174, 43, 226)"}}>SPONSORS</NavLink ></li>
                    <li className={classes.links_items}><NavLink  to="/contact" activeStyle={{color: "rgb(174, 43, 226)"}}>CONTACT</NavLink ></li>
                    
                    {/* <li className={classes.links_items}><Link className={classes.loginLink} to="#" onClick={props.loginClickHandler}>LOGIN</Link></li> */}
                </ul>
            </div>
        </nav>
    </header>
)

export default Toolbar

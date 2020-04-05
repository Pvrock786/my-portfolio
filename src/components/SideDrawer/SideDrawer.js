import React from 'react'
import {Link} from 'react-router-dom'
import './SideDrawer.css'

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
      drawerClasses = 'side-drawer open';
    }
    return (
      <nav className={drawerClasses}>
        <ul>
               <li> <Link to="/" onClick={props.drawerClickHandler}>Home</Link></li>
               <li> <Link to="/about" onClick={props.drawerClickHandler}>ABOUT</Link></li>
                <li> <Link to="/gallary" onClick={props.drawerClickHandler}>GALLERY</Link></li>
                <li> <Link to="/sponsors" onClick={props.drawerClickHandler}>SPONSORS</Link></li>
                <li> <Link to="/contact" onClick={props.drawerClickHandler}>CONTACT</Link></li>
        </ul>
      </nav>
    );
  };
  

export default SideDrawer
import React from 'react'
import classes from './Footer.module.css'
import logo from '../../assests/white.svg';
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
const Footer = props => (
    <footer className={classes.footer}>
        <div className={classes.gridContainer}>
            <div className={classes.gridItem }><img className={classes.logo } src={logo} alt="sliet_logo" /></div>
            <div className={classes.gridItem }>
                <div className={classes.sliet}>
                    <h2>Sant Longowal Institute of Engineering and Technology</h2>
                    <p className={classes.location}>Longowal-148106, <br/>District: Sangrur (Punjab), India</p>
                    <p className={classes.copyright}>Copyright &copy; 2020 All Rights Reserved by 
                        techFEST'20.</p>
                </div>
            </div>
            <div className={classes.socialMedia}>
                <div className={classes.middle}>
                    <a className={classes.btnF} href="https://www.facebook.com/techfestsliet/">
                        {/* <div className={classes.btnF} ></div> */}
                      <FaFacebookF className={classes.icon}/>
                    </a>
                    <a className={classes.btnT} href="https://twitter.com/techfestsliet?lang=en">
                      <FaTwitter className={classes.icon}/>
                    </a>
                    <a className={classes.btnIN} href="https://in.linkedin.com/company/techfest-sliet">
                        <FaLinkedinIn className={classes.icon}/>
                    </a>
                    <a className={classes.btnI} href="https://www.instagram.com/techfestsliet_/">
                      <FaInstagram className={classes.icon}/>
                    </a>
                    <a className={classes.btnU} href="https://www.youtube.com/channel/UCTSrKfF90hZq7reWgd2oyZg">
                      <FaYoutube className={classes.icon}/>
                    </a>
                  </div>
            </div>
        </div>
        
    </footer>
)
export default Footer

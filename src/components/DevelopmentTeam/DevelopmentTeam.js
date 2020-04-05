import React, { Component } from 'react';
import './DevelopmentTeam.css';
import teamphoto1 from '../../assests/image/Teampage/praveen shukla.jpg';
// import teamphoto2 from '../../assests/image/Teampage/sachin Mittal_c.jpg';
import teamphoto6 from '../../assests/image/Teampage/sachin_1.jpg';
// import teamphoto7 from '../../assests/image/Teampage/sachinm.jpg';
import teamphoto3 from '../../assests/image/Teampage/ANKIT.jpg';
import teamphoto5 from '../../assests/image/Teampage/Prince Syal_c.jpg';
import teamphoto4 from '../../assests/image/Teampage/siddhant kumar_c.jpg';

import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
export default class DevelopmentTeam extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="development-team-dev">
        <div className="team-name-dev">
          <h2> Web Development Team</h2>
        </div>
        <div className="group-3-dev">
          <div className="card-item-dev">
            <img className="profileimage-dev" src={teamphoto1} width="150px" height="150px" alt="img here" /><br />
            <div>Praveen Shukla</div>
            <div className="socialMedia-dev">
              <div className="middle-dev">
                <a className="btnF" href="https://github.com/Pvrock786">
                  {/* <div className={classes.btnF} ></div> */}
                  <GoMarkGithub className="icon" />
                </a>
                <a className="btnIN" href="https://in.linkedin.com/in/praveen-shukla-3522b6162">
                  <FaLinkedinIn className="icon" />
                </a>
                <a className="btnI" href="https://www.instagram.com/pv_shukla/">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-item-dev">
            <img className="profileimage-dev" src={teamphoto6} width="150px" height="150px" alt="img here" /><br />
            <div>Sachin Mittal</div>
            <div className="socialMedia-dev">
              <div className="middle-dev">
                <a className="btnF" href="https://github.com/mittalsam98">
                  {/* <div className={classes.btnF} ></div> */}
                  <GoMarkGithub className="icon" />
                </a>
                <a className="btnIN" href="https://www.linkedin.com/in/sachin-mittal-476174158/">
                  <FaLinkedinIn className="icon" />
                </a>
                <a className="btnI" href="https://www.instagram.com/decent_sachin.mittal/">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-item-dev">
            <img className="profileimage-dev" src={teamphoto3} width="150px" height="150px" alt="img here" /><br />
            <div>Ankit Kumar</div>
            <div className="socialMedia-dev">
              <div className="middle-dev">
                <a className="btnF" href="https://github.com/ankitmishra88">
                  {/* <div className={classes.btnF} ></div> */}
                  <GoMarkGithub className="icon" />
                </a>
                <a className="btnIN" href="https://www.linkedin.com/in/ankitmishra88">
                  <FaLinkedinIn className="icon" />
                </a>
                <a className="btnI" href="https://www.instagram.com/_prashar.ankit/?hl=en">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-item-dev">
            <img className="profileimage-dev" src={teamphoto4} width="150px" height="150px" alt="img here" /><br />
            <div>Siddhant Kumar</div>
            <div className="socialMedia-dev">
              <div className="middle-dev">
                <a className="btnF" href="https://github.com/siddhantk232">
                  {/* <div className={classes.btnF} ></div> */}
                  <GoMarkGithub className="icon" />
                </a>
                <a className="btnI" href="https://www.instagram.com/siddhantk232/">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-item-dev">
            <img className="profileimage-dev" src={teamphoto5} width="150px" height="150px" alt="img here" /><br />
            <div>Prince Syal</div>
            <div className="socialMedia-dev">
              <div className="middle-dev">
                <a className="btnF" href="https://github.com/samstyle321">
                  {/* <div className={classes.btnF} ></div> */}
                  <GoMarkGithub className="icon" />
                </a>
                <a className="btnIN" href="https://www.linkedin.com/in/prince-syal-600426164">
                  <FaLinkedinIn className="icon" />
                </a>
                <a className="btnI" href="https://www.instagram.com/samstyle_prince_syal/">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>


        </div>


      </div>
    )
  }
}
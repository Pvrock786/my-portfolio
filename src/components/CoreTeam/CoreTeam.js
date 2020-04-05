import React, { Component } from 'react';
import './CoreTeam.css';
import teamphoto1 from '../../assests/image/Teampage/Shantanu Kumar_c.jpg';
import teamphoto2 from '../../assests/image/Teampage/Harsh.jpg';
import teamphoto3 from '../../assests/image/Teampage/yasho.jpg';
import teamphoto4 from '../../assests/image/Teampage/AkshatGarg.jpg';
import teamphoto5 from '../../assests/image/Teampage/Astha Kumari.jpg';
import teamphoto6 from '../../assests/image/Teampage/Debraj Daori.jpg';
import teamphoto7 from '../../assests/image/Teampage/sachin Korla_c.jpg';
import teamphoto8 from '../../assests/image/Teampage/Apurva Singh.jpg';
import teamphoto9 from '../../assests/image/Teampage/P_c.jpg';
import teamphoto10 from '../../assests/image/Teampage/Amritanjali_c.jpg';
import teamphoto11 from '../../assests/image/Teampage/Srishti Gaba_c.jpg';
import teamphoto12 from '../../assests/image/Teampage/Shivanshu_c.jpg';
// import teamphoto from '../../assests/image/Teampage/Shantanu Kumar_c.jpg';
import teamphoto20 from '../../assests/image/Teampage/Rohit_c.jpg';
import teamphoto21 from '../../assests/image/Teampage/Ashima Singla.jpg';
import teamphoto15 from '../../assests/image/Teampage/Sanu singh.jpg';
import teamphoto16 from '../../assests/image/Teampage/Nitish.jpg';
import teamphoto13 from '../../assests/image/Teampage/priyanka.jpeg';
import teamphoto14 from '../../assests/image/Teampage/dipayan.jpeg';
import teamphoto17 from '../../assests/image/Teampage/shubhi.jpg';
import teamphoto18 from '../../assests/image/Teampage/unknown.jpg';

import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
export default class CoreTeam extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {

    return (

      <div className="core-team">
        <div className="team-name">
          <h2> CoreTeam</h2>
        </div>
        <div className="group-2">


          <div className="card-item">
            <img className="profileimage" src={teamphoto1} width="150px" height="150vh" alt="img here" /><br />
            <div>Shantanu Kumar</div>
            <div className="socialMedia">
              <div className="middle">
                <a className="btnF" href="https://www.facebook.com/shantanukr34">
                  {/* <div className={classes.btnF} ></div> */}
                  <FaFacebookF className="icon" />
                </a>
                <a className="btnIN" href="https://www.linkedin.com/in/shantanukr34/">
                  <FaLinkedinIn className="icon" />
                </a>
                <a className="btnI" href="https://instagram.com/shantanukumar4357">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-item">
            <img className="profileimage" src={teamphoto2} width="150px" height="150px" alt="img here" /><br />
            <div>Harsh Sharma</div>
            <div className="socialMedia">
              <div className="middle">
                <a className="btnF" href="https://www.facebook.com/people/Harsh-Sharma/100003106217002">
                  {/* <div className={classes.btnF} ></div> */}
                  <FaFacebookF className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-item">
            <img className="profileimage" src={teamphoto4} width="150px" height="150px" alt="img here" /><br />
            <div>Akshat Garg</div>
            <div className="socialMedia">
              <div className="middle">
                <a className="btnF" href="https://www.facebook.com/akst.grg?ref=bookmarks">
                  {/* <div className={classes.btnF} ></div> */}
                  <FaFacebookF className="icon" />
                </a>
                <a className="btnIN" href="https://www.linkedin.com/in/akshat-garg-2aa6a713b">
                  <FaLinkedinIn className="icon" />
                </a>
                <a className="btnI" href="https://www.instagram.com/akst.grg/">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-item">
            <img className="profileimage" src={teamphoto3} width="150px" height="150px" alt="img here" /><br />
            <div>Yasho Vardhan </div>
            <div className="socialMedia">
              <div className="middle">
                <a className="btnF" href="https://m.facebook.com/yasho.vardhan.7777?ref=bookmarks">
                  {/* <div className={classes.btnF} ></div> */}
                  <FaFacebookF className="icon" />
                </a>
                <a className="btnI" href="https://www.instagram.com/yasho_vardhan/">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-item">
            <img className="profileimage" src={teamphoto6} width="150px" height="150px" alt="img here" /><br />
            <div>Debraj Deori</div>
            <div className="socialMedia">
              <div className="middle">
                <a className="btnF" href="https://m.facebook.com/debraj.dawrah">
                  {/* <div className={classes.btnF} ></div> */}
                  <FaFacebookF className="icon" />
                </a>
                <a className="btnIN" href="https://www.linkedin.com/in/debraj-d-80512a173">
                  <FaLinkedinIn className="icon" />
                </a>
                <a className="btnI" href="https://www.instagram.com/debrajdeori/">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="card-item">
            <img className="profileimage" src={teamphoto5} width="150px" height="150px" alt="img here" /><br />
            <div>Astha Kumari</div>
            <div className="socialMedia">
              <div className="middle">
                <a className="btnIN" href="https://www.linkedin.com/in/astha-singh-9199b3191">
                  <FaLinkedinIn className="icon" />
                </a>
                <a className="btnI" href="https://www.instagram.com/asthak114">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-item">
            <img className="profileimage" src={teamphoto8} width="150px" height="150px" alt="img here" /><br />
            <div>Apurva Akriti</div>
            <div className="socialMedia">
              <div className="middle">

                <a className="btnIN" href="https://www.linkedin.com/in/apurva-singh-864619159">
                  <FaLinkedinIn className="icon" />
                </a>
                <a className="btnI" href="https://www.instagram.com/_apurva_singh_/">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>


          <div className="card-item">
            <img className="profileimage" src={teamphoto14} width="150px" height="150px" alt="img here" /><br />
            <div>Dipayan Das</div>
            <div className="socialMedia">
              <div className="middle">
                <a className="btnF" href="https://www.facebook.com/dipayandas2580/">
                  {/* <div className={classes.btnF} ></div> */}
                  <FaFacebookF className="icon" />
                </a>
                <a className="btnIN" href="https://in.linkedin.com/mwlite/me/">
                  <FaLinkedinIn className="icon" />
                </a>
                <a className="btnI" href="https://www.instagram.com/dipayan_.das/">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-item">
            <img className="profileimage" src={teamphoto17} width="150px" height="150px" alt="img here" /><br />
            <div>Shubhi Sharma</div>
            <div className="socialMedia">
              <div className="middle">

                <a className="btnIN" href="https://www.linkedin.com/in/shubhi-sharma-1b1a7914a">
                  <FaLinkedinIn className="icon" />
                </a>

              </div>
            </div>
          </div>

          <div className="card-item">
            <img className="profileimage" src={teamphoto10} width="150px" height="150px" alt="img here" /><br />
            <div>Amritanjali </div>
            <div className="socialMedia">
              <div className="middle">
                <a className="btnF" href="https://www.facebook.com/amrita.anjali.56">
                  {/* <div className={classes.btnF} ></div> */}
                  <FaFacebookF className="icon" />
                </a>
                <a className="btnIN" href="https://www.linkedin.com/in/amritanjali-dubey-a7870b161/">
                  <FaLinkedinIn className="icon" />
                </a>
                <a className="btnI" href="https://www.instagram.com/amritanjali_dubey/">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="card-item">
            <img className="profileimage" src={teamphoto7} width="150px" height="150px" alt="img here" /><br />
            <div>Sachin Korla</div>
            <div className="socialMedia">
              <div className="middle">
                <a className="btnF" href="https://www.fb.com/korlaj">
                  {/* <div className={classes.btnF} ></div> */}
                  <FaFacebookF className="icon" />
                </a>
                <a className="btnIN" href="https://www.linkedin.com/in/sachinkorla">
                  <FaLinkedinIn className="icon" />
                </a>
                <a className="btnI" href="https://www.instagram.com/loverespect_sachu/">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="card-item">
            <img className="profileimage" src={teamphoto13} width="150px" height="150px" alt="img here" /><br />
            <div>Priyanka</div>
            <div className="socialMedia">
              <div className="middle">
                <a className="btnF" href="https://www.facebook.com/in/priyanka.jangra.31105">
                  {/* <div className={classes.btnF} ></div> */}
                  <FaFacebookF className="icon" />
                </a>
                <a className="btnIN" href="https://in.linkedin.com/in/priyanka-jangra-882667150">
                  <FaLinkedinIn className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-item">
            <img className="profileimage" src={teamphoto11} width="150px" height="150px" alt="img here" /><br />
            <div>Srishti Gaba</div>
            <div className="socialMedia">
              <div className="middle">

                <a className="btnI" href="https://instagram.com/srishtigaba662">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-item">
            <img className="profileimage" src={teamphoto21} width="150px" height="150px" alt="img here" /><br />
            <div>Ashima Singla</div>
            <div className="socialMedia">
              <div className="middle">
                <a className="btnI" href="https://instagram.com/_ashima.singla">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-item">
            <img className="profileimage" src={teamphoto12} width="150px" height="150px" alt="img here" /><br />
            <div>Shivanshu</div>
            <div className="socialMedia">
              <div className="middle">

                <a className="btnI" href="https://www.instagram.com/shivay_1999/">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-item">
            <img className="profileimage" src={teamphoto9} width="150px" height="150px" alt="img here" /><br />
            <div>Ayush Gupta</div>
            <div className="socialMedia">
              <div className="middle">
                <a className="btnI" href="https://instagram.com/chi_ckoo">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-item">
            <img className="profileimage" src={teamphoto18} width="150px" height="150px" alt="img here" /><br />
            <div>Ravi Rathore</div>
            <div className="socialMedia">
              <div className="middle">

              </div>
            </div>
          </div>
          <div className="card-item">
            <img className="profileimage" src={teamphoto20} width="150px" height="150px" alt="img here" /><br />
            <div>Rohit Singh</div>
            <div className="socialMedia">
              <div className="middle">
                <a className="btnI" href="https://instagram.com/rohitsingh264">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-item">
            <img className="profileimage" src={teamphoto15} width="150px" height="150px" alt="img here" /><br />
            <div>Sanu</div>
            <div className="socialMedia">
              <div className="middle">
                <a className="btnF" href="https://www.facebook.com/sanu.singh.58152">
                  {/* <div className={classes.btnF} ></div> */}
                  <FaFacebookF className="icon" />
                </a>
                <a className="btnI" href="https://www.instagram.com/sanu__singh__/">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="card-item">
            <img className="profileimage" src={teamphoto16} width="150px" height="150px" alt="img here" /><br />
            <div>Anand Nitish</div>
            <div className="socialMedia">
              <div className="middle">
                <a className="btnF" href="https://www.facebook.com/profile.php?id=100008422539594">
                  {/* <div className={classes.btnF} ></div> */}
                  <FaFacebookF className="icon" />
                </a>
                <a className="btnI" href="https://www.instagram.com/nitish4280/?hl=en">
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
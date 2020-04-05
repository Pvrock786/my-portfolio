import React, { Component } from 'react';
import './Contact.css';
import Form from './Form'
import { Link } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import { GoMail } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';

export default class Contact extends Component {

    render() {
        return (
            <div className="Contact">
                <div className="grid-container">
                    <div className="grid-item one">
                        <div className="inside-container">
                            <h1 className="heading">REACH US AT</h1>
                            <ul>
                                <li><GoLocation /> <span> Sant Longowal Institute of Engineering  and Technology, Longowal, Sangrur, Punjab, PIN:148106</span></li>
                                <br />
                                <li><FiPhoneCall /> 7424953939</li>
                                <li><FiPhoneCall /> 9460975827</li>
                                <br />
                                <li><GoMail /> techfest2020.sliet@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid-item two">
                        <div className="inside-container-map">
                            <iframe className="map" title="mapy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8843.137796057026!2d75.69456836734852!3d30.217884710629534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910f897b4698e01%3A0xd86fbb0eba889ea0!2sSLIET%20Administration%20Block!5e0!3m2!1sen!2sin!4v1575792464250!5m2!1sen!2sin" frameborder="0" allowfullscreen=""></iframe>

                        </div>
                    </div>
                    <div className="grid-item three">
                        <div className="inside-container-contact">
                            <h1 className="heading-2">Contact Us</h1>
                            <Form />
                        </div>
                    </div>
                    <div className="grid-item four">
                        <div className="inside-container-team">
                            <ul>
                                {/* <button>College Ambassador</button> */}
                                <button  className="contactlinks"><Link to="/contact/faculty" > Pedagogue Messages </Link></button>
                                <button  className="contactlinks"> <Link to="/contact/core-team">Core Committee</Link></button>
                                <button className="contactlinks"><Link to="/contact/development-team">Development Team</Link></button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

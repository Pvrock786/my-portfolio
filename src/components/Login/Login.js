import React, { Component } from 'react';
import './Login.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginForm from './LoginForm'
import SignForm from './SignForm'
import { thisExpression } from '@babel/types';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            signup: false,
            islogin: true,
            issign: false
        };

    }


    // this.state.colours === true ? this.setState({bgColor:"red"}): this.setState({bgnoColor: "black"})
    render() {
        let loginClasses = 'login';
        if (this.props.lshow) {
            loginClasses = 'login open';
        }
        return (

            <nav className={loginClasses}>
                <div className="login">
                    <div className="login-left">
                        <div className="login-heading">
                            <button className={this.state.islogin === true ? 'yellow' : 'red'}
                                onClick={() => {
                                    this.setState({ visible: true })
                                    // this.setState({login:   this.state.islogin })
                                    this.setState({ issign: false, islogin: true });
                                    //  console.log(this.state.islogin)
                                    //  console.log(this.state.issign)
                                }}>Login
                            </button>
                            <button className={this.state.issign === true ? 'yellow' : 'red'}
                                onClick={() => {
                                    this.setState({ visible: false });

                                    this.setState({ issign: true, islogin: false });
                                }}>Register
                            </button> 
                            <br />
                        </div>

                        {this.state.visible === true ? <LoginForm /> : <SignForm />}
                    </div>
                </div>
            </nav>
        );
    }
};

export default Login;
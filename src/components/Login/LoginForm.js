import React, { Component } from 'react';
import './login-styles.css';
import axios from 'axios';

class LoginForm extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password:'',
          info: {
            type: '',
            message: ''
          }
        }
      }

      handleChange=(e)=>{
          this.setState({[e.target.name]:e.target.value})
      }
    
      handleSubmit=(e)=>{
        e.preventDefault();
        const newUser={
            email:this.state.email,
            password:this.state.password,
        }
      
        axios.post('http://localhost:5000/api/user/login',newUser)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    
    
        // this.props.registerUser(newUser,this.props.history);
    }

    render() { 
        return (  
            <div className="loginForm">
                <h1>Login</h1>
            <form className = "login-form" onSubmit={this.handleSubmit}>
                <input type="email" name='email' onChange={this.handleChange} placeholder="Useremail"/>
                <input type="password" name='password' onChange={this.handleChange} placeholder="Password"/>
                <input type="submit" value="LOG IN"/>
            </form>
            
            </div>
        );
    }
}
 
export default LoginForm;
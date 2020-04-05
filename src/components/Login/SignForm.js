import React, { Component } from 'react';
import './login-styles.css';
import axios from 'axios';

class SignForm extends Component {
   
    constructor(props) {
        super(props); 
        this.state = {
          name: '',
          email: '',
          visible : true,
          college:'',
          registrationNo:'',
          password:'',
          password2:'',
        }
      }

    handleChange=(e)=>{
        // console.log('handle change called');
        this.setState({[e.target.name]:e.target.value});
    }
    handleChangeSelect=(e)=>{
        let value = e.target.value;
        console.log('handle change called',value);
        this.setState({college: value});;
    }
    handleSubmit=(e)=>{
        e.preventDefault();
    
        const newUser={
            name:this.state.name,
            email:this.state.email,
            college:this.state.college,
            registrationNo:this.state.registrationNo,
            password:this.state.password,
            password2:this.state.password2
        }
    
        
        
        axios.post('http://localhost:5000/api/user/register',newUser)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    
    
        // this.props.registerUser(newUser,this.props.history);
    }

    render() { 
        return (  
            <div className="signForm">
                <h1>Register </h1>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name='name' onChange={this.handleChange} placeholder="Your Name"/>
                <input type="text" name='email' onChange={this.handleChange} placeholder="Your Email"/>
                <select  name='college' onChange={this.handleChangeSelect} placeholder="Select ">
                    <option id="option"> Select College</option>
                    <option value="SLIET" className="option"> SLIET</option>
                    <option value="OTHER" className="option">OTHER</option>
                </select>
                <input type="text"  name='registrationNo' onChange={this.handleChange} placeholder ="Registration"/>
                <input type="password" name='password' onChange={this.handleChange} placeholder="Password"/>
                <input type="password" name='password2' onChange={this.handleChange} placeholder= "Confirm password"/>
                <input type="submit" value="Register "/>
            </form>
            </div>
        );
    }
}
 
export default SignForm;
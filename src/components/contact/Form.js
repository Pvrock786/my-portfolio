import React, { Component } from 'react'
import { ReCaptcha } from 'react-recaptcha-google'
import './Contact.css'
import axios from 'axios';



class Form extends Component {

  constructor(props, context) {
    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.state = {
      name: '',
      email: '',
      number: 0,
      message: '',
      disabled: true,
      ctoken: '',
      info: {
        type: '',
        message: ''
      }
    }
  }

  componentDidMount() {
    if (this.captchaDemo) {
      console.log("started, just a second...")
      this.captchaDemo.reset();
    }
  }

  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!! 
    console.log(recaptchaToken)
    this.setState({
      ...this.state,
      ctoken: recaptchaToken,
      disabled: false
    })
  }
  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }

  handleChange=(e)=>{
    // console.log('handle change called');
    this.setState({[e.target.name]:e.target.value});
}

  // handleChange = (e) => {
  //   switch (e.target.id) {
  //     case 'name':
  //       this.setState({ ...this.state, name: e.target.value })
  //       break;
  //     case 'email':
  //       this.setState({ ...this.state, email: e.target.value })
  //       break;
  //     case 'number':
  //       this.setState({ ...this.state, number: e.target.value })
  //       break;
  //     case 'message':
  //       this.setState({ ...this.state, message: e.target.value })
  //       break;
      
  //     default:
          

  //   }
  // }

  validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  handleSubmit=(e)=>{
    e.preventDefault();

    const newUser={
        name:this.state.name,
        email:this.state.email,
        number:this.state.number,
        message:this.state.message
    }

    
    
    axios.post('http://localhost:5000/api/form',newUser)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));


    // this.props.registerUser(newUser,this.props.history);
}

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   this.setState({
  //     ...this.state,
  //     disabled: true
  //   })

  //   if (this.validateEmail(this.state.email)) {
  //     if (this.state.number.toString().length == 10) {
  //       if (this.state.ctoken) {
  //         const body = {
  //           name: this.state.name,
  //           email: this.state.email,
  //           number: this.state.number,
  //           message: this.state.message,
  //           ctoken: this.state.ctoken
  //         }

  //         fetch('http://localhost:5000/form', {
  //           method: 'POST',
  //           headers: { 'Content-Type': 'application/json' },
  //           body: JSON.stringify(body)
  //         }).then(res => res.json()).then(result => {
  //           console.log(result)
  //           if (result.message) {
  //             this.setState({
  //               ...this.state,
  //               info: {
  //                 type: 'err',
  //                 message: result.message
  //               },
  //               disabled: false
  //             })
  //           } else {
  //             this.setState({
  //               ...this.state,
  //               info: {
  //                 type: 'info',
  //                 message: 'message sent'
  //               },
  //               disabled: false
  //             })
  //           }
  //         });

  //       } else {
  //         this.setState({
  //           ...this.state,
  //           info: {
  //             type: 'err',
  //             message: 'check Captcha!'
  //           },
  //           disabled: false
  //         })
  //       }
  //     } else {
  //       this.setState({
  //         ...this.state,
  //         info: {
  //           type: 'err',
  //           message: 'invalid phone number'
  //         },
  //         disabled: false
  //       })
  //     }
  //   } else {
  //     this.setState({
  //       ...this.state,
  //       info: {
  //         type: 'err',
  //         message: 'invalid email'
  //       },
  //       disabled: false
  //     })
  //   }


  // }


  render() {

    const btn = this.state.disabled ? 'btn-disabled' : 'button';
    const infoClass = this.state.info.type === 'err' ? 'in errMessage' : 'in infoMessage'


    return (
      <form className="inner-section" onSubmit={this.handleSubmit}>
        <input id='name' name='name'  onChange={this.handleChange} type="text" className="in name1" placeholder='Name' />
        <input id='email' name='email' onChange={this.handleChange} type="text" className="in email" placeholder='Your Email' />
        <input id='number' name='number' onChange={this.handleChange} type="number" className="in number" placeholder='Mobile Number' />
        <textarea id='message'  name='message' onChange={this.handleChange} placeholder='Message' className="in message"></textarea>
        <div style={{display:'flex',justifyContent:'center',}}>
          <ReCaptcha
            ref={(el) => { this.captchaDemo = el; }}
            size="large"
            render="explicit"
            sitekey="6Lc8o8YUAAAAAE9zrULOckZuRwcjkUKygGcWEfL5"
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
          />
        </div>
        {this.state.info.message ? <div className={infoClass}>
          <p>{this.state.info.message}</p>
        </div> : null}

        <button disabled={this.state.disabled} className={btn}>Send Message</button>
      </form>
    )
  }
}



export default Form
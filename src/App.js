import React, { Component } from 'react';

import Recaptcha from 'react-recaptcha';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './layout/Header';
import Projects from './components/pages/Projects';
import Services from './components/pages/Services';
import LandingPage from './components/landing-page/landing-page.component';
import axios from 'axios';
import { Button,Container } from 'react-bootstrap';
//https://www.sacincorporated.com/services/
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
constructor(props){
  super(props)
  //classcoponent
  //declaring state
  this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
  this.state ={
    isVerified: false,
    name: '',
    num:'',
    address:'',
    tel:'',
    date:'',
    time:'',
    visualInspection:'',
    notes:''
  }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)  
  
}
async handleSubmit(e){
  e.preventDefault()
  console.log(this.state);
  // const{name,email,message} = this.state

  // const form = await axios.post('/api/form',{
  //   name,
  //   email,
  //   message
  // })
  // .then(response => { 
  //   console.log(response)
  // })
  // .catch(error => {
  //     console.log(error.response)
  // });
}


// function to enable state to be updted automaticaly
handleChange = e =>{
  this.setState({ [e.target.name]: e.target.value })
  console.log( e.target.value);
}


onloadCallback(){
  console.log('captcha on load');
}
recaptchaLoaded(){
  console.log('captcha loaded');
}
  render() {
    
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
           
            <Route exact path="/" render={props =>(
              <Container>
                <LandingPage/>
              </Container>
            )}/>
            <Route path="/projects" component={Projects} />
            <Route path="/services" component={Services} />
          
         </div>
        </div>
      </Router>
      );
  }
}

export default App;
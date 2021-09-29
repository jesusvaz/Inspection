import React from 'react';
import Presentation from '../presentation/presentation.component';
import '../landing-page/landing-page.style.scss';

const LandingPage
  = () => {
    return (

      <>
        <div className="container">
          
          <Presentation />

          <div className="row">
            <div className="col">
              <h1>Level III</h1>
              <p>Get certified</p>
            </div>
            <div className="col">
              <h1>Processes</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, debitis.</p>
            </div>
            <div className="col">
              <h1>Contact Us</h1>
              <p>555-659-1111</p>
            </div>
          </div>
        </div>

      </>
    )
  }

export default LandingPage


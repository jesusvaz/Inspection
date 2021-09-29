import React from 'react'
import { Button } from 'react-bootstrap';
import Portfolio from '../portfolio/portfolio.component';
import PORTFOLIO from '../portfolio';

 function Projects() {
  //console.log('Projects:',JSON.stringify( PORTFOLIO))
  return (
    <>
      <Portfolio portfolio={PORTFOLIO}/>
    </>
  )
}

export default Projects;
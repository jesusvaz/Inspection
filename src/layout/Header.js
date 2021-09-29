import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../components/pages/images/ndt.png';
import '../layout/header.style.scss';


function Header() {
  return (
    <header style={headerStyle}>
    <img  className="responsive"  src={Logo} />
    <br/>
    <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/projects">Portfolio</Link> | <Link style={linkStyle} to="/services">Services</Link>
    </header>
  )
}

const headerStyle = {
    background: '#17202A',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  }

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  }
  
export default Header;
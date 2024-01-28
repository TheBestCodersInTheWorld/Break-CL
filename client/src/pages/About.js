import React from 'react'
import '../styles/About.css' 
import Nav from "../components/Nav.js"
import Afclogo from "../images/afclogo.jpeg"
import Cocoslogo from "../images/cocoslogo.jpeg"
import Jubologo from "../images/jubologo.jpeg"
import Midclogo from "../images/midcheeselogo.jpeg"

const About = () => {
  return (
    <div className="About"> 
     <Nav/>
     <h2 className="Title"> About Break Soccer Champions League</h2>
     <p className="Text"> 
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
     </p>
     <div className="LogoAboutContainer" >
        <img className="teamLogo" src={Afclogo}/>
        <img className="teamLogo" src={Cocoslogo}/>
        <img className="teamLogo" src={Midclogo}/>
        <img className="teamLogo" src={Jubologo}/>
     </div>

    </div>
  )
}

export default About
import React from 'react';
import './styles/style.css'; 
import './styles/style2.css'; 
import { FaSearch, FaInstagram, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';

const About = () => {
    return (
        <div className="wrapper">
            <div className="top-bar">
                <div className="logo">
                    <a href="/"><img src="iedclogo.png.png" alt="IEDC Logo" /></a>
                </div>
                <div className="menu-bar">
                    <ul>
                        <a href="/"><li>Home</li></a>
                        <a href="/Events"><li>Events</li></a>
                        <a href="/About"><li className="active">About</li></a>
                        <a href="/Contact"><li>Contact</li></a>
                    </ul>
                </div>
              
            </div>
            <center>
            <div className="hero">
                
                <div >
                    <u><h1 style={{margin: '100px 0 50px 70px',justifyContent:'center'}}>Know More About Us</h1></u>
                    
                    <center> <p style={{margin: '100px 0 50px 70px',justifyContent:'center'}}>"Innovation and Entrepreneurship Development Centre (IEDC) is a flagship initiative of Kerala Startup Mission to promote innovation and entrepreneurship among the student and academic fraternity in the educational institutions in the State of Kerala and considered as an umbrella programme that would play an instrumental role in fostering innovation culture in Academic institutions."</p></center>
                    <p style={{margin: '100px 0 50px 70px',justifyContent:'center'}}>For more details visit : <a href="https://fisat.ac.in/iedc/">Click this link</a></p> 
                </div>
              
            </div>
            </center>
            <div className="social-icons">
                <ul>
                    <a href="https://www.instagram.com/fisatiedc/"><li><FaInstagram /></li></a>
                    <a href="https://in.linkedin.com/in/fisat-iedc-1707362a8"><li><FaLinkedin /></li></a>
                    <a href="https://www.facebook.com/FISATMHRD/"><li><FaFacebookSquare /></li></a>
                </ul>
            </div>
        </div>
    );
}

export default About;

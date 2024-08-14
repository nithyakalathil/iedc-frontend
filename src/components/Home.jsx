import React from 'react';
import './styles/style.css';
import './styles/style2.css';
import { FaSearch, FaInstagram, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';

const Home=()=> {
  return (
    <div className="wrapper">
      <div className="top-bar">
        <div className="logo">
          <a href="home.html"><img src="iedclogo.png.png" alt="IEDC Logo" /></a>
        </div>
        <div className="menu-bar">
          <ul>
            <a href="/"><li className="active">Home</li></a>
            <a href="/Events"><li>Events</li></a>
            <a href="/About"><li>About</li></a>
            <a href="/Contact"><li>Contact</li></a>
          </ul>
        </div>
        
      </div>

      <div className="hero">
        <div className="hero-text">
          <h1>IEDC - Innovation & Entrepreneurship Development Centre</h1>
          <p>Welcome to the Innovation & Entrepreneurship Development Cell (IEDC) of FISAT community! Stay in the loop with the latest happenings, exciting events, and entrepreneurial adventures within our institute and beyond. This community is your go-to space for real-time updates, event announcements, and discussions on innovation and entrepreneurship. Join us to connect with fellow enthusiasts, share insights, and be a part of dynamic ecosystem driving creativity and business acumen. Get ready to embark on an entrepreneurial journey together!</p>
          <a href="know.html"><button className="btnn">Know Us!</button></a>
        </div>
        <div className="images">
          <img src="back3.png" width="323px" height="auto" alt="Background 3" />
          <img src="back.png" width="323px" height="auto" alt="Background 1" />
          <img src="back2.png" width="323px" height="auto" alt="Background 2" />
        </div>
        <div className="hero-banner1">
          <a href="https://startupmission.kerala.gov.in/"><img src="ksumlogo-removebg-preview.png" alt="KSUM Logo" /></a>
          <a href="https://iedc.startupmission.in/"><img src="iedcksumlogo-removebg-preview.png" alt="IEDC KSUM Logo" /></a>
          <a href="https://iic.mic.gov.in/"><img src="iiclogo.png" alt="IIC Logo" /></a>
        </div>
      </div>
      <div className="social-icons">
      <ul>
                    <a href="https://www.instagram.com/fisatiedc/"><li><FaInstagram /></li></a>
                    <a href="https://in.linkedin.com/in/fisat-iedc-1707362a8"><li><FaLinkedin /></li></a>
                    <a href="https://www.facebook.com/FISATMHRD/"><li><FaFacebookSquare /></li></a>
                </ul>
      </div>
      <div style={{display:'grid',gridAutoFlow:'column',gap:'5px',justifyContent:'start',margin:'0',padding:'0',width:'100%'}} >
       
          
          <a href="team.html"><button className="btn">Team</button></a>

          <a href="gallery.html"><button className="btn">Gallery</button></a>
          <a href="ach.html"><button className="btn">Achievements</button></a>
       
      </div >
      <a href="fab.html">
        <div className="flip-card" tabIndex="0">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="fab.png" width="50%" height="50%" alt="FAB" />
            </div>
            <div className="flip-card-back">
              <i><h3>FABLAB is a technical prototyping platform for innovation and invention which aims at providing stimulus for students and serves as a platform for learning and innovation, and entrepreneurship.</h3></i>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}


export default Home;

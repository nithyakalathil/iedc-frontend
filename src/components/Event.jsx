import React from 'react';
import './styles/style.css'; 
import './styles/style2.css'; 
import { FaSearch, FaInstagram, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';

const Event = () => {
    return (
        <div className="wrapper">
            <div className="top-bar">
                <div className="logo">
                    <a href="/"><img src="iedclogo.png.png" alt="IEDC Logo" /></a>
                </div>
                <div className="menu-bar">
                    <ul>
                        <a href="/"><li>Home</li></a>
                        <a href="/Events"><li className="active">Events</li></a>
                        <a href="/About"><li >About</li></a>
                        <a href="/Contact"><li>Contact</li></a>
                    </ul>
                </div>
              
            </div>
            <center>
            <div className="hero">
                
                <div >
                    <u><h1 style={{margin: '100px 0 50px 70px',justifyContent:'center'}}>Events are here for you</h1></u>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nam laudantium minus? Eaque sapiente vitae a recusandae! Inventore expedita tempora omnis incidunt consequatur quibusdam minima animi. Explicabo vitae voluptatum quisquam?
                    
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

export default Event;

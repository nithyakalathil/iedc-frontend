import React from 'react'
import './styles/style.css';
import './styles/style2.css';
import './styles/style_contact.css';
import { FaSearch, FaInstagram, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
const Contact = () => {
    return (
        <div>
            <title>IEDC-FISAT</title>
            <link rel="stylesheet" href="style2.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital@1&display=swap" rel="stylesheet" />


            <div className="wrapper">
                <div className="top-bar">
                    <div className="logo">
                        <a href="/"><img src="iedclogo.png.png" /></a>
                    </div>
                    <div class="menu-bar">
                        <ul>
                            <a href="/"><li>Home</li></a>
                            <a href="/Events"><li>Events</li></a>
                            <a href="/About"><li>About</li></a>
                            <a href="/Contact"><li class="active">Contact</li></a>
                        </ul>
                    </div>
                </div>
                <div class="para" >
                    <p style={{margin: '100px 0 50px 70px',justifyContent:'right'}}>Mail : fisatiedc@gmail.com</p>
                    <p style={{margin: '100px 0 50px 70px',justifyContent:'right'}}>Ph No : 8714724982</p>
                </div>
                
                <div class="social-icons">
                    <ul>
                        <a href="https://www.instagram.com/fisatiedc/"><li><i class="fa fa-instagram"></i></li></a>
                        <a href="https://in.linkedin.com/in/fisat-iedc-1707362a8"><li><i class="fa fa-linkedin"></i></li></a>
                        <a href="https://www.facebook.com/FISATMHRD/"><li><i class="fa fa-facebook-square"></i></li></a>
                    </ul>
                </div>

            </div>
            <center><footer>Rights reserved @IEDC-FISAT</footer></center>

        </div>

    )
}

export default Contact;
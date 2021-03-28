import React from "react";
import './footer.css';

const Footer = () =>{

    return(
    <footer className="main" >
      
        <section className="sec-1">
            <section className="about">
                <h3 style={{color: "white"}}>ABOUT</h3>
                <p>NEWTechnoz is an initiative to help the upcoming programmers with the code. Beta-labs focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages like C,C++,Java,HTML,CSS etc.</p>
            </section>
        
        <section className="Categories">
            <h3 style={{color: "white"}}>CATEGORIES</h3>
            <ul>
                <li>
                    <a href="#">C</a>
                </li>
                <li>
                    <a href="#">UI Desing</a>
                </li>
                <li>
                    <a href="#">PHP</a>
                </li>
                <li>
                    <a href="#">Java</a>
                </li>
                <li>
                    <a href="#">Android</a>
                </li>
                <li>
                    <a href="#">Hybrid Apps</a>
                </li>
            </ul>
        </section>
        <section className="Links">
            <h3 style={{color: "white"}}>QUICK LINKS</h3>
            <ul>
                <li><a href="#" >About Us</a></li>
                <li><a href="#" >Contact Us</a></li>
                <li><a href="#" >Contribute</a></li>
                <li><a href="#" >Privacy Policy</a></li>
                <li><a href="#" >SiteMap</a></li>
                <li><a href="#" >Disclaimer</a></li>
            </ul>
        </section>
        <section className="Contact">
            <h3 style={{color: "white"}}>CONTACT US</h3>
            <ul>
                <li><i className="fa fa-home"></i>SCO-75 Chandigarh, India</li>
                <li><i className="fa fa-envelope"></i>lifeis@gmail.com</li>
                <li><i className="fa fa-phone "></i>Mobile no:9876543210</li>
                <li><i className="fa fa-facebook-official"> </i>betalabsindia</li>
                
            </ul>
        </section>
        </section>
        
        <section className="sec-2">
            <p>Register for free <a href="#" >Sign Up!</a></p>
        </section>

        <section className="sec-4"> 
            <p>Copyright @ 2020 All Rights Reserved by NEWTechnoz</p>
        </section>
    </footer>

    );


}
export default Footer;
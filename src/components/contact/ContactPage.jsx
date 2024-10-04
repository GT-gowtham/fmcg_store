import React from 'react';
import './ContactPage.css';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbClock12 } from "react-icons/tb";
import { IoMail } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { FaSquarePhone } from "react-icons/fa6";
import Whatsapp from "../assets/CONTACT/REMOVEBACKCONTACT.png";
import { FaLocationDot } from "react-icons/fa6";

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-form">
                    <h2>Contact</h2>
                    
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Message"></textarea>
                        <button type="submit" >Send</button>
                    </form>

                </div>
                <div className="contact-info">
                    <h2 style={{color:"#ffc400"}}> Contact Here...</h2>
                    <p><IoMail/>support@hifiitpark.com</p>
                    <p><FaSquarePhone />+91 8098309295</p>
                    <p><TbClock12 />09:00 AM - 09:00 PM</p>
                    <p><FaLocationDot /> 34/15,Balavinayagar Kovil Street,  Tuticorin-628002</p>
                    <div >
                        <div className="social-icons">
                      


                      <a href="https://www.facebook.com/profile.php?id=61560236537282&mibextid=ZbWKwL"> <FaFacebook style={{padding:"10px"}}/></a>
                      <a href="https://www.instagram.com/hifi_itpark_fmcg/"> <FaSquareInstagram style={{padding:"10px"}}/></a>
                        {/* <FaSquareXTwitter style={{padding:"10px"}}/> */}
                        <a href="https://fmcg.hifiitpark.com/"><CgWebsite style={{padding:"10px"}}/></a>
                        </div>
                        <div className="sb__footer-links_div_img">
                         <img  src={Whatsapp} width={"200px"} height={"200px"} marginTop={"5vh"} />

                    </div>  

                  
                    </div>
                </div>
        

            </div>
        </div>
    );
};

export default ContactPage;

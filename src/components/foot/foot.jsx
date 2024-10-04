import { useRef } from "react";
import'./foot.css';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import Whatsapp from "../assets/footer/whatsappQr.png";
import Instagram from "../assets/footer/instaQR.png";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>FOR BUSINESS</h4>
                        <Link to="/feedback"> <p>FeedBack</p></Link>
                             
                        <a href="/employer">
                             <p> Testimonials</p>
                        
                        </a>
                        <a href="/employer">
                             <p> Case Studies</p>
                        
                        </a>
                        <a href="/employer">
                             <p>Blogs</p>
                        
                        </a>
                                
                    </div>
                    <div className="sb__footer-links_div">
                       <h4>QUICK LINKS</h4>
                      
                        <Link to="/shipping">
                        <p> Shipping Policy</p></Link>
                        <Link to="/termsConditions"> <p> Terms & Conditions</p></Link>
                        <Link to="/refundsReplacement"><p> Refund&Replacement</p></Link>
                  
                        <Link to="/privacyPolicy"> <p> Privacy Policy</p></Link>
                    </div>
                 
                    <div className="sb__footer-links_div_img">
                         <img  src={Whatsapp} width={"100px"} height={"100px"} marginTop={"5vh"}/>

                    </div>
                    <div className="sb__footer-links_div_img">
                         <img  src={Instagram} width={"100px"} height={"100px"} marginTop={"5vh"}/>

                    </div>



                
                </div>
                 {/* <p style={{color:"white"}}>34 / 15, Balavinayagar Kovil Street ,  Tuticorin - 628002 .</p> */}
                 <p style={{color:"white", textAlign:"center"}}><FaLocationDot /> 34/15,Balavinayagar Kovil Street,  Tuticorin-628002</p>
                <hr></hr>
                <hr></hr>
                
                <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                    @{new Date().getFullYear()}Hi-Fi-IT Park . All right reserved.
                    </p>
                   

                </div>
          
                  <div className="sb__footer-links_div">
                   
                       <div className="socialmedia">
                          
                            <div><a href="https://www.facebook.com/profile.php?id=61560236537282&mibextid=ZbWKwL"><FaFacebook /></a></div>
                            <div><a href="https://www.instagram.com/hifi_itpark_fmcg/"><FaSquareInstagram /></a></div>
                            <div> <a href="https://fmcg.hifiitpark.com/"><CgWebsite /></a></div>
                            <div> <a href="https://wa.me/91 8098309295"><IoLogoWhatsapp /></a></div>
                            <div><a href="mailto:fmcg@hifiitpark.com"><IoMail /></a></div>
                          
                       </div>
                    </div>




                </div>
            </div>
        </div>
    )

}
export default Footer;
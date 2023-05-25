import React from "react";
import'./footer.css'
import fb from '../assests/fbimg.png';
import linkedin from '../assests/linkedinimage.png';
import insta from '../assests/instaimg.png';
const Footer=()=>{
    return(
        <div className="footer">
        <div className="sb__footer section__padding">
            <div className='sb__footer-links'>
                <div className='sb__footer-links_div'>
                    <h4>About JobAlly</h4>
                    <a href='/aboutus'>
                        <p>About Us</p>
                    </a>
                    <a href='/contactus'>
                        <p>Contact us</p>
                    </a>
                    <a href='/changelog'>
                        <p>FAQ's</p>
                    </a>
                    
                </div>
                <div className="sb__footer-links_div">
                    <h4>For Candidates</h4>
                    <a href='/joblisting'>
                        <p>Job Listing</p>
                    </a>
                    <a href='/internshiplisting'>
                        <p>Internship Listing</p>
                    </a>
                    <a href='/login'>
                        <p>Login</p>
                    </a>
                    <a href='/signup'>
                        <p>Sign up</p>
                    </a>
                    

                </div>
                
            
            <div className="sb__footer-links_div">
                    <h4>For Employers</h4>
                    <a href='/postnewinternship'>
                        <p>Post New Internship</p>
                    </a>
                    <a href='/postnewjob'>
                        <p>Post New Job</p>
                    </a>
                    <a href='/howtopostjob'>
                        <p>How To Post Job</p>
                    </a>
                    <a href='/howtopostinternship'>
                        <p>How To Post Internship</p>
                    </a>
                    
        </div>
        
        <div className="sb__footer-links_div">
                    <h4>Follow Us</h4>
                    <div className="socialmedia">
                        <p> <img src={fb} alt=""/></p>
                        
                        <p> <img src={linkedin} alt=""/></p>
                        <p> <img src={insta} alt=""/></p>

                    </div>
                    
        </div>
    </div>
    <hr>
    </hr>
    <div className='sb__footer-below'>
        <div className="sb__footer-copyright">
            <p>
                @{new Date().getFullYear()} JobAlly. All rights reserved.
                
            </p>
        </div>
        <div className="sb__footer-below-links">
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/privacy"><div><p>Privacy</p></div></a>
            <a href="/security"><div><p>Security</p></div></a>
            <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
        </div>
    </div>
    </div>
     </div>
    )
}
export default Footer;
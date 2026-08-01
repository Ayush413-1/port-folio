import React from 'react'
import './Footer.css'
import {User} from "lucide-react"

const Fopter = () => {
  return (
    <div id='footer' className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <p>Designed and built by Ayush Bhongade with passion and clean code.</p>
            </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
            <div className="user"><User /></div>
            <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-suscribe">Subscribe</div>
        </div>
    </div>
    <hr />
    <div className="footer-bottom">
        <p className="footer-bottom-left">© 2026 Ayush Bhongade. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
    </div>
</div>
  )
}

export default Fopter
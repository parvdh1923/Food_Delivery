import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo}/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse est ex voluptatem delectus, sed saepe minima doloremque nam in maiores velit aspernatur asperiores vitae totam amet et beatae. Obcaecati, cumque!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt={assets.twitter_icon} /><img src={assets.linkedin_icon} alt="" /><img src="" alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Next</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

<div className="footer-content-right">
    <h2>GET IN TOUCH</h2>
    <ul>
        <li>+91-999-999-9999</li>
        <li>contact@tomato.com</li>
    </ul>
</div>
      </div>
      <hr/>
      <p className="footer-copyright">
        Copyright 2024 @ Tomato.com - All Right Reserved
      </p>
    </div>
  )
}

export default Footer

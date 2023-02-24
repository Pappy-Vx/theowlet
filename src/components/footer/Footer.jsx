import React from 'react'
import './footer.css'
import { FaAppStoreIos, FaFacebook, FaGooglePlay, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer>
    <div className="footer_content">
      <div className="info">
        <a href="/" className='nav-logo'><img src={logo} alt="" /></a>
        <p>Stay updated with our newsletter</p>
        <div className='footer_subscribe'>
          <form action="">
            <input className='email' type="email" name="" id="" placeholder='Enter your email'/>
            <input type="submit" value="Subscribe" className='submit'/>
          </form>
        </div>
      </div>
      <div className="footer_socials">
        <h3 >Socials</h3>
        {/* <div className='footer_link'> */}
        <ul>
          <li><a href="https://twitter.com/owletapp" target='_blank' rel='noreferrer'>Twitter</a></li>
          <li><a href="https://web.facebook.com/profile.php?id=100082913933205" target='_blank' rel='noreferrer'>Facebook</a></li>
          <li><a href="https://instagram.com/owletapp" target='_blank' rel='noreferrer'>Instagram</a></li>
          <li><a href="https://www.youtube.com/channel/UCWimeDcakI6eHAxR3lLwuuA
          " target='_blank' rel='noreferrer'>YouTube</a></li>
        </ul>
        
        
        {/* <a href="https://www.youtube.com/channel/UCWimeDcakI6eHAxR3lLwuuA" target='_blank' rel='noreferrer'>Facebook</a> */}
        
        {/* </div> */}
        
      </div>
      <div className="footer_products">
        <h3>Products</h3>
        <ul>
          <li><a href="https://theowlette.com/" target="_blank" rel="noopener noreferrer">Owlet App</a></li>
          <li><a href="http://theowletonline.com/" target="_blank" rel="noopener noreferrer">Owlet Online</a></li>
          <li><a href="http://theowletonline.com/p2p" target="_blank" rel="noopener noreferrer">Owlet Online P2P</a></li>
          
        </ul>
      </div>
      <div className="footer_contact">
      <h3 >Contact Us</h3>
      <ul>
        <li>Gill’s Mall, Okpara Ave, 
        400102, Enugu</li>
        <li><a href="mailto:helpdesk@theowlette.com">helpdesk@theowlette.com</a></li>
      </ul>
      </div>
    </div>

    <div className="footer__copyright">
      <small> &copy; 2023. All rights reserved </small>
    </div>
  </footer>
  )
}



export default Footer
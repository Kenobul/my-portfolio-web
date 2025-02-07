import React from 'react'
import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Footer = () => {
  return (
    <div className='footer'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      <div className="footer-main">
        <div className="links">
          <h3>Useful Links</h3>
          <div className="line"></div>
          <AnchorLink className="anchor-link" href="#about" offset="50">
            About Me
          </AnchorLink>
          <AnchorLink className="anchor-link" href="#contact" offset="50">
            Contact Me
          </AnchorLink>
          <a href="https://policies.google.com/faq?hl=en-US">FAQs</a>
          <a href="https://policies.google.com/terms?hl=en-US">Terms and Conditions</a>
          <a href="https://policies.google.com/privacy?hl=en-US">Privacy Policy</a>

        </div>
        <div className="contacts">
          <h1>My Contacts</h1>
          <div className="line"></div>
          <p>Phone: 0741255424:</p>
          <p>Email: obulken10@gmail.com </p>
          <p>Nairobi, Kenya</p>

        </div>

        <div className="social-media">
          <a href="https://www.facebook.com/profile.php?id=100085741937302" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-x-twitter"></i>
          </a>
          <a href="https://www.tiktok.com/foryou?lang=en" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="https://www.instagram.com/obulkenneth/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </div>

      </div>


      <div className="bottom">
        <h2>Copyright © Obul Kenneth 2024 : Designed by <span>Ken.</span></h2>
      </div>

    </div>
  )
}

export default Footer

import React from 'react'

const Footer = () => {
  return (

    <footer className="footer">
  <div className="footer__addr">
    <h1 className="footer__logo">CureMeds</h1>
        
    <h2>Contact</h2>
    
    <address>
      Kanpur , India<br />
      <a className="footer__btn" href="curemeds@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Media</h2>

      <ul className="nav__ul">
        <li>
          <a href="#">Online</a>
        </li>

        <li>
          <a href="#">Print</a>
        </li>
            
        <li>
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item nav__item--extra">
    </li>
    
    <li className="nav__item">
      <h2 className="nav__title">Legal</h2>
      
      <ul className="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div className="legal">
    <p>&copy; 2023 CureMeds. All rights reserved.</p>
    
    <div className="legal__links">
      <span>Made with <span className="heart">♥</span>India</span>
    </div>
  </div>
</footer>
  )
}

export default Footer

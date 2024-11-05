import { Link } from 'react-router-dom';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <Link to="/">
          <div className='footer_logo'>
            <img src="./nuvotek_logo.png" alt="Logo" />
          </div>
        </Link>
        <p>
          Copyright @NUVOTEK 2020
        </p>
        <SocialIcon url="https://www.instagram.com/nuvotek_academy/" bgColor='transparent' fgColor='black' target="_blank"/>
      </div>
    </div>
  );
}


export default Footer;
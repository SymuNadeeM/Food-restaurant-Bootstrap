import React from 'react';
import { AiFillDribbbleCircle } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import './Footer.css';


const Footer = () => {
  return (
    <>
      <footer id='footer' >
                 <div className="footer py-5">
                   <div className="container">
                    <div className="row">
                       <div className="col-md-12 text-center">
                         <a  className='footer-link' href="#">Register</a>
                         <a  className='footer-link' href="#">Forum</a>
                         <a  className='footer-link' href="#">Affilliate</a>
                         <a  className='footer-link' href="#">FAQ</a>
                       </div>
                       <div className="footer-social pt-4 text-center">
                         <a className='link_site' href="#"><BsFacebook/></a>
                         <a className='link_site' href="#"><BsTwitter/></a>
                         <a className='link_site' href="#"><BsYoutube/></a>
                         <a className='link_site' href="#"><AiFillDribbbleCircle/></a>
                         <a className='link_site' href="#"><BsLinkedin/></a>
                         <a className='link_site' href="#"><BsInstagram/></a>
                       </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="footer-copy">
                         <div className="copy-right text-center pt-5">
                          <p className='text-light'>@ 2022, Foodies. All right reserved</p>
                         </div>
                      </div>
                    </div>
                   </div>
                 </div>
      </footer>
    </>
  );
};

export default Footer;
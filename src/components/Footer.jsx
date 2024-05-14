import React, { useEffect } from 'react';
import img2 from '../assets/New folder/meltry.png';
import img3 from '../assets/New folder/azadi.png';
import img4 from '../assets/New folder/g20.png';
import img5 from '../assets/New folder/bhim_upi.png';
import img6 from '../assets/New folder/digitalindia.png';
import img7 from '../assets/New folder/indiagov.png';
import img8 from '../assets/New folder/swachh_bharat.png';
import logo1 from '../assets/logo/facebook.png'
import logo2 from '../assets/logo/instagram.png'
import logo3 from '../assets/logo/linkedin.png'
import logo4 from '../assets/logo/twitter.png'



const Footer = () => {
  useEffect(() => {
    const marquee = document.getElementById('marquee');
    const container = document.getElementById('marquee-container');
    const clone = container.cloneNode(true);
    marquee?.appendChild(clone);
  }, []);

  const externalLinkHandler = () => {};
  const styles = {
    '@keyframes marquee': {
      '0%': { transform: 'translateX(100%)' },
      '100%': { transform: 'translateX(-100%)' }
    },
    '.swiper-wrapper': {
      display: 'flex',
      animation: 'marquee 10s linear infinite' 
    }
  };
  const styleString = Object.keys(styles).map(selector => {
    const rules = styles[selector];
    const ruleString = Object.keys(rules).map(property => {
      const value = rules[property];
      return `${property}: ${typeof value === 'object' ? JSON.stringify(value) : value};`;
    }).join('\n');
    return `${selector} { ${ruleString} }`;
  }).join('\n');

  return (
    
<>
<footer >
<style>
      {/* Insert the generated styleString */}
      {styleString}
    </style>
    <div className="container-fluid bg-dark" style={{ animationPlayState: 'running' }}>
          <div className="row text-center" style={{ overflowX: 'hidden' }}>
            <div className="mx-auto gov-logo-pt" style={{ display: 'flex' }}>
              <div className="swiper swiper-lrp govLogo" style={{ display: 'flex', animationName: 'marquee', animationDuration: '10s', animationIterationCount: 'infinite' }}>
                <div className="swiper-wrapper" id="marquee-container" style={{ display: 'flex' }}>
                  <div className="col-md-5 col-12 swiper-slide">
            <a href="https://www.meity.gov.in/" target="_blank" rel="noopener noreferrer" onClick={externalLinkHandler}>
              <img src={img2} className="img-fluid" alt="MeitY Logo"/>
            </a>
          </div>
          <div className="col-md-5 col-12 swiper-slide">
            <a href="https://amritmahotsav.nic.in/" target="_blank" rel="noopener noreferrer" onClick={externalLinkHandler}>
              <img src={img3} className="img-fluid" alt="azadi logo"/>
            </a>
          </div>
          <div className="col-md-5 col-12 swiper-slide">
            <a href="https://www.g20.org/" target="_blank" rel="noopener noreferrer" onClick={externalLinkHandler}>
              <img src={img4} className="img-fluid" alt="G20"/>
            </a>     
          </div>
          <div className="col-md-5 col-12 swiper-slide">
            <a href="https://www.bhimupi.org.in/" target="_blank" rel="noopener noreferrer" onClick={externalLinkHandler}>
              <img src={img5} className="img-fluid" alt="bhimapp"/>
            </a>
          </div>
          <div className="col-md-5 col-12 swiper-slide">
            <a href="https://digitalindia.gov.in/" target="_blank" rel="noopener noreferrer" onClick={externalLinkHandler}>
              <img src={img6} className="img-fluid" alt="Digital India"/>
            </a>
          </div>
          <div className="col-md-5 col-12 swiper-slide">
            <a href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer" onClick={externalLinkHandler}>
              <img src={img7} className="img-fluid" alt="india.gov.in"/>
            </a>
          </div>
          <div className="col-md-5 col-12 swiper-slide">
            <a href="https://swachhbharatmission.gov.in/" target="_blank" rel="noopener noreferrer" onClick={externalLinkHandler}>
              <img src={img8} className="img-fluid" alt="swachh bharat"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  {
  /* above code of  marquee  */}
        <div className="container-fluid border-top ">
        <div className="flex justify-around mt-5">
 

          {/* Add more columns here */}
          <div className=" footer-pt  " >
                <div className="pb-2 mb-4 pt-3 footer_title text-uppercase">
                  <h5><strong>Links</strong></h5>
                </div>
               <ul className="pb-4">
                  <li><a href="/" className="tab-link-text">Home</a></li>
                  <li><a href="/Aboutus" className="tab-link-text">About Us</a></li>
                  <li><a href="/Products" className="tab-link-text">Products</a></li>
                  <li><a href="/contactus" className="tab-link-text">Contact Us</a></li>
                  <li><a href="/Support" className="tab-link-text">Support</a></li>
                  <li><a href="/Login" className="tab-link-text">Login</a></li>
                </ul>
              </div>
              
        <div className=" footer-pt flex flex-col gap-5" >
            <div className="pb-2 mb-4 pt-3 footer_title text-uppercase">
            <h1><strong>Address </strong></h1>
           <h2 className="py-3 mt-4"> <strong>Centre for Development of Advanced Computing</strong><br />
                <strong>C-DAC Innovation Park</strong>,<br />
                Panchavati, Pashan,<br />
                Pune - 411 008, Maharashtra (India)<br />
                Phone: +91-20-25503100<br />
                Fax: +91-20-25503131
              </h2>
            </div>
          </div>

          <div className=" footer-pt " >
            <div className="pb-2 mb-3 pt-3 footer_title text-uppercase text-end px-5 py-3">
              <h1><strong>Location </strong></h1>
            </div>
              <div className="">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8635561268197!2d73.8108405!3d18.535066999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf40bef092f1%3A0x48c508ccaa4ef9a!2sCentre%20For%20Development%20Of%20Advanced%20Computing%2C%20Innovation%20Park!5e0!3m2!1sen!2sin!4v1714573266450!5m2!1sen!2sin" width="350" height="200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
            </div>
          </div>
        </div>

      <div className="container-fluid border-top mt-5">
        <div className="row col-12">
          <div className="text-center">
          <div className="col">
      <p className=' text-black'> Connect with us:</p>

      <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <a href="https://www.facebook.com/CDACINDIA" target="_blank" rel="noopener noreferrer">
            <img src={logo1} alt="Facebook" style={{ width: '20px', height: '20px' }} className="social-media-icon mx-0" />
          </a>
        </div>
        <div className="col-auto">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={logo2} alt="Instagram" style={{ width: '20px', height: '20px' }} className="social-media-icon mx-0" />
          </a>
        </div>  
        <div className="col-auto">
          <a href="https://www.linkedin.com/company/cdacindia/" target="_blank" rel="noopener noreferrer">
            <img src={logo3} alt="LinkedIn" style={{width: '20px', height: '20px' }} className="social-media-icon mx-0" />
          </a>
        </div>
        <div className="col-auto">
          <a href="https://twitter.com/cdacindia" target="_blank" rel="noopener noreferrer">
            <img src={logo4} alt="Twitter" style={{width: '20px', height: '20px'  }} className="social-media-icon mx-0" />
          </a>
        </div>
     </div>
  </div>
</div>

      {/* close logos of social media */}
   
 
            <small>
              <div className="my-3">
                
                <a href="/index.aspx?id=help" className="tab-link-text">Help</a> |
                <a href="/index.aspx?id=website_policies" className="tab-link-text">Website Policies</a> |
                <a href="/index.aspx?id=legal_notice#2" className="tab-link-text">Copyright Policy</a> |
                <a href="/index.aspx?id=terms_conditions" className="tab-link-text">Terms & Conditions</a> |
                <a href="/index.aspx?id=reach_us" className="tab-link-text">Reach Us</a>
              </div>
              Website owned & maintained by: Centre for Development of Advanced Computing (C-DAC)<br />
              &copy;
              <script>document.write(new Date().getFullYear())</script> C-DAC. All rights reserved, Last Updated:
              <span id="lblLastUpdated" className="copyrights"> Monday, August 15, 2022</span>
            </small>
          </div>
        </div>
      </div>
     
    </footer>
    </>

  );
};

export default Footer;

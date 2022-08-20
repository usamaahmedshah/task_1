import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../images/McMahon-Group-Australia.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer id='footerbg' className='p-4 bg-dark text-light'>
      <section className='d-flex justify-content-center'>
        <div className='me-5 d-noned-lg-block'>
          <span>Get Connected with us on social media</span>
        </div>
      </section>

      <div className='row bg-dark text-light footer'>
        <div className='col-xs-7 col-sm-12 col-lg-4'>
          <img src={pic1}></img>
          <h5>About us</h5>
          <p>
            McMahon Group Australia specializes in providing high-quality
            electrical work for Melbourne’s commercial, industrial and
            construction sectors. Group Australia bring a fresh, dynamic
            approach to electrical contracting through a focus on servicing and
            delivering creative electrical solutions to the marke
          </p>
        </div>
        <div className='col-xs-7 col-sm-12 col-lg-4'>
          <h2>Information</h2>
          <br></br>
          <ul>
            <li>
              <Link to='#'>Electrical</Link>
            </li>
            <li>
              <Link to='#'>Security</Link>
            </li>
            <li>
              <Link to='#'>Air Conditioning & Heating</Link>
            </li>
            <li>
              <Link to='#'>Solutions Management</Link>
            </li>
            <li>
              <Link to='#'>Operation Structure</Link>
            </li>
            <li>
              <Link to='#'>Hazardous Areas</Link>
            </li>
            <li>
              <Link to='#'>Renewable Energy</Link>
            </li>
          </ul>
        </div>
        <div className='col-xs-7 col-sm-12 col-lg-4'>
          <h2>Contact US</h2>
          <br></br>
          <ul>
            <li>Melbourne, Victoria Australia</li>
          </ul>
          <hr></hr>
          <ul>
            <li>Phone:</li>
            <li>
              <Link to='#'>1300 85 16 17</Link>
            </li>
            <hr></hr>
            <li>Email:</li>
            <li>
              <Link to='#'>sales@mcmga.com.au</Link>
            </li>
            <hr></hr>
          </ul>
          <p>
            <FaFacebook />
            <FaInstagram />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

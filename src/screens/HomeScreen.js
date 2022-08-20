import React from 'react';
import { BsFillLightningFill, BsFillTelephoneFill } from 'react-icons/bs';
import pic3 from '../images/image3.jpg';
import {
  FaUnlockAlt,
  FaThermometerEmpty,
  FaSolarPanel,
  FaReact,
} from 'react-icons/fa';
import { MdLocalGasStation } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai';
import { IoMdPerson } from 'react-icons/io';
import Card from 'react-bootstrap/Card';

function HomeScreen() {
  return (
    <>
      <div className='main-container'></div>

      <div className='row'>
        <div className='col-xs-7 col-sm-12 col-lg-2'>
          <Card style={{ width: '18rem' }}>
            <BsFillLightningFill className='card-image' />
            <Card.Body>
              <Card.Title>Electrical</Card.Title>
              <Card.Text>
                Specializing in multi-story residential dwellings. Office/shop
                fit outs & much more. Our Electrical Team is second to none,
                professional and ready for any job big or small.
              </Card.Text>
            </Card.Body>
            <FaUnlockAlt className='card-image' />
            <Card.Body>
              <Card.Title>Security</Card.Title>
              <Card.Text>
                CCTV, Access Control/intercom & all types of Alarm Systems
                available are supplied and fitted by the Mcmahon Group
                Australlia. We have all the accreditations & knowledge to help
                secure your Home & Business..
              </Card.Text>
            </Card.Body>
            <FaThermometerEmpty className='card-image' />
            <Card.Body>
              <Card.Title>Air Conditioning & Heating</Card.Title>
              <Card.Text>
                Installations, Service and Maintenance of all Split systems,
                Multi-head systems, Refrigerated systems and more. No matter the
                weather we will make you and your family comfortable.
              </Card.Text>
            </Card.Body>
            <MdLocalGasStation className='card-image' />
            <Card.Body>
              <Card.Title>Hazardous areas</Card.Title>
              <Card.Text>
                McMahon Group Australia specialise in Hazardous Area electrical
                installations and inspections. We have a great deal of hazardous
                area electrical experience in the Chemical, Oil, Gas, and Food
                industries.
              </Card.Text>
            </Card.Body>
            <FaSolarPanel className='card-image' />
            <Card.Body>
              <Card.Title>Renewable Energy</Card.Title>
              <Card.Text>
                McMahon Group Australia specialises in designing systems to meet
                our clients’ needs. Whether your motivation is financial or
                environmental, we work with small businesses and home owners to
                achieve carbon neutral status or alleviate high energy bills
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='sub-section-1 col-lg-12 col-sm-12'>
        <img className='sub-image' src={pic3} alt='pic3' />
      </div>
      <div className='sub-section-2'>
        <div className='row'>
          <div className='sub-section-3 col-lg-3 col-sm-12'>
            <h3>
              <i class='icon-1 fa-solid fa-check'></i> Professional Staff
            </h3>
            <p>
              Our Trained Professional Staff is the best in the business and
              fully qualified to do their job right the first time.
            </p>
            <h3>
              <i class='icon-1 fa-solid fa-check'></i>
              On Time Completion
            </h3>
            <p>
              Our on-time completion record is 100% and we work hard to maintain
              that perfect rate. We understand time is important and respect
              yours.
            </p>
          </div>
          <div className='sub-section-3 col-lg-3 col-sm-12'>
            <h3>
              <i class='icon-1 fa-solid fa-check'></i>No Hidden Cost
            </h3>
            <p>
              McMahon Group Australia has no hidden cost that will shock you
              once the job is completed, we are upfront with our customers and
              keep everyone above board and clear from the beginning.
            </p>
            <h3>
              <i class='icon-1 fa-solid fa-check'></i>Detailed Estimated
            </h3>
            <p>
              We strive to be as accurate as possible in our estimates to our
              clients big and small. Our team of estimators make no mistakes and
              have a proven track record.
            </p>
          </div>
          <div className='sub-section-3 col-lg-3 col-sm-12'>
            <h3>
              <i class='icon-1 fa-solid fa-check'></i>Professional Staff
            </h3>
            <p>
              Our Trained Professional Staff is the best in the business and
              fully qualified to do their job right the first time.
            </p>
          </div>
        </div>
      </div>
      <div className='sub-section-4'>
        <div class='row'>
          <div class='col-xs-7 col-sm-12 col-lg-6'>
            <h1>About US</h1>
            <hr className='sub-hr' style={{ width: '30%' }}></hr>
            <p>
              McMahon Group Australia specializes in providing high-quality
              electrical work for Melbourne’s commercial, construction,
              maintenance and industrial sectors. McMahon Group Australia bring
              a fresh, dynamic approach to electrical contracting through a
              focus on servicing and delivering creative electrical solutions to
              the market. McMahon Group Australia strives to provide a one-stop
              shop for all electrical needs, with professional follow up and
              support every step of the way. As a result, McMahon Group
              Australia are fast becoming one of Melbourne’s most reputable
              electrical contracting and maintenance business.
            </p>
            <div className='row'>
              <div className='col-xs-7 col-sm-12 col-lg-2'>
                <h3>
                  <HiOutlineLightBulb className='react-icon' />
                  Our Vision
                </h3>
                <p>
                  McMahon Group Australiaia work collaboratively with clients to
                  ensure their expectations are clearly understood. Using the
                  highest quality products customer satisfaction is guaranteed,
                  professional electrical advice, dependable service etc.
                </p>
              </div>
              <div className='col-xs-7 col-sm-12 col-lg-2'>
                <h3>
                  <FaReact className='react-icon' />
                  Our Mission
                </h3>
                <p>
                  The same professional approach is employed across all sectors,
                  whether it be commercial, construction or maintenance
                  contracts. We pride ourselves on the relationships we have
                  established with our clients.
                </p>
              </div>
            </div>
          </div>
          <div class='col-image col-xs-7 col-sm-12 col-lg-6'>
            <h1 className='col-h'>Our Skills</h1>
            <hr style={{ width: '20%' }}></hr>
            <h3 className='col-h'>Security</h3>
            <hr></hr>
            <h3 className='col-h'>Electrical</h3>
            <hr></hr>
            <h3 className='col-h'>Air Conditioning and heating</h3>
            <hr></hr>
            <h3 className='col-h'>Hazardous areas</h3>
            <hr></hr>
          </div>
        </div>
      </div>
      <div className='maindiv'>
        <div className='contact col-xs-7 col-sm-12 col-lg-6'>
          <h1 style={{ marginleft: '10px' }}>Contact us</h1>
          <br></br>
          <hr style={{ width: '5%', color: 'red', border: '10px' }}></hr>
          <br></br>
          <h4>
            <AiOutlineMail className='contact-image' />
            sales@mcmga.com.au
          </h4>
          <hr style={{ width: '5%' }}></hr>
          <h4>
            <BsFillTelephoneFill className='contact-image' />
            1300 8516 17
          </h4>
          <hr style={{ width: '5%' }}></hr>
          <h4>
            <AiOutlineClockCircle className='contact-image' />
            Monday-Friday:9am-5am
          </h4>
        </div>

        <div className='col-xs-7 col-sm-12 col-lg-6'>
          <form action=''>
            <h1>Send Us a Message</h1>
            <label for=''>Name</label>
            <br />
            <input type='text' />
            <br />
            <label for=''>Email</label>
            <br />
            <input style={{ width: '100%' }} type='email' />
            <br />
            <label for=''>Message</label>
            <br />
            <textarea name='message' id='' cols='30' rows='10'></textarea>
            <input type='submit' />
          </form>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;

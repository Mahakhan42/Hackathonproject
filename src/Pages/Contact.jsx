import React from 'react';
import { Navbar_Component } from '../Components/Navbar_Component';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosTime } from 'react-icons/io';
import { Footer_Components } from '../Components/Footer_Components';

const Contact = () => {
  return (
    <div>
      <Navbar_Component />
      <div className="banner" style={{ backgroundImage: 'url("/src/assets/img/banner.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '500px', textAlign: 'center', color: '#fff', position: 'relative', width: '100%' }}>
        <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
        <div className="content" style={{ position: 'relative', zIndex: 1, paddingTop: '200px' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '40px' }}> <b>Contact Us</b></h1>
        </div>
      </div>
      <br /><br /><br />
      {/* section 2 */}
      <div className="container" style={{ background: '#fff' }}>
      <br /><br />
        <div className="row">
          <div className="col-md-6">
            <h2><b>Get In Touch</b></h2><br />
            <p>On the other hand, we denounce with righteous indignation and dislike men who <br /> are so beguiled and righteous indignation and dislike men by the charms</p>
            <br /><input type="text" placeholder='First Name' className='w-50 p-3' required />
            <input type="text" placeholder='Last Name' className='w-50 p-3' required /><br /><br />
            <input type="text" placeholder='Email' className='w-50 p-3' required />
            <input type="text" placeholder='Subject' className='w-50 p-3' required /><br /><br />
            <input type="text" placeholder='Message' className='w-100 p-5 p-3' required /><br /><br />
            <button type='submit' style={{ background: 'red', width: '100%', padding: '20px 50px', color: '#fff', border: 'none' }}>Submit Request</button>
          </div>
          <div className="col-md-6" style={{ background: 'red', color: '#fff', maxWidth: '600px' }}>
            <br /><h4><b>Blood Excellence!</b></h4><br />
            <h2><b>Expanded Blood Donate <br /> Services Here</b></h2><br />
            <p>On the other hand, we denounce with <br /> righteous indignation and dislike men who <br /> are so beguiled and demoralized by the <br /> charms</p><br />
            <h6><FaPhone size={'20px'} />&nbsp;&nbsp;Emergency Line: (002) 012612457</h6><br />
            <h6><FaMapMarkerAlt size={'20px'} />&nbsp;&nbsp; Location: Street 68, Mahattan, New York</h6><br />
            <h6><IoIosTime size={'20px'} />&nbsp;&nbsp; Mon - Fri: 8:00 am - 7:00 pm</h6><br />
          </div>
        </div>
        <br /><br /><br />
      </div>
      <br /><br /><br />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28947.94472545627!2d67.0120114132547!3d24.9152667569577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ee7e8cf9c9d%3A0x9d7fdf3371f299ff!2sLiaquat%20National%20Hospital%20-%20Institute%20for%20Undergraduate%20and%20Postgraduate%20Medical%20Studies%20and%20Health%20Sciences!5e0!3m2!1sen!2s!4v1710507185630!5m2!1sen!2s" width='100%' height="500" style={{ border: '6px solid #ccc' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <br /><br /><br /><br />
      <Footer_Components />
    </div>
  );
}

export { Contact };

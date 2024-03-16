import React from 'react'
import { Navbar_Component } from '../Components/Navbar_Component'
import { Footer_Components } from '../Components/Footer_Components'

const About = () => {
  return (
    <div>
      <Navbar_Component />
      <div className="banner" style={{ backgroundImage: 'url("/src/assets/img/banner.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '500px', textAlign: 'center', color: '#fff', position: 'relative', width: '100%' }}>
        <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
        <div className="content" style={{ position: 'relative', zIndex: 1, paddingTop: '200px' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '40px' }}> <b>About us</b></h1>
        </div>
      </div>
      <br /><br /><br />
      {/* section 2 */}
      <div className="container">
        <div className="row">
        <div className="col-md-6">
          <h1><b>Who We Are</b></h1>
          <br />
          <h4><b>We are here not for income, but for outcome</b></h4>
          <br />
          <p>
"Blood Unity" is more than just a blood donation platform; it's a testament to humanity's compassion and resilience. We're dedicated to saving lives and strengthening communities through the power of blood donation. With a focus on transparency, efficiency, and integrity, we've built a community of donors who embody the spirit of giving. Together, we're making a tangible difference in the lives of those in need. Join us in our mission to create a healthier, more compassionate world. <br /> <br />  "Blood Unity" is a beacon of hope, connecting donors with those in need. With a commitment to transparency and efficiency, we're making a meaningful impact in the lives of countless individuals. Join us in our mission to save lives and strengthen communities through the power of blood donation. Together, we can make a difference that lasts a lifetime.</p>
        </div>
        <div className="col-md-6" style={{background:'#fff' ,padding:'15px'}}>
          <img width='100%'  src="\src\assets\img\ab1.jpg" alt="" />
        </div>
        </div>
      </div><br /><br /><br /><br />
      <Footer_Components/>
    </div>
  )
}

export {About} 

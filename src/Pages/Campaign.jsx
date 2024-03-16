import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowForward } from "react-icons/md";
import { Footer_Components } from '../Components/Footer_Components';
import { Navbar_Component } from '../Components/Navbar_Component';

const Campaign = () => {
  return (
    <>
      <Navbar_Component />
      <div className="banner" style={{ backgroundImage: 'url("/src/assets/img/banner.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '500px', textAlign: 'center', color: '#fff', position: 'relative', width: '100%' }}>
        <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
        <div className="content" style={{ position: 'relative', zIndex: 1, paddingTop: '200px' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '40px' }}> <b> Campaigns</b></h1>
        </div>
      </div>
      <br /><br /><br />
      {/* section 2 */}
      <div className="container">
        <h5 style={{ color: 'red' }} align='center'>DONATE NOW</h5>
        <h1 align='center'><b>Popular Campaigns</b></h1>
        <br />
        <div className="row g-4 justify-content-center">
          <div className="col-md-6" style={{ backgroundColor: '#fff', padding: '10px' }}>
            <img width='100%' src="\src\assets\img\c1.png" alt="" /><br /><br />
            <h2><b>Blood Group Collection</b></h2>
            <p>These are grouped into collections, which consist of serologically, biochemically, or genetically related antigens. The blood groups in this chapter are divided into three categories: potentially clinical significant; sometimes clinically significant; and  not considered clinically significant.</p>
          </div>
          <div className="col-md-6" style={{ backgroundColor: '#fff', padding: '10px', gap: '2px' }}>
            <img width='100%' src="\src\assets\img\c2.png" alt="" /><br /><br />
            <h2><b>Blood Group Collection</b></h2>
            <p>These are grouped into collections, which consist of serologically, biochemically, or genetically related antigens. The blood groups in this chapter are divided into three categories: potentially clinical significant; sometimes clinically significant; and  not considered clinically significant.</p>
          </div>
          {/* 2 */}
          <div className="col-md-6" style={{ backgroundColor: '#fff', padding: '10px' }}>
            <br /><br />
            <img width='100%' src="\src\assets\img\c3.png" alt="" /><br /><br />
            <h2><b>Blood Group Collection</b></h2>
            <p>These are grouped into collections, which consist of serologically, biochemically, or genetically related antigens. The blood groups in this chapter are divided into three categories: potentially clinical significant;sometimes clinically significant; and  not considered clinically significant.</p>
          </div>
          <div className="col-md-6" style={{ backgroundColor: '#fff', padding: '10px' }}>
            <br /><br />
            <img width='100%' src="\src\assets\img\c4.png" alt="" /><br /><br />
            <h2><b>Blood Donation Camp</b></h2>
            <p>These are grouped into collections, which consist of serologically, biochemically, or genetically related antigens. The blood groups in this chapter are divided into three categories: potentially clinical significant; sometimes clinically significant; and  not considered clinically significant.</p>
          </div>
          {/* 3 */}
          <div className="col-md-6" style={{ backgroundColor: '#fff', padding: '10px' }}>
            <br /><br />
            <img width='100%' src="\src\assets\img\c5.png" alt="" /><br /><br />
            <h2><b>Blood Group Collection</b></h2>
            <p>These are grouped into collections, which consist of serologically, biochemically, or genetically related antigens. The blood groups in this chapter are divided into three categories: potentially clinical significant;sometimes clinically significant; and  not considered clinically significant.</p>
          </div>
          <div className="col-md-6" style={{ backgroundColor: '#fff', padding: '10px' }}>
            <br /><br />
            <img width='100%' src="\src\assets\img\c6.png" alt="" /><br /><br />
            <h2><b>Free Group Checking</b></h2>
            <p>You’re looking for ways to get your blood type checked for free. Well, the good news is that there is a way to do it. Before we divulge the ways to get your blood type checked for free, it’s important to understand why you should know it. </p>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <br /><br /><br />
      {/* section3 */}
      <div style={{ background: 'red', color: '#fff', padding: '50px' }}>
        <div className="text-center">
          <div className="row">
            <div className="col-md-6">
              <h2><b>Let's change the world, Join us now!</b></h2>
            </div>
            <div className="col-md-6">
             <Link to='/Contact'> <button style={{ background: '#fff', padding: '15px 40px', border: 'none', color: '#000' }}> <b>Contact Us</b> </button></Link>

            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
      {/* section4 */}
      <div className="container">
        <h1 align='center'><b>Campaign Details</b></h1><br />
        <div className="row">
          <div className="col-md-6"  style={{ backgroundColor: '#fff', padding: '10px' }}>
            <img width='100%' src="\src\assets\img\cd1.png" alt="" /><br /><br />
            <h2><b>Blood Group Collection</b></h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <br /> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,</p>
          </div>
          {/* 2 */}
          <div className="col-md-6" style={{ background: '#ccc', borderRadius: '50px', padding: '10px' }}> <br /><br />
            <h1><b> Categories</b></h1><br /><br />
            <h6><MdArrowForward size={'20px'} style={{ color: 'red' }} /> Blood Equipment</h6><hr />
            <h6> <MdArrowForward size={'20px'} style={{ color: 'red' }} /> Dependent Things</h6><hr />
            <h6><MdArrowForward size={'20px'} style={{ color: 'red' }} /> Donation Care</h6><hr />
            <h6><MdArrowForward size={'20px'} style={{ color: 'red' }} /> Donation News</h6><hr />
            <h6> <MdArrowForward size={'20px'} style={{ color: 'red' }} /> Help People</h6><hr />
          </div><br />
          <div className="col-md-6"  style={{ backgroundColor: '#fff', padding: '10px' }}>
            <h1><b>Our main goals</b></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <h6><b> <MdArrowForward size={'20px'} style={{ color: 'red' }} /> These cases are perfectly simple distinguish.</b></h6>
            <h6><b> <MdArrowForward size={'20px'} style={{ color: 'red' }} /> These cases are perfectly simple distinguish.</b></h6>
            <h6><b> <MdArrowForward size={'20px'} style={{ color: 'red' }} /> These cases are perfectly simple distinguish.</b></h6>
            <br /> <img width='100%' src="\src\assets\img\cd2.png" alt="" />
          </div>
          <div className="col-md-6"  style={{ backgroundColor: '#fff', padding: '10px' }}>
            <br /><br /><br /><br /><br /><br />
            <h6><b><MdArrowForward size={'20px'} style={{ color: 'red' }} /> These cases are perfectly simple distinguish.</b></h6>
            <h6><b> <MdArrowForward size={'20px'} style={{ color: 'red' }} /> These cases are perfectly simple distinguish.</b></h6>
            <h6><b> <MdArrowForward size={'20px'} style={{ color: 'red' }} /> These cases are perfectly simple distinguish.</b></h6>
            <br /> <img width='100%' src="\src\assets\img\cd3.png" alt="" />
          </div>
        </div>
      </div>
      <br /><br /><br /><br />
      <Footer_Components />
    </>
  )
}

export { Campaign }

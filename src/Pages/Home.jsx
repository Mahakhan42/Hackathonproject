import React from "react";
import { MdLogin } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { Navbar_Component } from "../Components/Navbar_Component";
import { Footer_Components } from "../Components/Footer_Components";
import { Slider } from "../Components/Slider";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
 <Navbar_Component/>
 <Slider/>
      <br /> <br /><br />
      {/* Section 1 */}
      <div className="container">
        <div className="row">
          <div
            className="col-md-6"
            style={{ background: "black", padding: "30px", color: "#fff" }}
          >
            <h2>
             <Link to='/'class="nav-link text-white" ><b>Register Now</b></Link> 
            </h2>
            <p>
              Nor again is there anyone who loves or pursues or <br /> desires
              to obtain pain of itself, because it is pain,
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <MdLogin size={"30px"} />
            </p>
          </div>
          <div
            className="col-md-6"
            style={{ background: "Red", padding: "30px", color: "#fff" }}
          >
            <h2>
            <Link to='/DonateNow'class="nav-link text-white" > <b>Donate Now</b></Link>
            </h2>
            <p>
              Nor again is there anyone who loves or pursues or <br /> desires
              to obtain pain of itself, because it is pain,
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <MdLogin size={"30px"} />{" "}
            </p>
          </div>
        </div>
      </div>
      {/* Section 1 */}
      <br />
      <br />
      <br />
      {/* section 2 */}
      <div className="container">
        <div className="row gap-6 p-3">
          {/* 1 */}
          <div className="col-md-4 shadow-sm p-3 mb-5 bg-body rounded">
            <div class="card">
              <img  width='100%' src="\src\assets\img\1.png" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h3 class="card-title"><b>Become a Donor</b></h3>
                <h6 class="card-text">
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give pleasure
                </h6>
                <br />
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-md-4 shadow-sm p-3 mb-5 bg-body rounded">
            <div class="card">
              <img  width='100%' src="\src\assets\img\2.png" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h3 class="card-title"><b>Why Give Blood?</b></h3>
                <h6 class="card-text">
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give pleasure
                </h6>
                <br />
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-md-4 shadow-sm p-3 mb-5 bg-body rounded">
            <div class="card">
              <img  width='100%' src="\src\assets\img\3.png" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h3 class="card-title"><b>How Donations Helps</b></h3>
                <h6 class="card-text">
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give pleasure
                </h6>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <br /><br /><br />
     {/* section 3 */}
     <div className="container">
      <div className="row">
        <div className="col-md-6" >
          <img  width='100%' src="\src\assets\img\4.png" alt="" />
        </div>
        <div className="col-md-4">
          <h5 className="text-danger">HELP THE PEOPLE IN NEED</h5>
          <h1><b>Welcome to Blood Donors Organization</b></h1><br />
          <p>Welcome to the Blood Donors Organization, where compassion meets action. Our mission is simple yet profound: to connect generous donors with those in critical need of life-saving blood transfusions. We understand the urgency and importance of ensuring an adequate blood supply for patients facing medical emergencies, surgeries, and ongoing treatments. Through our platform, donors can easily register and find opportunities to contribute, while recipients can access the vital support they require. Together, we make a tangible difference in the lives of countless individuals, offering hope, healing, and the promise of a brighter tomorrow. Join us in this noble cause, as every donation has the power to save a life.</p>
          <div className="row">
          <div className="col-md-4">
          <h6><b> <MdArrowForward size={'20px'} style={{color:'red'}}/>Good Service</b></h6>
          <h6><b> <MdArrowForward size={'20px'} style={{color:'red'}}/>Help People</b></h6>  
          <h6><b> <MdArrowForward size={'20px'} style={{color:'red'}}/>Hygine Tools</b></h6>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="col-md-4">
          <h6><b> <MdArrowForward size={'20px'} style={{color:'red'}}/>24h Service</b></h6>
          <h6><b> <MdArrowForward size={'20px'} style={{color:'red'}}/>Health Check</b></h6>  
          <h6><b> <MdArrowForward size={'20px'} style={{color:'red'}}/>Blood Bank</b></h6>  
          </div>
        </div>
        <br />
        <Link to='/Service'><button style={{background:'red',padding:'15px 40px',border:'none',color:'#fff'}}>Explore Now</button></Link>
        </div>
      </div>
     </div>
    {/* section 3 */}
    <br /><br /><br />
    {/* section 4 */}
    <div className="container">
      <h5 className="text-danger text-center">WHAT WE DO</h5>
      <h1 className="text-center"><b>Our Best Services</b></h1>
      <br /><br /><br />
      <div className="row">
        <div className="col-md-6" style={{background:'#fff',padding:'10px'}}>
          <img  width='100%' src="\src\assets\img\5.png" alt="" />
        </div>
        <div className="col-md-6">
          <h1 style={{fontSize:'100px',color:'#ccc'}}>01</h1><br />
        <h2><b>Blood Donation</b></h2>
      <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorpe matti pulvinar dapibus leo dolor sit amet, consectetur adipiscing amet, consectetur.</p>
     <Link to='Service'> <button style={{background:'red',padding:'15px 40px',border:'none',color:'#fff'}}>Read More</button></Link>
        </div>
        {/* 2 */}
        <div className="col-md-6">
        <br /><br />
        <h1 style={{fontSize:'100px',color:'#ccc'}}>02</h1><br />
        <h2><b>Health Check</b></h2>
           <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorpe matti pulvinar dapibus leo dolor sit amet, consectetur adipiscing amet, consectetur.</p>
           <Link to='Service'>  <button style={{background:'red',padding:'15px 40px',border:'none',color:'#fff'}}>Read More</button></Link>
        </div>
        <div className="col-md-6" style={{background:'#fff',padding:'10px'}}>
          <img  width='100%' src="\src\assets\img\6.png" alt="" />
        </div>
        {/* 3 */}
        <div className="col-md-6" style={{background:'#fff',padding:'10px'}}>
          <img width='100%' src="\src\assets\img\7.png" alt="" />
        </div>
        <div className="col-md-6">
          <br /><br />
          <h1 style={{fontSize:'100px',color:'#ccc'}}>03</h1><br />
        <h2><b>Blood Bank</b></h2>
      <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorpe matti pulvinar dapibus leo dolor sit amet, consectetur adipiscing amet, consectetur.</p>
      <Link to='Service'> <button style={{background:'red',padding:'15px 40px',border:'none',color:'#fff'}}>Read More</button></Link>
        </div>
      </div>
    </div>
    <br /><br /><br />
    {/* section 4 */}
    <div className=" container text-center" style={{background:'#fff',padding:'10px'}}>
    <img width='100%' src="https://static.mothership.sg/1/2020/02/red-cross-blood-shortage-feb-2020.gif" alt="" />
    </div>
    <br /><br /><br /><br />
    <Footer_Components/>
    </>
  );
};

export { Home };

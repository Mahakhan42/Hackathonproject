import React from 'react';
import { Link } from 'react-router-dom';

const Navbar_Component = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top p-2">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h2 style={{color:'red',fontWeight:'700'}}><strong>BLOOD UNITY</strong></h2></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/Home'>Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/About' class="nav-link">About</Link>
        </li>
        <li class="nav-item">
         <Link to='/Campaign' class="nav-link">Campaign</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Pages
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to='/Blog'>Blog</Link></li>
            <li><Link class="dropdown-item" to='/PrivacyPolicy'>Privacy Policy</Link></li>
            <li><Link to='/Service' class="dropdown-item">Our Service</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/Contact'>Contact us</Link>
        </li>
       
        <Link to='/DonateNow'><button style={{background:'red',padding:'10px 10px',border:'none',color:'#fff',borderRadius:'5px'}}> <b>Donate Now</b> </button></Link>&nbsp;&nbsp;
        <Link to='/Login'><button style={{background:'red',padding:'10px 10px',border:'none',color:'#fff',borderRadius:'5px'}}> <b>Logout</b> </button></Link>
      </ul>
    </div>
  </div>
</nav>
<br /><br /><br />
    </>
  );
}

export { Navbar_Component };

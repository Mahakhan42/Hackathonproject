import React from 'react'
import { Link } from 'react-router-dom'

const Footer_Components = () => {
  return (
    <div className='footer' style={{background:'  rgb(249, 235, 237)',padding:'10px'}}>
      <div className="container">
      <br /><br />
        <div className="row">
            <div className="col-md-4">
            <h2 style={{color:'red',fontWeight:'700'}}><strong>BLOOD UNITY</strong></h2><br />
            <h6>Duis aute irure dolor in reprehenderit <br /> velit  esse cillum dolore eu fugiat nulla  <br /> pariatur. Excepteur sint occaecat</h6>
            <br />
            <h6><b>Phone No : 0356897895</b></h6>
            <h6><b>Email : bloodunity@gmail.com</b></h6>
            </div>
            <div className="col-md-4">
                <h3><b>USEFUL LINKS</b></h3>
                <ul><br />
                  <li style={{listStyle:'none'}}><Link style={{color:'black'}} to='/Home'>Home</Link></li>
                  <li style={{listStyle:'none'}}><Link style={{color:'black'}} to='/About'>About</Link></li>
                  <li style={{listStyle:'none'}}><Link style={{color:'black'}} to='/Campaign'>Campaign</Link></li>
                  <li style={{listStyle:'none'}}><Link style={{color:'black'}} to='/Service'>Our Service</Link></li>
                  <li style={{listStyle:'none'}}><Link style={{color:'black'}} to='/Blog'>Blog</Link></li>
                  <li style={{listStyle:'none'}}><Link style={{color:'black'}} to='/PrivacyPolicy'>Privacy policy</Link></li>
                  <li style={{listStyle:'none'}}><Link style={{color:'black'}} to='/Contact'>Contact</Link></li>
                </ul>
            </div>
            <div className="col">
            <h3><b>LATEST NEWS</b></h3><br />
            <h6><img src="\src\assets\img\f1.png" alt="" /> A Formula For Help And Happiness </h6>
            <h6><img src="\src\assets\img\f2.png" alt="" /> Donation is hope for poor helpless children</h6>
            </div>
        </div>
        <br /><br />
         <hr /><br />
         <div className="row">
          <div className="col-md-6">
            <h5><b>Subscribe us for more update & news !!</b></h5><br />
            <input className='p-2 w-50' type="text" placeholder='Enter Your Email' required/><button style={{background:'red',padding:'10px 40px',border:'none',color:'#fff'}}><b>Subscribe</b></button>
          </div>
          <div className="col-md-6 icons">
            <br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='https://www.facebook.com' > <i class="bi bi-facebook fs-4" ></i></Link>&nbsp;&nbsp;&nbsp;
          <Link to='https://www.instagram.com'>  <i class="bi bi-instagram fs-4"></i></Link>&nbsp;&nbsp;&nbsp;
          <Link to='https://www.twitter.com'>  <i class="bi bi-twitter fs-4" ></i></Link>&nbsp;&nbsp;&nbsp;
          <Link to='https://www.pinterest.com'>  <i class="bi bi-pinterest fs-4"></i></Link>
          </div>
         </div> <br /><br /><hr />
         <br />
         <center><h6>Copyright©Bloodunity.webApp</h6></center>
      </div>
    </div>
  )
}

export {Footer_Components}



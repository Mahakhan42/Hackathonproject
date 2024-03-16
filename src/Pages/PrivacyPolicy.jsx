import React from 'react'
import { Navbar_Component } from '../Components/Navbar_Component'
import { BiSolidRightArrowCircle } from "react-icons/bi";
import { Footer_Components } from '../Components/Footer_Components';

const PrivacyPolicy = () => {
  return (
    <div>
        <Navbar_Component/>
        <div className="banner" style={{ backgroundImage: 'url("/src/assets/img/banner.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '500px', textAlign: 'center', color: '#fff', position: 'relative', width: '100%' }}>
        <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
        <div className="content" style={{ position: 'relative', zIndex: 1, paddingTop: '200px' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '40px' }}> <b>PrivacyPolicy</b></h1>
        </div>
      </div>
      <br /><br /><br />
      {/* section 1 */}
      <div className="container">
        <h1><b>Privacy Policy for Blut</b></h1><br />
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. <br /> <br />It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        <br />
        <h1><b>Consent</b></h1><br />
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
        <br />
        <h1><b>Information collection</b></h1><br />
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, <br /><br />looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. <br /><br />Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        <br />
        <h1><b>How we use your information</b></h1><br />
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,</p><br />
        <p><BiSolidRightArrowCircle  size={'25px'} style={{color:'red'}}/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        <br /><br /><BiSolidRightArrowCircle  size={'25px'} style={{color:'red'}}/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br /><br />
        <BiSolidRightArrowCircle  size={'25px'} style={{color:'red'}}/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br /><br />
        <BiSolidRightArrowCircle  size={'25px'} style={{color:'red'}}/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <br />
        <h1><b>Our File Logs</b></h1><br />
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, <br /><br />looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
        <br /><h1><b>Advertising Partners Privacy Policies</b></h1><br />
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. <br /><br />Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from But who has any right to find fault with a man</p>
        <br /><h1><b>CCPA Privacy Rights (Do Not Sell My Personal Information)</b></h1><br />
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. <br /><br />Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from But who has any right to find fault with a man</p>
        <br /><h1><b>Blood Donate Information</b></h1><br />
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. <br /><br />Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from But who has any right to find fault with a man</p>
      </div>
      <br /><br /><br /><br />
      <Footer_Components/>
    </div>
  )
}

export {PrivacyPolicy} 

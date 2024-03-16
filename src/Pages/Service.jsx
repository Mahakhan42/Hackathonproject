import React from 'react'
import { Navbar_Component } from '../Components/Navbar_Component'
import { Footer_Components } from '../Components/Footer_Components'

const Service = () => {
  return (
    <div>
        <Navbar_Component/>
        <div className="banner" style={{ backgroundImage: 'url("/src/assets/img/banner.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '500px', textAlign: 'center', color: '#fff', position: 'relative', width: '100%' }}>
        <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
        <div className="content" style={{ position: 'relative', zIndex: 1, paddingTop: '200px' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '40px' }}> <b>Our Service</b></h1>
        </div>
      </div>
      <br /><br /><br />
      {/* section 1 */}
      <div className="container">
        <h1><b>Know More Us of Our Blood Donate Services</b></h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <br /><br />Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,</p>
        <br />
        <img width='100%' src="\src\assets\img\s1.png" alt="" />
        <br /><br />
        <h1><b>Your Blood Donate Can Change Someone’s Life</b></h1><br />
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, <br /><br />sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        <br /><h1><b>Donation Process</b></h1><br />
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, eaque quae illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <div className="row">
    <div className="col-md-4 text-center">
        <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '20px' }}>
            <img width='20%' src="\src\assets\img\registration.png" alt="" style={{ backgroundColor: 'red', borderRadius: '10px' }} />
            <h2><b>Registration</b></h2>
        </div>
    </div>
    <div className="col-md-4 text-center">
        <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '20px' }}>
            <img width='20%' src="\src\assets\img\s2.png" alt="" style={{ backgroundColor: 'red', borderRadius: '10px' }} />
            <h2><b>Screening Test</b></h2>
        </div>
    </div>
    <div className="col-md-4 text-center">
        <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '20px' }}>
            <img width='20%' src="\src\assets\img\s3.png" alt="" style={{ backgroundColor: 'red', borderRadius: '10px' }} />
            <h2><b>Blood Donate</b></h2>
        </div>
    </div>
</div>
<br /><br />
     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration some form, by injected humour, or randomised words which don't look even slightly believable. If you are going use passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden</p>
     <div className="row">
        <div className="col-md-6">
            <img width='100%' src="\src\assets\img\cd2.png" alt="" />
        </div>
        <div className="col-md-6">
            <img width='100%' src="\src\assets\img\cd3.png" alt="" />
        </div>
     </div>
     <br />
      </div>
      <br /><br /> <br />
<Footer_Components/>
    </div>
  )
}

export {Service} 

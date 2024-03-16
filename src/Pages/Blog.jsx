import React from 'react'
import { Navbar_Component } from '../Components/Navbar_Component'
import { Footer_Components } from '../Components/Footer_Components'

const Blog = () => {
  return (
    <div>
            <Navbar_Component />
      <div className="banner" style={{ backgroundImage: 'url("/src/assets/img/banner.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '500px', textAlign: 'center', color: '#fff', position: 'relative', width: '100%' }}>
        <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
        <div className="content" style={{ position: 'relative', zIndex: 1, paddingTop: '200px' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '40px' }}> <b>Blog</b></h1>
        </div>
      </div>
      <br /><br /><br />
      {/* section 2 */}
      <div className="container" style={{background:'#fff'}} ><br />
        <img width='100%' src="\src\assets\img\b1.png" alt="" />
        <br /><br />
        <h1><b>Donation is hope for the poor helpless children</b></h1><br />
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
<br /><br /><h1><b>Don’t Do This Activity After You Donating Your Blood</b></h1><br />
<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
<br />
<img width='100%' src="\src\assets\img\b2.jpg" alt="" />
<br /><br />
<h1><b>Donation is hope for the poor helpless children</b></h1><br />
<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.

All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. <br /><br />There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, <br /><br />you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.</p>
<br />
<iframe width="100%" height="500" src="https://www.youtube.com/embed/6tl7hB1V-os?si=scq_oisp0e5kknAH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br /><br />
<h1><b>Your Help Can Make Someone life Better.</b></h1><br />
<h4>Donating blood can seem intimidating, but it’s an easy process that can help save someone’s life.</h4><br />
<p>Helping others can truly make a difference in someone's life, often in ways we may never fully realize. Whether it's offering a kind word, lending a hand, or providing support in times of need, our actions can have a profound impact on others. Sometimes, a simple act of kindness can brighten someone's day, lift their spirits, or even change the course of their life for the better. By extending a helping hand, we not only improve the lives of those we assist but also contribute to creating a more compassionate and connected society. Each small gesture has the potential to create a ripple effect, spreading positivity and kindness far beyond its initial act. In this way, our willingness to help can truly make someone's life better and inspire others to do the same.</p>
<br />
      </div>
      <br /><br /><br /><br />
      <Footer_Components/>

    </div>
  )
}

export {Blog} 

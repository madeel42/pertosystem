import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './about.css'
import aboutusimg from './../../assets/aboutus.jpg'
// import webprocess from './../../assets/webprocess.png'
import Fade from 'react-reveal/Fade';
class Aboutus extends React.Component {
    render() {
        return <div class="container allabout">
            {/* <strong><h1 className="text-center">About Us</h1></strong> */}
        <div class="row">
          <div class="col-sm">
        <Zoom> <img src={aboutusimg} className='imgstyl' /></Zoom>
            
          </div>
        </div>
        <div class="row">
    <div class="col-sm stylabout">
    {/* <h1 className='text-center'><strong>About us</strong></h1> */}
                      <p>We started this company for the petrol industry. To provide cheaper and keeping the quality, efficiency and practical solutions.
                          We operate in Suriname, South America and provide our services to SOL Suriname N.V.
 </p>
                     <p>Petro Data Systems Provides Innovative Automation Solutions for Gas Stations
 We provide solutions that integrate with gas pumps, shop sales (POS), oil sales, and back-office among other solutions.
 Petrol Data Systems provides the best, quality, efficient,
  and practical IT solutions for petroleum industry so
  that you can just concentrate on other important aspects of your business.
  </p>
                     <p><strong>CEO:</strong><span>Resokasman, Sergio Jusuf</span></p>
                     <p></p>
                     <p><strong>Partners:</strong><span>Authorized Reseller EZtech</span></p>
    </div>
  </div>
      </div>
      
//         return <div className="container-fluid">
//             {/* <strong><h1 className="text-center">About Us</h1></strong> */}
//             <div className="row">
//                 <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">

//                 </div>
//                 <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
//                     <Zoom> <img src={aboutusimg} className='imgstyl' /></Zoom>
//                 </div>
//                 <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">

//                 </div>
//             </div>
//             <div className="row">

//                 <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                     <Zoom> <h1 className='text-center'><strong>About us</strong></h1></Zoom>
//                     <Zoom> <p>We started this company for the petrol industry. To provide cheaper and keeping the quality, efficiency and practical solutions.
//                          We operate in Suriname, South America and provide our services to SOL Suriname N.V.
// </p></Zoom>
//                     <Fade left><p>Petro Data Systems Provides Innovative Automation Solutions for Gas Stations
// We provide solutions that integrate with gas pumps, shop sales (POS), oil sales, and back-office among other solutions.
// Petrol Data Systems provides the best, quality, efficient,
//  and practical IT solutions for petroleum industry so
//  that you can just concentrate on other important aspects of your business.
//  </p></Fade>
//                     <p><strong>CEO:</strong><span>Resokasman, Sergio Jusuf</span></p>
//                     <p></p>
//                     <p><strong>Partners:</strong><span>Authorized Reseller EZtech</span></p>
//                 </div>
//             </div>
//         </div>
    }
}
export default Aboutus;


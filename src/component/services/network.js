import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './service.css'
import networkimg from './../../assets/networking-engineer.jpg'
// import webprocess from './../../assets/webprocess.png'
import Fade from 'react-reveal/Fade';
class networkService extends React.Component {
    render() {

        return <div>
            <strong><h1 className="text-center">Network Engineering Service</h1></strong>

            <div class="row">
                <div class="col-sm">
                    <h1 className='headingstyl'>Network Engineering</h1>
                    <p>Our team is made up of network engineers who will help your business plan,
                         implement, and oversee all your networking needs that support your in-house network services.
 </p>
                    <p>Our database systems will help you increase the accessibility of crucial business data,
      which in turn helps your staff to share data quickly and effectively within the organization. </p>
                </div>
                <div class="col-sm">
                    <Fade right>  <img src={networkimg}  style={{width: '106%',
    padding: '-3px',
    margin: '-10px'}}/></Fade>

                </div>
            </div>
        </div>
        //         return <div className="container-fluid">
        //             <strong><h1 className="text-center">Network Engineering Service</h1></strong>
        //             <div className="row">

        //                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
        //                     <Zoom> <h1 className='headingstyl'><strong>Network Engineering </strong></h1></Zoom>
        //                     <Zoom> <p>Our team is made up of network engineers who will help your business plan,
        //                          implement, and oversee all your networking needs that support your in-house network services. 
        // </p></Zoom>
        //                     <Fade left><p>Our database systems will help you increase the accessibility of crucial business data,
        //      which in turn helps your staff to share data quickly and effectively within the organization. </p></Fade>

        //                 </div>
        //                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
        //                     <Fade right>  <img src={networkimg} className='styl' /></Fade>
        //                 </div>
        //             </div>
        //         </div>
    }
}
export default networkService;


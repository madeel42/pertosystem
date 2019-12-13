import React from 'react';
import './content.css'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import pumpimg from './../../assets/img_Side_1_0.png'
import pumpimg2 from './../../assets/img_slide3.png'

class Contents extends React.Component {
    render() {
        return <div>
            <div class="row">
                <div class="col-sm">
                    <h1 className='headingstyl'><strong>Innovative Automation Solutions for Gas Stations:</strong></h1>
                    <p>Petrol Data Systems provides automation solutions for gas stations. Our solutions are integrated with pumps, shop sales (POS), oil sales, and back-office among others.
                   Petrol Data Systems provides the best, quality, efficient, and practical IT solutions for petroleum industry so that you can just concentrate on other important aspects of your business.</p>
                </div>
                <div class="col-sm">
                    <Fade right>  <img src={pumpimg2} className='imgsty' style={{width: '104%',
    padding: '-3px',
    margin: '-10px'}}  /></Fade>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <Fade left> <img className='imgsty' src={pumpimg} alt="" style={{width: '104%',
    padding: '-3px',
    margin: '-10px'}}  /></Fade>

                </div>
                <div class="col-sm">
                    <h1 className='headingstyl'><strong>Trusted Partner:</strong></h1>
                    <p>Our company has developed a good working relationship with all our clients and many gas stations and other petrol businesses in Suriname have
                 continued to trust us to provide them with automation for gas stations solutions.</p>
                </div>
            </div>
        </div>
        // return <div className="container-fluid">
        //     <div className="row">
        //         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
        //             <h1 className='headingstyl'><strong>Innovative Automation Solutions for Gas Stations:</strong></h1>
        //             <p>Petrol Data Systems provides automation solutions for gas stations. Our solutions are integrated with pumps, shop sales (POS), oil sales, and back-office among others.
        //            Petrol Data Systems provides the best, quality, efficient, and practical IT solutions for petroleum industry so that you can just concentrate on other important aspects of your business.</p>
        //             <button className='readmorestyl'>Read more</button></div>
        //         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
        //             <Fade right>  <img src={pumpimg2} className='imgsty' /></Fade>
        //         </div>


        //     </div>
        //     <div className="row ">
        //         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 "><div>
        //             <Fade left> <img className='imgsty' src={pumpimg} alt="" /></Fade></div></div>
        //         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 divstyl">
        //             <Zoom><h1 className='headingstyl'><strong>Trusted Partner:</strong></h1></Zoom>
        //             <p>Our company has developed a good working relationship with all our clients and many gas stations and other petrol businesses in Suriname have
        //          continued to trust us to provide them with automation for gas stations solutions.</p>
        //             <button>Read more</button>
        //         </div>
        //     </div>
        // </div>

    }
}
export default Contents;
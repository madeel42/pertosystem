import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './service.css'
import softwareimg from './../../assets/software-development.jpg'
import webprocess from './../../assets/webprocess.png'
import Fade from 'react-reveal/Fade';
class SoftWareService extends React.Component {
    render() {
        return <div>
                <h1 className="text-center"><strong>Software Development Service</strong></h1>
            <div class="row">
                <div class="col-sm">
                    <h1 className='headingstyl'>Software Development</h1>
                    <p>We design and develop custom software and mobile app solutions for companies in the petrol industry.
        Our packages cover all the IT solutions for the petrol industry to automate
        you the running of your day-day business tasks.
 </p>
                    <p>We develop mobile consumer apps as well as desktop system-level utilities and corporate web applications.
                    We deliver products that meet your goals as we assign analysts to all our projects to work on practicality and user experience.
                    At Petrol Data System, we know that running a gas station is not an easy task, but with our product, things will run seamlessly and you will even cut down IT solution costs.
 </p>
                </div>
                <div class="col-sm">
                    <Fade right>  <img src={softwareimg} className='styl' style={{width: '106%',
    padding: '-3px',
    margin: '-10px'}} /></Fade>

                </div>

            </div>

        </div>
        //         return <div className="container-fluid">
        //             <strong><h1 className="text-center">Software Development Service</h1></strong>
        //             <div className="row">

        //                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
        //                  <h1 className='headingstyl'><strong>Software Development</strong></h1>
        //                      <p>We design and develop custom software and mobile app solutions for companies in the petrol industry.
        // Our packages cover all the IT solutions for the petrol industry to automate
        // you the running of your day-day business tasks.
        // </p>
        // <p>We develop mobile consumer apps as well as desktop system-level utilities and corporate web applications. 
        // We deliver products that meet your goals as we assign analysts to all our projects to work on practicality and user experience. 
        // At Petrol Data System, we know that running a gas station is not an easy task, but with our product, things will run seamlessly and you will even cut down IT solution costs. 
        // </p>

        //                 </div>
        //                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
        //                     <Fade right>  <img src={softwareimg} className='styl' /></Fade>
        //                 </div>
        //             </div>
        //         </div>
    }
}
export default SoftWareService;


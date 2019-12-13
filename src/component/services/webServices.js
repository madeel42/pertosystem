import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './service.css'
import Webimg from './../../assets/Website-Design.jpg'
import webprocess from './../../assets/webprocess.png'

// import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
class WebService extends React.Component {
    render() {
        return <div>
            <h1 className="text-center"><strong> Web Development Service</strong></h1>
            <div class="row">

                <div class="col-sm">
                    <h1 className='headingstyl'>Web Development</h1>
                    <p>We have a team of dedicated developers who will create for you a dynamic website for your petrol business.
    Our process is simple step-by-step that will ensure we achieve the required automation for gas stations so that you can control everything from a single dashboard.
         </p>
                </div>
                <div class="col-sm">
                    <Fade right>  <img src={Webimg} className='styl' style={{width: '106%',
    padding: '-3px',
    margin: '-10px'}}/></Fade>

                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <Fade left> <img className='styl' style={{width: '106%',
    padding: '-3px',
    margin: '-10px'}} src={webprocess} alt="" /></Fade>

                </div>
                <div class="col-sm">
                    <h1 className='headingstyl'>Our processes include:</h1>
                    <p><strong>Planning:</strong></p>
                    <p>The team will develop a clear roadmap of your website and the projected audience, goals, and domain setup.
                                  Your website is the first marketing tool that will allow you to attract and interact with your audience. </p>
                    <p><strong>Designing:</strong></p>
                    <p>Using all the information we have gathered in the planning phase, we will design your website to match your business needs. We even upload the initial layout of your website to an interim server for you to review and ensure it just as you imagined it to be. We have expert graphic designers who will take care of designing your logo,
                              choosing the best color for the website according to your brand, and images. </p>
                    <p><strong>Development:</strong></p>
                    <p>Once you like the design of your website, our team will start developing the website.
                                   We will add quality content to your website starting with your home page.</p>
                    <p><strong>Finalizing:</strong></p>
                    <p>After completing the audit of your website and you are satisfied, we will move into the final stages of development,
                                       giving it an artistic touch that will grab the attention of online searchers. </p>
                    <p><strong>Launch:</strong></p>
                    <p>When everything is done and you like what you are seeing, we will launch the website </p>
                    <p><strong>Maintenance:</strong></p>
                    <p>We just don’t dump our customers like that after launching the website.
                                  It is our duty to keep your website updated and optimized so it runs properly.</p>

                </div>

            </div>
        </div>
        //         return <div className="container-fluid">
        //             <strong><h1 className="text-center">Web Development Service</h1></strong>
        //             <div className="row">
        //                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
        //                     <h1 className='headingstyl'><strong>Web Development</strong></h1>
        //                     <p>We have a team of dedicated developers who will create for you a dynamic website for your petrol business.
        //  Our process is simple step-by-step that will ensure we achieve the required automation for gas stations so that you can control everything from a single dashboard.
        // </p>
        //                     {/* <button className='readmorestyl'>Read more</button> */}
        //                 </div>
        //                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
        //                     <Fade right>  <img src={Webimg} className='styl' /></Fade>
        //                 </div>
        //             </div>
        //             <div className="row ">
        //                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 "><div>
        //                     <Fade left> <img className='styl' src={webprocess} alt="" /></Fade></div></div>
        //                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 divstyl">
        //                     <h1 className='headingstyl'><strong>Our processes include:</strong></h1>
        //                      <p><strong>Planning:</strong></p>
        //                     <p>The team will develop a clear roadmap of your website and the projected audience, goals, and domain setup.
        //                          Your website is the first marketing tool that will allow you to attract and interact with your audience. </p>
        //                      <p><strong>Designing:</strong></p>
        //                     <p>Using all the information we have gathered in the planning phase, we will design your website to match your business needs. We even upload the initial layout of your website to an interim server for you to review and ensure it just as you imagined it to be. We have expert graphic designers who will take care of designing your logo,
        //                      choosing the best color for the website according to your brand, and images. </p>
        //                     <p><strong>Development:</strong></p>
        //                     <p>Once you like the design of your website, our team will start developing the website.
        //                           We will add quality content to your website starting with your home page.</p>
        //                       <p><strong>Finalizing:</strong></p>
        //                     <p>After completing the audit of your website and you are satisfied, we will move into the final stages of development,
        //                               giving it an artistic touch that will grab the attention of online searchers. </p>
        //                    <p><strong>Launch:</strong></p>
        //                     <p>When everything is done and you like what you are seeing, we will launch the website </p>
        //                     <p><strong>Maintenance:</strong></p>
        //                     <p>We just don’t dump our customers like that after launching the website.
        //                          It is our duty to keep your website updated and optimized so it runs properly.</p>


        //                 </div>
        //             </div>
        //         </div>
    }
}
export default WebService;
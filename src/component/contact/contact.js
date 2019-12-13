import React from 'react';
import contctimg1 from './../../assets/contact1.jpg'
import contctimg2 from './../../assets/parts.jpg'
import contctimg3 from './../../assets/distributer.jpg'
import contctimg4 from './../../assets/support.jpg'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';
import './contact.css'



class Contact extends React.Component {
    render() {
        return <div className="container-fluid">
            <div className="row" >
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">

                     <h1>We're listening!</h1>
                     <p>Here at petro data system, we pride ourselves in customer satisfaction and support.
                   Whether you are looking to upgrade your existing commercial site with a new dispenser or fuel management system, or simply get a question answered- we're here for you.</p>
                </div>
            </div>
            <div className="row" >
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 contact_imgstyl">
                    <div>
                        <Link to='/request_quote'><img className="pading" src={contctimg1} alt="" /></Link>
                    </div>
                    <div>
                        <Link to="/Spare_Parts_request"> <img className="pading" src={contctimg2} alt="" /></Link>
                    </div>
                    <div>
                        <Link to="/Find_representative">  <img className="pading" src={contctimg3} alt="" /></Link>
                    </div>
                    <div>
                        <Link to='/Product_support'>  <img className="pading" src={contctimg4} alt="" /></Link>
                    </div>

                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 ">
                     <p><strong>We would love to hear from you…</strong></p>
                    <p><strong>Give us a call or send us an email!</strong></p>
                        <p>Need some help choosing the right products?</p>
                        <p>Email</p>
                        <p><strong>Customer Technical Support</strong></p>
                        <p>Phone number && email</p>
                        <p><strong>Gasboy Service Contract Inquiries</strong></p>
                        <p>Phone number && emial</p>
                        <p><strong>KKF registration number:</strong><span>58916</span></p>
                        <p><strong>Established:</strong><span>29 October 2012</span></p>
                        <p><strong>Address:</strong><span>Hoek H.J. de Vries en Petrus Donders straat</span></p>

                    
                </div>

            </div>

        </div>
    }
}
export default Contact;
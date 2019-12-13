import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './service.css'
import consultancyimg from './../../assets/consultancyimg.jpg'
// import webprocess from './../../assets/webprocess.png'
import Fade from 'react-reveal/Fade';
class ConsultancyService extends React.Component {
    render() {
        return <div>
                <h1 className="text-center className='headingstyl'"><strong>Consultancy Service</strong></h1>
            <div class="row">
                <div class="col-sm">
                    <h1 >Consultancy</h1>
                    <p>Our team of experienced professionals will help you value your petrol business,
                        improve and optimize the operations of your business as well as giving your expert consultations on legal matters.
 </p>
                    <p>We also offer complete capital structuring alongside analysis-based consulting, financial management services and new product integration.
Our consultancy services are designed to help you propel your business to the next level by reducing overhead costs, improving customer service, and re-organization of your business.
We offer industry-specific knowledge to tactically evaluate, select, improve, implement, and effectively manage the station’s network as well as applications designed for all aspects of the petroleum industry.
  </p>
                </div>
                <div class="col-sm">
                    <Fade right>  <img src={consultancyimg} className='styl' style={{width: '106%',
    padding: '-3px',
    margin: '-10px'}} /></Fade>

                </div>
            </div>
        </div>
        //         return <div className="container-fluid">
        //             <strong><h1 className="text-center">Consultancy Service</h1></strong>
        //             <div className="row">

        //                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
        //                      <h1 className='headingstyl'><strong>Consultancy</strong></h1>
        //                      <p>Our team of experienced professionals will help you value your petrol business,
        //                          improve and optimize the operations of your business as well as giving your expert consultations on legal matters.  
        // </p>
        //                     <Fade left><p>We also offer complete capital structuring alongside analysis-based consulting, financial management services and new product integration. 
        // Our consultancy services are designed to help you propel your business to the next level by reducing overhead costs, improving customer service, and re-organization of your business. 
        // We offer industry-specific knowledge to tactically evaluate, select, improve, implement, and effectively manage the station’s network as well as applications designed for all aspects of the petroleum industry. 
        //  </p></Fade>

        //                 </div>
        //                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
        //                     <Fade right>  <img src={consultancyimg} className='styl' /></Fade>
        //                 </div>
        //             </div>
        //         </div>
    }
}
export default ConsultancyService;


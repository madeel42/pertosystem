import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './service.css'
import analysisimg from './../../assets/analysisimg.png'
// import webprocess from './../../assets/webprocess.png'
import Fade from 'react-reveal/Fade';
class AnalysisService extends React.Component {
    render() {
        return <div>
            <strong><h1 className="text-center">Development /Analysis  Service</h1></strong>

            <div class="row">
                <div class="col-sm">
                    <h1 className='headingstyl'>Development /Analysis</h1>
                    <p>Our systems will give you the power and tools to scale your petroleum business to the new heights without any glitch or increase in overhead.
    You will easily collect correcting data that will help you analyze the performance of your business.


 </p>
                    <p>We create production workflows that will enable you to redirect your efforts on the different aspect of your business that will help you generate more revenue.
    With our analytic systems, you will simplify your monthly reconciliation processes and make you feel confident about your business data.
  </p>
                </div>
                <div class="col-sm">
                    <Fade right>  <img src={analysisimg} className='styl' style={{width: '106%',
    padding: '-3px',
    margin: '-10px'}} /></Fade>

                </div>
            </div>
        </div>

    }
}
export default AnalysisService;
//         return <div className="container-fluid">
//             <strong><h1 className="text-center">Development /Analysis  Service</h1></strong>
//             <div className="row">

//                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
//                     <h1 className='headingstyl'><strong>Development /Analysis </strong></h1>
//                      <p>Our systems will give you the power and tools to scale your petroleum business to the new heights without any glitch or increase in overhead.
// You will easily collect correcting data that will help you analyze the performance of your business.


// </p>
//                     <p>We create production workflows that will enable you to redirect your efforts on the different aspect of your business that will help you generate more revenue.
// With our analytic systems, you will simplify your monthly reconciliation processes and make you feel confident about your business data.
//  </p>

//                 </div>
//                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
//                     <Fade right>  <img src={analysisimg} className='styl' /></Fade>
//                 </div>
//             </div>
//         </div>



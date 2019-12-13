import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './service.css'
import databaseimg from './../../assets/databaseimg.jpg'
// import webprocess from './../../assets/webprocess.png'
import Fade from 'react-reveal/Fade';
class DatabaseService extends React.Component {
    render() {
        return <div>
            <h1 className="text-center"><strong>Database Development Service</strong></h1>
            <div class="row">
                <div class="col-sm">
                    <h1 className='headingstyl'>Database Development</h1>
                    <p>We have a team of experienced database developers who have been creating
                       database solutions for hundreds of clients over the years.
 </p>
                    <p>Our database systems will help you increase the accessibility of crucial business data,
      which in turn helps your staff to share data quickly and effectively within the organization. </p>
                </div>
                <div class="col-sm">
                    <Fade right>  <img src={databaseimg} className='styl' style={{width: '106%',
    padding: '-3px',
    margin: '-10px'}} /></Fade>

                </div>
            </div>
        </div>
        //         return <div className="container-fluid">
        //             <strong><h1 className="text-center">Database Development Service</h1></strong>
        //             <div className="row">

        //                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
        //                      <h1 className='headingstyl'><strong>Database Development</strong></h1>
        //                      <p>We have a team of experienced database developers who have been creating
        //                         database solutions for hundreds of clients over the years.
        // </p>
        //                     <Fade left><p>Our database systems will help you increase the accessibility of crucial business data,
        //      which in turn helps your staff to share data quickly and effectively within the organization. </p></Fade>

        //                 </div>
        //                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
        //                     <Fade right>  <img src={databaseimg} className='styl' /></Fade>
        //                 </div>
        //             </div>
        //         </div>
    }
}
export default DatabaseService;


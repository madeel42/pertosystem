import React, { Component } from "react";
import Slider from "react-slick";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import petrolpumpimg from "./../../assets/GasboyInteractiveScene_o.jpg";
import Circle from "./../../assets/7-TLS_Circle.gif";

import Content from "./content";
import ShowCaseHover from "./ShowCaseHover";
import Wobble from "react-reveal/Wobble";
import Fade from "react-reveal/Fade";
// import pero from './../../assets/petrostation.jpg'
import "./home.css";

// import { baseUrl } from "./config";

class Slid extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="">
          {/* <img src={Circle} className="bg-success circlestyl" />
          <img src={petrolpumpimg} className="petroimg1styl" /> */}
          <ShowCaseHover />
        </div>
        <div>
          <Content />
        </div>
      </div>
    );
  }
}

export default Slid;

//////////////////////////////////////previous work///////////////////////




// import React, { Component } from "react";
// import Slider from "react-slick";
// import Slide from 'react-reveal/Slide';
// import Zoom from 'react-reveal/Zoom';
// import petrolpumpimg from './../../assets/GasboyInteractiveScene_o.jpg'
// import Circle from './../../assets/7-TLS_Circle.gif'

// import Content from './content'
// import Wobble from 'react-reveal/Wobble';
// import Fade from 'react-reveal/Fade';
// // import pero from './../../assets/petrostation.jpg'
// import './home.css'

// // import { baseUrl } from "./config";

// class Slid extends Component {
//     render() {
//        return <div className="container-fluid">
//                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                      <img src={Circle} className="bg-success circlestyl"/>
//                      <img src={petrolpumpimg} className='petroimg1styl' />
//                      </div>
//                      <div>
//                      <Content />
//                  </div>

//              </div> 
//              }
//             }

// export default Slid;
             





















{/* <div><img className="petropumpimgstyl" src={petropumpimg}/>
                <img className="animaStyl" src={circleimg}/>
                </div> */}

{/* <div className="row"> */ }
{/* <div className="col-xl-12 text-center"><div className="petroimg">
                <div className="row animtioncustmized">
                    <div >
                <img className="animaimg1" src={circleimg}/>                       

                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
css
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
csc
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
            
csdc
                    </div>
                {/* <img className="animaStyl" src={circleimg}/> */}
{/* </div> */ }

{/* </div> */ }


{/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center"><div><img className="petropumpimgstyl" src={petropumpimg}/></div> */ }
{/* <img className="animaStyl" src={circleimg}/> */ }
{/* </div> */ }
{/* </div>
            </div>
            //////////////////////////////////////////////////Grid system///////////
         /* return <div className="container-fluid">
             <div className="row">
                 <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 bg-success">abc</div>
                 <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 bg-primary">aaa</div>
                 <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 bg-success">aaaa</div>

             </div> */

    // </div>
    // return <div>
    //     <h1>Home component</h1>
    //     <img style={{backgroundColor:'red'}} src={circleimg}/>
    // </div>
}

// export default Home;[]
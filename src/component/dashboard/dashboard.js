import React from 'react';
import { Route } from 'react-router-dom'
import Navbar from './navbar/navbar'
import WebService from './../services/webServices'
import Home from './../Home/Home'
import Form1 from './../contact/form/product_qote'
import Contact from './../contact/contact'
import DatabaseService from './../services/dataBaseDev'
import PartsForm from './../contact/form/parts_form'
import Representative from './../contact/form/contact_representative'
import Product_support from './../contact/form/product_support_form'
import SoftWareService from './../services/softwaredev'
import NetworkService from './../services/network'
import ConsultancyService from './../services/consultancy'
import AnalysisService from './../services/DevAnal'
import Aboutus from './../Aboutus/about'
class Dashboard extends React.Component {
    render() {
        return <div>
            
            <Navbar />
            <Route exact path='/' render={() => {
                return <React.Fragment>
                    <Home />
                </React.Fragment>
            }} />
            <Route path='/webDevelopment_service' component={WebService} />
            <Route path='/contactus' component={Contact} />
            <Route path='/request_quote' component={Form1} />
            <Route path='/Spare_Parts_request' component={PartsForm} />
            <Route path='/Find_representative' component={Representative} />
            <Route path='/Product_support' component={Product_support} />
            <Route path='/SoftWare_development_Service' component={SoftWareService} />
            <Route path='/Database_service' component={DatabaseService} />
            <Route path='/networkService' component={NetworkService} />
            <Route path='/Consultancy_Service' component={ConsultancyService} />
            <Route path='/analysis_Service' component={AnalysisService} />
            <Route path='/about_us' component={Aboutus} />













        </div>
    }
}

export default Dashboard;
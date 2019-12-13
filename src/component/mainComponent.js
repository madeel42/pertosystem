import React from 'react';
import Dashboard from './dashboard/dashboard';
// import Navbar from './dashboard/navbar/navbar'
import {BrowserRouter,Route} from 'react-router-dom'
class Main extends React.Component {
  render () {
    return<BrowserRouter>
       <Route path='/' component={Dashboard}/>
      </BrowserRouter>
  }
}

export default Main;
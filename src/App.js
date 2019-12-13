import React from 'react';
import './App.css';
import Main from './component/mainComponent';
import { BrowserRouter, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import Footer from './component/footer/footer'
import { store, persistor } from './store/mainstore'
class App extends React.Component {
  render() {
    return <div>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <Main />
            <Footer />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </div>
  }
}

export default App;
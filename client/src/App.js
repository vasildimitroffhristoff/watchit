import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import Header from './components/layout/Header';
import Landing from './components/home/Landing';
import Contacts from './components/contact/Contacts'
import Products from './components/products/Products';
import Footer from './components/layout/Footer';
import { persistor, store } from './store';

class App extends Component {
    render() {
        // if(this.state.products.length === 0) return <div>Loading...</div>
        
        return(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <div>
                            <Header/>
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/products" component={Products} />
                            <Route exact path="/contacts" component={Contacts} />
                            <Footer />
                        </div>
                    </Router>
                </PersistGate>
            </Provider>
        )
    }
}

export default App

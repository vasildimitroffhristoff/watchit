import React, { Component } from 'react';
import ProductsSlider from './ProductsSlider';
import Banner from './Banner';
import Shipping from './Shipping';
import Brands from './Brands';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <h2 className="section-heading">New Arrivals</h2>   
            <div style={{ margin: "0px -15px 60px -15px" }}>
              <ProductsSlider />    
            </div>  
        </div>
        <Banner />
        <Shipping />
        <Brands />
      </div>
    )
  }
}

export default Landing;
import React, { Component } from "react";
import ProductsSliderItem from "./ProductsSliderItem";
import Slider from 'react-slick';
import { connect } from "react-redux";
import { getProducts } from '../../actions/productActions';

class ProductsSlider extends Component {
    componentDidMount() {
        this.props.getProducts();
    }
    
    render() {
        const settings = {
            arrows: false,
            dots: true,
            infinite: true,
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 2800
          };
           
        const featuredProducts = this.props.products.items.filter(product => product.featured === true)
        let productsData = featuredProducts.map(product => {
            return <ProductsSliderItem key={product._id} product={product} />
        })

        return (
                <Slider {...settings}>
                    {productsData} 
                </Slider>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps, { getProducts })(ProductsSlider)
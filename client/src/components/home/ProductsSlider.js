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
            dots: false,
            infinite: true,
            speed: 600,
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 2800
          };


        let productsData = this.props.products.items.map(product => {
            return <ProductsSliderItem product={product} />
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
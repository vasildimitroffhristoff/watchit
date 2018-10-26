import React, { Component } from "react";
import ProductsSliderItem from "./ProductsSliderItem";
import Slider from 'react-slick';
import { connect } from "react-redux";
import { getProducts } from '../../actions/productActions';

class ProductsSlider extends Component {
    componentDidMount() {
        this.props.getProducts(500, 'highest');
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
            return <ProductsSliderItem 
                        key={product.id}
                        price={product.price}
                        name={product.name}
                        image={product.image}
                        id={product.id}
                        addToCart={this.props.addToCart}
                    />
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
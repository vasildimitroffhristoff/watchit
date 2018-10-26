import React, { Component } from "react";
import { connect } from 'react-redux';
import { addProduct } from '../../actions/cartActions';

class ProductsSliderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProduct: {},
            isAdded: false
        }
    }

    handleAddToCart(product) {
        this.props.addProduct(product);
    }

    render() {
        let image = this.props.image;
        let name = this.props.name;
        let price = this.props.price;
        // let id = this.props.id;
        // let quantity = this.props.quantity;
        const product = this.props;
        
        return(
            <div className="col mb-4">
                <div className="card product">
                        <div className="card-body p-0">
                        <span className="badge badge-success position-absolute" style={{ top:"10px", right:"10px" }}>New</span>

                            <div className="product__image">
                                <img 
                                    className="card-img-top"
                                    alt={name}
                                    src={image}
                                    />
                                </div>
                                <div className="pr-4 pl-4 pb-4">
                                    <h5 className="product__name">{name}</h5>
                                    <p className="product-price">$ {price}</p>
                                <button 
                                    type="button" 
                                    className={!this.state.isAdded ? "btn btn-outline-info" : "btn btn__product-added" }
                                    onClick={
                                        this.handleAddToCart.bind(this, product)    
                                    }
                                    >{!this.state.isAdded ? 'Add to cart' : 'Product added'}</button>
                                </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default connect(null, { addProduct })(ProductsSliderItem)
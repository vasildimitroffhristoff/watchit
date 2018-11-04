import React, { Component } from "react";
import { connect } from 'react-redux';
import { addProduct, incrementQty } from '../../actions/cartActions';

class ProductsSliderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProduct: {},
            isAdded: false
        }
    }

    handleAddToCart(product) {
        const { items } = this.props.cart;

        // if (product.hasOwnProperty('quantity') === false) {
        //     product['quantity'] = 1;
        //   }
          
          if (items.filter(item => item._id === product._id).length > 0) {
            alert(`Product '${product.name}' is already in your cart.`)
          } else {
            this.props.addProduct(product); 
          }
           
          this.setState((state, props) => ({ isAdded: true }), () => {
              setTimeout(() => {
                  this.setState(() => ({ isAdded: false }))
              }, 2000)
          })
      
          this.setState((state, props) => ({ productAdded: product._id}), () => {
            setTimeout(() => {
                this.setState(() => ({ productAdded: {} }))
            }, 2000)
          })
    }

    render() {
        const { image, name, price, id } = this.props.product;
        
        return(
            <div key={id} className="col mb-4">
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
                                    <h5 className="product__name text-center text-dark">{name}</h5>
                                    <p className="product-price text-center">$ {price}</p>
                                <button 
                                    type="button" 
                                    className={!this.state.isAdded ? "btn btn-outline-info" : "btn btn__product-added" }
                                    onClick={
                                        this.handleAddToCart.bind(this, this.props.product)    
                                    }
                                    >{!this.state.isAdded ? 'Add to cart' : 'Product added'}</button>
                                </div>
                        </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products,
    cart: state.cart
  })

export default connect(mapStateToProps, { addProduct, incrementQty })(ProductsSliderItem)
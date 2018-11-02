import React, { Component } from 'react'

export default class ProductItem extends Component {
  constructor(props) {
        super(props)

        this.state = {
            isAdded : false,
            productAdded: null
        }
  }  

  addProductToCart(product) {
    this.setState((state, props) => ({isAdded: true }), () => {
        setTimeout(() => {
            this.setState(() => ({ isAdded: false }))
        }, 2000)
    })

    this.setState((state, props) => ({ productAdded: product._id}), () => {
      setTimeout(() => {
          this.setState(() => ({ productAdded: {} }))
      }, 2000)
    })

    this.props.onAddToCart(product)
  }

  render() {
    const { item } = this.props;
    return (
        <div key={item._id} className="col-md-4 mb-4">
                  <div className="card product">
                          <div className="card-body p-0">
                              <div className="product__image">
                                  <img 
                                      className="card-img-top"
                                      alt={item.name}
                                      src={item.image}
                                      />
                                  </div>
                                  <div className="pr-4 pl-4 pb-4">
                                      <h5 className="product__name text-center text-dark">{item.name}</h5>
                                      <p className="product-price text-center">$ {item.price}</p>
                                      <button 
                                        onClick={this.addProductToCart.bind(this, item)} 
                                        className={this.state.productAdded === item._id ? "btn btn-success" : "btn btn-outline-info"} 
                                        type="button">
                                          { this.state.productAdded === item._id 
                                            ? 'Product added' : 'Add to cart' }
                                      </button>
                                  </div>
                          </div>
                      </div>
              </div>
    )
  }
}

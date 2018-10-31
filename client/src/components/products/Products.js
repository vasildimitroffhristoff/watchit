import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../actions/productActions'
import { addProduct, incrementQty } from '../../actions/cartActions';
import FilterBar from './FilterBar';
import Pagination from './Paginations';
import Loading from 'react-loading-components';

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAdded : false,
      productAdded: null
    }
  }

  componentWillMount() {
    this.handleFetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    
    if(parseInt(nextProps.filters.priceRange) !== parseInt(this.props.filters.priceRange)) {
      this.handleFetchProducts(parseInt(nextProps.filters.priceRange), undefined);
    }

    if (nextProps.filters.sortType !== this.props.filters.sortType) {
      this.handleFetchProducts(undefined, nextProps.filters.sortType);
    }
  }


  handleFetchProducts = (filters = this.props.filters.priceRange, sort = this.props.sortType) => {
    this.props.getProducts(filters, sort);
  }

  handleAddToCart(product) {
    const { items } = this.props.cart;
    
    if (product.hasOwnProperty('quantity') === false) {
      product['quantity'] = 1;
    }
    
    if (items.filter(item => item._id === product._id).length > 0) {
      this.props.incrementQty(product._id);
    } else {
      this.props.addProduct(product); 
    }
     
    // USED FOR ANIMATING THE BUTTON
    this.setState((state, props) => ({isAdded: true }), () => {
        setTimeout(() => {
            this.setState(() => ({ isAdded: false }))
        }, 2800)
    })

    this.setState((state, props) => ({ productAdded: product._id}), () => {
      setTimeout(() => {
          this.setState(() => ({ productAdded: {} }))
      }, 2800)
    })
  }

  render() {
    const { loading } = this.props.products;
    let { items } = this.props.products;
  
    let content;

    if (loading === true) {
      content = (<div className="col-md-12 text-center">
                  <Loading type='three_dots' width={50} height={50} fill='#2a3956' />
                </div>)
    } else if(items.length === 0) {
        content = (<div className="col-md-12">
                      <p className="lead">No products were found.</p>
                  </div>)
    } else {
      content = items.map(item => (
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
                                      <h5 className="product__name">{item.name}</h5>
                                      <p className="product-price">$ {item.price}</p>
                                      <button 
                                        onClick={this.handleAddToCart.bind(this, item)} 
                                        className={this.state.productAdded === item._id ? "btn btn-success" : "btn btn-outline-info"} 
                                        type="button">
                                          { this.state.productAdded === item._id 
                                            ? 'Product added' : 'Add to cart' }
                                      </button>
                                  </div>
                          </div>
                      </div>
              </div>
      ))
    }

    return (
      <div  className="container p-4">
        <div className="row">
          <div className="col-md-3">
           <FilterBar />
          </div>
          <div className="col-md-9">
            <div className="row">
              {content}
            </div>
             <Pagination />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
  filters: state.filters
})

export default connect(mapStateToProps, { getProducts, addProduct, incrementQty })(Products);
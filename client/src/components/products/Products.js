import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../actions/productActions'
import { addProduct } from '../../actions/cartActions';
import { incrementQty } from '../../actions/cartActions';
import FilterBar from './FilterBar';
import Loading from 'react-loading-components';

/*
      (1) Index add to cart 
      (2) Persistence to the state
      (3) Filters 
      (4) Increment / Decrement
      (6) Second add to cart if product exists 
*/

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAdded : false,
      productAdded: null
    }
  }

  componentWillMount() {
    const { priceRange, sortType } = this.props.filters;
    this.props.getProducts(priceRange, sortType);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filters.priceRange !== this.props.filters.priceRange 
          && nextProps.filters.sortType !== this.props.filters.sortType) {
            this.props.getProducts(nextProps.filters.priceRange, nextProps.filters.nextFilters);
    }
  }

  handleAddToCart(product) {
    const { items } = this.props.cart;
    
    if (product.hasOwnProperty('quantity') === false ) {
      product['quantity'] = 1;
    }
    
    if (items.filter(item => item._id === product._id).length > 0) {
      this.props.incrementQty(product._id);
    } else {
      this.props.addProduct(product); 
    }
          
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
                      <p className="lead">No products w ere found.</p>
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

             <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="/" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="/">1</a></li>
                  <li className="page-item"><a className="page-link" href="/">2</a></li>
                  <li className="page-item"><a className="page-link" href="/">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="/" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
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

export default connect(mapStateToProps, { getProducts, addProduct, incrementQty })(Products)




// componentWillReceiveProps(nextProps) {
  //   if (nextProps.filters.priceRange && nextProps.filters.sortType) {
  //     this.props.getProducts(this.props.filters.priceRange, this.props.filters.sortType); 
  //   }
  // }

  /* 
  addProduct: ƒ ()
cart: {items: Array(0)}
filters:
priceRange: 500
sortType: "highest"
__proto__: Object
getProducts: ƒ ()
history: {length: 3, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
incrementQty: ƒ ()
location: {pathname: "/products", search: "", hash: "", state: undefined, key: "561lxb"}
match: {path: "/products", url: "/products", isExact: true, params: {…}}
staticContext: undefined
  */
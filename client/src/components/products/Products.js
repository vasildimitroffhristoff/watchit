import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../actions/productActions'
import { addProduct, incrementQty } from '../../actions/cartActions';
import FilterBar from './FilterBar';
import Pagination from './Paginations';
import Loading from 'react-loading-components';
import ProductItem from './ProductItem';

class Products extends Component {
  componentWillMount() {
    this.handleFetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    const { priceRange: newRange, 
            sortType: newSortType, tags: newTags } = nextProps.filters;
    const { priceRange: oldRange, 
            sortType: oldSortType, tags: oldTags } = this.props.filters;

    if(parseInt(newRange) !== parseInt(oldRange)) {
        this.handleFetchProducts(parseInt(newRange), undefined, undefined);
    }

    if (newSortType !== oldSortType) {
        this.handleFetchProducts(undefined, newSortType, undefined);
    }

    if (oldTags.sort().toString() !== newTags.sort().toString()) {
        this.handleFetchProducts(undefined, undefined, newTags)
    }
  }

  handleFetchProducts = (filters = this.props.filters.priceRange, 
                            sort = this.props.sortType, 
                            tags = this.props.filters.tags) => {
    this.props.getProducts(filters, sort, tags);
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
  }

  render() {
    const { loading, items } = this.props.products;
  
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
        <ProductItem key={item._id} item={item} onAddToCart={ (product) => this.handleAddToCart(product) } />
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
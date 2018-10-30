import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sortByPrice, filterPriceRange } from '../../actions/filterActions';

class FilterBar extends Component {
  constructor(props){
      super(props);
      this.state = {
          volume: 500,
          sortBy: 'lowest'
      }

      this.handleRangeSlider = this.handleRangeSlider.bind(this)
      this.handleSort = this.handleSort.bind(this)
  }

  applyFilters() {
    this.props.filterPriceRange(this.state.volume);
    this.props.sortByPrice(this.state.sortBy);
  }

  handleRangeSlider(e) {
    this.setState({
      volume: e.target.value
    })
  }

  handleSort(e) {
      this.setState({ 
        sortBy: e.target.value 
      })
  }

  render() {
    let { volume } = this.state;
    return (
      <div className="card border-0 rounded-0 shadow-lg">
          <div className="card-body">
            <h5 className="mb-3">Filter results:</h5>
            <div className="bg-light p-3 mb-3">
              <label className="d-block mb-3">
                <small>
                <b>Filter by price:</b> <span className="text-dark pl-1">$ { volume } </span>
                </small>
              </label>
              <input 
                onChange={this.handleRangeSlider} 
                className="w-100 form-control-range"
                name="pricerange" 
                type="range" 
                min="0" 
                max="500" 
                value={volume} 
                step="10" />
            </div>
          
          <div>
              <label><small className="font-weight-bold">Sort by</small></label>
                <select onChange={this.handleSort} name="priceselect" className="w-100 form-control">
                  <option defaultValue name="" value="lowest">Lowest Price</option>
                  <option name="" value="highest">Highest Price</option>
                </select>
            </div>
              <button className="btn btn-primary w-100 mt-3 d-block rounded-0" onClick={this.applyFilters.bind(this)}>Apply Filter</button>
          </div>
        </div>
    )
  }
}

export default connect(null, { sortByPrice, filterPriceRange })(FilterBar)
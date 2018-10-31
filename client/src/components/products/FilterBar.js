import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sortByPrice, filterPriceRange, filterByTag } from '../../actions/filterActions';

class FilterBar extends Component {
  constructor(props){
      super(props);
      this.state = {
          volume: 1000,
          sortBy: 'lowest',
          tagsChecked: []
      }

      this.handleRangeSlider = this.handleRangeSlider.bind(this)
      this.handleSort = this.handleSort.bind(this)
      this.applyFilters = this.applyFilters.bind(this)
      this.handleTagCheck = this.handleTagCheck.bind(this)    
  }

  applyFilters() {
    this.props.filterPriceRange(this.state.volume);
    this.props.sortByPrice(this.state.sortBy);
    this.props.filterByTag(this.state.tagsChecked);
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
  
  handleTagCheck(e) {
    const options = this.state.tagsChecked
    let index

    if (e.target.checked) {
      options.push(e.target.value)
    } else {
      index = options.indexOf(e.target.value)
      options.splice(index, 1)
    }

    this.setState({ tagsChecked: options })
  }

  render() {
    let { volume } = this.state;
    return (
      <div className="card border-0 rounded-0 shadow-lg">
          <div className="card-body">
            <h5 className="mb-3">Filter results:</h5>
            <div className="mb-4">
              <label className="d-block mb-3">
                <small>
                <b>Filter by price:</b> <span className="text-dark pl-1">$0 - $ { volume } </span>
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
          
            <div className="mb-4">
              <label><small className="font-weight-bold">Sort by</small></label>
                <select onChange={this.handleSort} name="priceselect" className="w-100 border rounded-0 form-control">
                  <option defaultValue name="" value="lowest">Lowest Price</option>
                  <option name="" value="highest">Highest Price</option>
                </select>
            </div>

            <div className="mb-2">
                <div>
                  <label><small className="font-weight-bold">Filter by tags</small></label>
                </div>

                <div className="custom-control custom-checkbox">
                  <input 
                      onChange={this.handleTagCheck}
                      value={'suunto'}
                      type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Suunto</label>
                </div>

                <div className="custom-control custom-checkbox">
                  <input 
                      onChange={this.handleTagCheck}                  
                      value={'garmin'}
                      type="checkbox" className="custom-control-input" id="customCheck2" />
                  <label className="custom-control-label" htmlFor="customCheck2">Garmin</label>
                </div>
                
                <div className="custom-control custom-checkbox">
                  <input 
                      onChange={this.handleTagCheck}                  
                      value={'polar'}
                      type="checkbox" className="custom-control-input" id="customCheck4" />
                  <label className="custom-control-label" htmlFor="customCheck4">Polar</label>
                </div>
            </div>
              <button className="btn btn-primary w-100 mt-3 d-block rounded-0" onClick={this.applyFilters}>Apply Filter</button>
          </div>
        </div>
    )
  }
}

export default connect(null, { sortByPrice, filterPriceRange, filterByTag })(FilterBar)

 /*

 Refactor with components
 Create custom component for input 
 Create tag action / reducer 
 Filter
 Add quantity / increment / decrement
 Add product from slider
  
  */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sortByPrice, filterPriceRange, filterByTag } from '../../actions/filterActions';
import RangeSlider from './RangeSlider';
import SelectSort from './SelectSort';
import TagControl from './TagControl';
import ApplyFiltersButton from './ApplyFiltersButton';

class FilterBar extends Component {
  constructor(props){
      super(props);
      this.state = {
          volume: 1000,
          sortBy: 'lowest',
          tagsChecked: []
      }

      this.applyFilters = this.applyFilters.bind(this)
      this.handleTagSelect = this.handleTagSelect.bind(this)    
  }

  applyFilters() {
    this.props.filterPriceRange(this.state.volume);
    this.props.sortByPrice(this.state.sortBy);
    this.props.filterByTag(this.state.tagsChecked);
  }
  
  handleTagSelect(e) {
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

    return (
      <div className="card border-0 rounded-0 shadow-lg">
          <div className="card-body">
            <h5 className="mb-3">Filter results:</h5>
            <RangeSlider 
              volume={this.state.volume} 
              handleRangeSlider={(e) => this.setState({ volume: e.target.value }) } />
            <SelectSort 
              onSelectSort={(e) => this.setState({ sortBy: e.target.value })} />
            <TagControl onTagSelect={(e) => { this.handleTagSelect(e) }} />
            <ApplyFiltersButton onApplyFilters={() => this.applyFilters()} />
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
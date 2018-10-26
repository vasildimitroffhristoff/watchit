import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sortByPrice, filterPriceRange } from '../../actions/filterActions';

class FilterBar extends Component {
  constructor(props){
      super(props);
      this.state = {
          volume: 500,
          sortBy: 'highest'
      }

      this.handleRangeSlider = this.handleRangeSlider.bind(this)
      this.handleSort = this.handleSort.bind(this)
  }

  handleRangeSlider(e) {
    this.setState({
      volume: e.target.value
    })
  }

  applyFilters() {
    if (this.state.volume > 0) {
        this.props.filterPriceRange(this.state.volume);
    }
    if (this.state.sortBy !== 'highest') {
        this.props.sortByPrice(this.state.sortBy);
    }
  }

  handleSort(e) {
      this.setState({ sortBy : e.target.value })
  }

  render() {
    let { volume } = this.state;
    return (
      <div className="card border-0 rounded-0 shadow-lg">
          <div className="card-body">
            <h5>Filter results:</h5>
            <hr />
            <div className="bg-light p-3 border mb-3">
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
                <select onChange={this.handleSort.bind(this)} name="priceselect" className="w-100 form-control">
                  <option name="" value="0">Lowest Price</option>
                  <option name="" value="1">Highest Price</option>
                </select>
            </div>
              <button className="btn btn-primary w-100 mt-3 d-block rounded-0" onClick={this.applyFilters.bind(this)}>Apply Filter</button>
          </div>
        </div>
    )
  }
}

export default connect(null, { sortByPrice, filterPriceRange })(FilterBar)


// 
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import { connect } from "react-redux";
// import { updateFilters } from '../../store/actions/filterActions';
// import Checkbox from '../Checkbox';
// import StarButton from '../github/StarButton';

// const availableSizes = [
//   'XS',
//   'S',
//   'M',
//   'ML',
//   'L',
//   'XL',
//   'XXL',
// ];

// class Filter extends Component {
//   componentWillMount() {
//     this.selectedCheckboxes = new Set();
//   }

//   toggleCheckbox = (label) => {
//     if (this.selectedCheckboxes.has(label)) {
//       this.selectedCheckboxes.delete(label);
//     } else {
//       this.selectedCheckboxes.add(label);
//     }

//     this.props.updateFilters(Array.from(this.selectedCheckboxes));
//   }

//   createCheckbox = (label) => (
//     <Checkbox
//         classes="filters-available-size"
//         label={label}
//         handleCheckboxChange={this.toggleCheckbox}
//         key={label} />
//   )

//   createCheckboxes = () => (
//     availableSizes.map(this.createCheckbox)
//   )

//   render() {
//     return (
//       <div className="filters">
//         <h4 className="title">Sizes:</h4>
//         {this.createCheckboxes()}
//         <StarButton />
//       </div>
//     );
//   }
// }

// Filter.propTypes = {
//   updateFilters: PropTypes.func.isRequired,
//   filters: PropTypes.array,
// }

// const mapStateToProps = state => ({
//   filters: state.filters.items,
// })

// export default connect(mapStateToProps, { updateFilters })(Filter);
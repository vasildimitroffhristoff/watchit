import React from 'react'

export default function RangeSlider(props) {
  return (
    <div className="mb-4">
              <label className="d-block mb-3">
                <small>
                <b>Filter by price:</b> <span className="text-dark pl-1">$0 - $ { props.volume } </span>
                </small>
              </label>
              <input 
                onChange={props.handleRangeSlider.bind(this)} 
                className="w-100 form-control-range"
                name="pricerange" 
                type="range" 
                min="0" 
                max="500" 
                value={props.volume} 
                step="10" />
            </div>
          
  )
}

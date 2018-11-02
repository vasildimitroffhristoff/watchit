import React from 'react'

export default function SelectSort(props) {
  return (
    <div className="mb-4">
            <label><small className="font-weight-bold">Sort by</small></label>
                <select onChange={props.onSelectSort.bind(this)} name="priceselect" className="w-100 border rounded-0 form-control">
                  <option defaultValue name="" value="lowest">Lowest Price</option>
                  <option name="" value="highest">Highest Price</option>
            </select>
    </div>
  )
}

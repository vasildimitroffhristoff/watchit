import React from 'react'

export default function ApplyFiltersButton(props) {
  return (
    <button className="btn btn-primary w-100 mt-3 d-block rounded-0" onClick={props.onApplyFilters()}>Apply Filter</button>
  )
}

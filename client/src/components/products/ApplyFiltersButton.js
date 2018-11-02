import React from 'react'

export default function ApplyFiltersButton({ onApplyFilters }) {
  return (
    <button
     className="btn btn-primary w-100 mt-3 d-block rounded-0" 
     onClick={onApplyFilters.bind(this)}>Apply Filter</button>
  )
}

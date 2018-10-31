import React from 'react'

export default function CheckBox() {
  return (
  <div className="custom-control custom-checkbox">
        <input 
               onChange={this.handleTagCheck}                  
               value={'polar'}
               type="checkbox" className="custom-control-input" id="customCheck4" />
        <label className="custom-control-label" htmlFor="customCheck4">Polar</label>
    </div> 
  )
}

import React, { Component } from 'react'

const tagOptions = [
    {
      id: 'customCheck1' ,
      value: 'suunto',
      label: 'Suunto'
    },
    {
      id: 'customCheck2' ,
      value: 'garmin',
      label: 'Garmin'
    },
    {
      id: 'customCheck3' ,
      value: 'polar',
      label: 'Polar'
    }
  ]
  
  export default class TagControl extends Component {
    render() {
        const tags = tagOptions.map(tag => (
            <div className="custom-control custom-checkbox">
                <input 
                    onChange={tag.onTagSelect.bind(this)}
                    value={tag.value}
                    type="checkbox" className="custom-control-input" id={tag.id} />
                <label className="custom-control-label" htmlFor={tag.id}>{tag.label}</label>
            </div>
        ))

        return (
            <div className="mb-2">
                <div>
                     <label><small className="font-weight-bold">Filter by tags</small></label>
                </div>
                { tags }
            </div>
          )
    }
  }
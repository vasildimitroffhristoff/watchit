import React from 'react'

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 mx-auto mt-2 mb-5">
            <div className="card card-body shadow-sm border-0">
              <h3 className="display-4">Contact us</h3>
              <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""></label>
                        <textarea className="form-control" name="" id="" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

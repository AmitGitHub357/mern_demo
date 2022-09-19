import React from "react"

  const Contact = () => {
    return (<>
    <div className="container mt-5" >
      {/* <!-- <div id="header"></div> --> */}
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-6">
        <h3 className="text-center">Contact Us</h3>
          <form>
          
            <div className="form-group mt-3">
              <label>Name</label>
              <input
                required
                type="text"
                className="form-control mt-3"
                id="signUpName"
                placeholder="Enter Name..."
              />
            </div>
            
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                required
                type="email"
                className="form-control mt-3"
                id="signUpEmail"
                placeholder="Enter Email...."
              />
            </div>
            <div className="form-group mt-3">
              <label>Phone</label>
              <input
                required
                type="number"
                className="form-control mt-3"
                id="signUpNumber"
                placeholder="Enter Phone Number...."
              />
            </div>
            <div className="form-group mt-3">
              <label>Feedback</label>
              <textarea className="form-control mt-3" style={{resize:"none"}} rows="3"> </textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mr-3">Submit</button>
          </form>
        </div>
        <div className="col-md-6 col-sm-6 mt-5">
          <img src="https://www.acv.app/static/media/RemoteTeamAnimate.9bc87be4.svg" />
        </div>
      </div>
    </div>
    </>)
  }

  export default Contact
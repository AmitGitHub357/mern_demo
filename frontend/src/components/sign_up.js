import React from "react"

  const Sign_Up = () => {
    return (<>
    <div className="container mt-5" >
      {/* <!-- <div id="header"></div> --> */}
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-6">
        <h3 className="text-center">Sign-Up</h3>
          <form action = "http://localhost:5000/api/user/signUp" method="post">
            <div className="form-group">
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
              <label>Date Of Birth</label>
              <input
                required
                type="date"
                className="form-control mt-3"
                id="signUpDob"
                placeholder="Enter Date of Birth"
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
            <div className="form-group mt-3" >
              <label>Password</label>
              <input
                required
                type="text"
                className="form-control mt-3"
                id="signUpPassword"
                placeholder="Enter Password...."
              />
            </div>
            <div className="form-group mt-3">
              <label>Retype-Password</label>
              <input
                required
                type="password"
                className="form-control mt-3"
                id="signUpReTypePassword"
                placeholder="Enter Password...."
              />
            </div>
            <button type="submit" className="btn btn-primary mr-3 mt-3">Submit</button>
          </form>
        </div>
        <div className="col-md-6 col-sm-6 mt-5">
          <img src="https://www.acv.app/static/media/RemoteTeamAnimate.9bc87be4.svg" />
        </div>
      </div>
    </div>
    </>)
  }
    

  export default Sign_Up
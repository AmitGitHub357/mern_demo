import { React, useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../redux/user/userAction"; 

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = { userSignIn };
  console.log(userInfo)
  
  useEffect(() => {
    if (typeof userInfo === 'undefined') navigate("/");
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(user));

    // axios
    //   .post("http://localhost:5000/api/user/signIn", {
    //     email: email,
    //     password: password,
    //   })
    //   .then((res) => {
    //     alert(res.status);
    //     if (res.status == 200 && res.success == true) {
    //       navigate("/");
    //     }
    //   })
    //   .catch((err) => {
    //     navigate("/login");
    //     alert(err.message);
    //   });
  };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 ">
          <form>
            <div className="form-group">
              <h2 className="text-center">Login</h2>
              <p>Email address</p>
              <input
                type="email"
                className="form-control mt-3"
                onChange={(e) => setUser({ email : e.target.value })}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <p>Password</p>
              <input
                type="password"
                onChange={(e) => setUser({ password : e.target.value })}
                className="form-control mt-3"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3 mr-3"
              onClick={(e) => submitHandler(e)}
            >
              Submit
            </button>
            <p className="mr-3">Remember Me </p>
            <input className="ml-3" type="checkbox" />
          </form>
        </div>
        <div className="col-md-6 ">
          <img src="https://www.acv.app/static/media/RemoteTeamAnimate.9bc87be4.svg" />
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import ExportURL from "../../hooks/config";
import axios from "axios";
import "./login.css";

const Login = () => {
  const { dispatch } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  // console.log(credentials);

  const Navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        `${ExportURL.URL_API}/auth/SignIn`,
        credentials
      );
      // console.log(res.data.user)
      if (res.data.errCode === 3) {
        toast.error(res.data.message, {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 2000,
        });
        dispatch({ type: "LOGIN_FAILURE", payload: res.data });
      } else if (res.data.errCode === 2) {
        toast.error(res.data.message, {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 2000,
        });
        dispatch({ type: "LOGIN_FAILURE", payload: res.data });
      } else if (res.data.errCode === 1) {
        toast.error(res.data.message, {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 2000,
        });
        dispatch({ type: "LOGIN_FAILURE", payload: res.data });
      } else if (res.data.errCode === 0) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
        Navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone IMG"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 mt-3">
              <form onSubmit={handleClick} autoComplete="off" className="user">
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4 ">
                  <h1 className="display-5 text-primary">Login</h1>
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4 ">
                  <input
                    onChange={handleChange}
                    type="email"
                    id="email"
                    name="email"
                    className="form-control border border-gray"
                  />
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    id="password"
                    className="form-control border border-gray"
                  />
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <a href="/#">Forgot password?</a>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign in
                </button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a
                  className="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#3b5998" }}
                  href="/#"
                  role="button"
                >
                  <i className="fab fa-facebook-f me-2"></i>Continue with
                  Facebook
                </a>
                <a
                  className="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#55acee" }}
                  href="/#"
                  role="button"
                >
                  <i className="fab fa-twitter me-2"></i>Continue with Twitter
                </a>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Login;

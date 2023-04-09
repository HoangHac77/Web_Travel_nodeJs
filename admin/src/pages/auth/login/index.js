import React, { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ExportURL from "../../../hooks/URL";

import axios from "axios";

const Index = () => {
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
      if (res.data.errCode === 2) {
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
        Navigate("/admin");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="bg-gradient-white">
        <div className="container mt-4">
          {/* <!-- Outer Row --> */}
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9 ">
              <div className="card o-hidden border-0 shadow-lg my-5 ">
                <div className="card-body p-0">
                  {/* <!-- Nested Row within Card Body --> */}
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">
                            Welcome Back!
                          </h1>
                        </div>
                        <form
                          className="user"
                          onSubmit={handleClick}
                          autoComplete="off"
                        >
                          <div className="form-group">
                            <input
                              onChange={handleChange}
                              type="email"
                              className="form-control form-control-user"
                              id="email"
                              name="email"
                              placeholder="Enter Email Address..."
                            />
                          </div>
                          <div className="form-group">
                            <input
                              onChange={handleChange}
                              type="password"
                              name="password"
                              id="password"
                              className="form-control form-control-user"
                              placeholder="Password"
                            />
                          </div>
                          <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary btn-user btn-block"
                          >
                            Login
                          </button>
                          <hr />
                          <button
                            disabled
                            href="index.html"
                            className="btn btn-google btn-user btn-block"
                          >
                            <i className="fab fa-google fa-fw"></i> Login with
                            Google
                          </button>
                          <button
                            disabled
                            href="index.html"
                            className="btn btn-facebook btn-user btn-block"
                          >
                            <i className="fab fa-facebook-f fa-fw"></i> Login
                            with Facebook
                          </button>
                        </form>
                        <hr />
                        <div className="text-center">
                          <a className="small" href="forgot-password.html">
                            Forgot Password?
                          </a>
                        </div>
                        <div className="text-center">
                          <a className="small" href="register.html">
                            Create an Account!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Index;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ExportURL from "../../hooks/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

  // eslint-disable-next-line
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [RePassWord, setRePassword] = useState("");
  const [name, setName] = useState("");
  const roleName = "User";

  const Navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    const regisUser = {
      email,
      password,
      name,
      roleName,
    };

    if (password !== RePassWord) {
      toast.error("RePassWord not match !", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
      });
    } else {
      try {
        const res = await axios.post(
          `${ExportURL.URL_API}/auth/SignUp`,
          regisUser
        );
        if (res.data.errCode === 2) {
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 2000,
          });
        }else if(res.data.errCode === 1){
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 2000,
          });
        }else if(res.data.errCode === 0){
          Navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
    }

    console.log(email, password, RePassWord, name, roleName);
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form onSubmit={handleClick} className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              onChange={(e) => setName(e.target.value)}
                            />
                            <label className="form-label" htmlFor="name">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className="form-label" htmlFor="email">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="rePassword"
                              className="form-control"
                              onChange={(e) => setRePassword(e.target.value)}
                            />
                            <label className="form-label" htmlFor="rePassword">
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="/#">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample IMG"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Register;

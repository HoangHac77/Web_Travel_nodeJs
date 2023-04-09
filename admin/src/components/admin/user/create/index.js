import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import ExportURL from "../../../../hooks/URL";
import { Link } from "react-router-dom";

const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [roleName, setRoleName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(email, password, name, phone, roleName)
    const newUser = {
      email,
      password,
      phone,
      name,
      roleName,
    };

    try {
      const res = await axios.post(`${ExportURL.URL_API}/auth/SignUp`, newUser);
      if (res.data.errCode === 1) {
        console.log(res.data.message);
        toast.error(res.data.message, {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 2000,
        });
      } else if (res.data.errCode === 0) {
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 2000,
        });
        toast.info(CustomToastWithLink, {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 20000,
        });
      }
    } catch (err) {   
      console.log(err);    
    }
  };

  const CustomToastWithLink = () => (
    <div>
      <Link to="/admin/user">Click here back to List User</Link>
    </div>
  );
  //   const notify = () => toast("Wow so easy!");

  return (
    <>
      <div className="container-fluid">
        {/* <!-- Nested Row within Card Body --> */}
        <div className="row">
          <div className="col-xl-12">
            {/* <!-- Account details card--> */}
            <div className="card mb-4">
              <div className="card-header">
                <h1 className="h4 text-primary">Create an Account!</h1>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* <!-- Form Row--> */}
                  <div className="row gx-3 mb-3 form-group">
                    {/* <!-- Form Group (first name)--> */}
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">User name</label>
                      <input
                        onChange={(e) => setUserName(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="Please enter user name"
                      />
                    </div>
                    {/* <!-- Form Group (last name)--> */}
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Email</label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="Please enter user email"
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3 form-group">
                    {/* <!-- Form Group (first name)--> */}
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Password</label>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        type="password"
                        placeholder="Please enter Password"
                      />
                    </div>
                    {/* <!-- Form Group (last name)--> */}
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Phone</label>
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="Please enter Phone"
                      />
                    </div>
                  </div>
                  <div className="form-group" style={{ width: "40%" }}>
                    <label htmlFor="inputUsername">Choose Role</label>
                    <select
                      onChange={(e) => setRoleName(e.target.value)}
                      className="browser-default custom-select"
                    >
                      <option defaultValue>Open this select Role</option>
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                    </select>
                  </div>
                  {/* <button onClick={notify}>Notify!</button> */}
                  <button className="btn btn-success" type="submit">
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default CreateUser;

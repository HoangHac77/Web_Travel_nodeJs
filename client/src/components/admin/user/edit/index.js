import React, { useState, useEffect, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import ExportURL from "../../../../hooks/URL";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const EditU = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [roleName, setRoleName] = useState("");

  const { id } = useParams();

  const UpdateSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, phone, roleName);

    const upUser = {
      phone,
      name,
      roleName,
    };

    try {
      const res = await axios.post(
        `${ExportURL.URL_API}/auth/UpdateWithoutImg/${id}`,
        upUser
      );
      // console.log(res.data)
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
      });
      toast.info(CustomToastWithLink, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 20000,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getUserById = useCallback(async () => {
    const getData = await axios.get(`${ExportURL.URL_API}/auth/GetOne/${id}`);
    setEmail(getData.data.email);
    setPassword(getData.data.password);
    setUserName(getData.data.name);
    setPhone(getData.data.phone);
    setRoleName(getData.data.roleName);
  }, [id]);

  useEffect(() => {
    getUserById();
  }, [getUserById]);

  const CustomToastWithLink = () => (
    <div>
      <Link to="/user">Click here back to List User</Link>
    </div>
  );

  return (
    <>
      <div className="container-fluid">
        {/* <!-- Nested Row within Card Body --> */}
        <div className="row">
          <div className="col-xl-12">
            {/* <!-- Account details card--> */}
            <div className="card mb-4">
              <div className="card-header">
                <h1 className="h4 text-primary">Update User!</h1>
              </div>
              <div className="card-body">
                <form onSubmit={UpdateSubmit}>
                  {/* <!-- Form Row--> */}
                  <div className="row gx-3 mb-3 form-group">
                    {/* <!-- Form Group (first name)--> */}
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">User name</label>
                      <input
                        value={name}
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
                        disabled
                        value={email}
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
                        disabled
                        value={password}
                        className="form-control"
                        type="password"
                        placeholder="Please enter Password"
                      />
                    </div>
                    {/* <!-- Form Group (last name)--> */}
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Phone</label>
                      <input
                        value={phone}
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
                      value={roleName}
                    >
                      {/* <option defaultValue>Open this select Role</option> */}
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                    </select>
                  </div>
                  {/* <button onClick={notify}>Notify!</button> */}
                  <button className="btn btn-success" type="submit">
                    update
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

export default EditU;

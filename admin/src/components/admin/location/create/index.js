import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import ExportURL from "../../../../hooks/URL";
import { Link } from "react-router-dom";

const CreateLocation = () => {
  const [country, setCountry] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [descLocation, setDescLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newLocation = {
      country,
      placeName,
      descLocation,
    };

    try {
      const res = await axios.post(
        `${ExportURL.URL_API}/location/Create`,
        newLocation
      );
    //   console.log(res.data)
      if (res.data.errCode === 0) {
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
      <Link to="/admin/location">Click here back to List Location</Link>
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
                <h1 className="h4 text-primary">Create an Location!</h1>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* <!-- Form Row--> */}
                  <div className="row gx-3 mb-3 form-group">
                    {/* <!-- Form Group (first name)--> */}
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Country</label>
                      <input
                        onChange={(e) => setCountry(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="Please enter Country"
                      />
                    </div>
                    {/* <!-- Form Group (last name)--> */}
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Place Name</label>
                      <input
                        onChange={(e) => setPlaceName(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="Please enter Place Name"
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3 form-group">
                    {/* <!-- Form Group (first name)--> */}
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Desc</label>
                      <textarea
                        className="form-control"
                        onChange={(e) => setDescLocation(e.target.value)}
                        rows={4}
                        cols={40}
                      />
                      {/* <input
                        onChange={(e) => setDescLocation(e.target.value)}
                        className="form-control"
                        type="text"
                        rows="5"
                        placeholder="Please enter Desc"
                      /> */}
                    </div>
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

export default CreateLocation;

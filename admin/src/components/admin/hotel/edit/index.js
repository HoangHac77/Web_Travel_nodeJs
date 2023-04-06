import React, { useState,useCallback,useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import ExportURL from "../../../../hooks/URL";
import { Link, useParams } from "react-router-dom";

const Index = () => {
  const [NameHotel, setNameHotel] = useState("");
  const { id } = useParams();

  // console.log(id)

  const UpdateHotel = async (e) => {
    e.preventDefault();

    const updateHotel = {
      NameHotel,
    };

    try {
      const res = await axios.put(
        `${ExportURL.URL_API}/hotel/update/${id}`,
        updateHotel
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

  const getUserByHotel = useCallback(async () => {
    const getData = await axios.get(
      `${ExportURL.URL_API}/hotel/GetOne/${id}`
    );
    setNameHotel(getData.data.NameHotel);
  }, [id]);

  useEffect(() => {
    getUserByHotel();
  }, [getUserByHotel]);

  const CustomToastWithLink = () => (
    <div>
      <Link to="/admin/hotel">Click here back to List Location</Link>
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
                <form onSubmit={UpdateHotel}>
                  {/* <!-- Form Row--> */}
                  <div className="row gx-3 mb-3 form-group">
                    {/* <!-- Form Group (first name)--> */}
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Name Hotel</label>
                      <input
                       value={NameHotel}
                        onChange={(e) => setNameHotel(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="Please enter Country"
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3 form-group">
                    {/* <!-- Form Group (first name)--> */}

                    <div className="col-md-6">
                      <label htmlFor="inputUsername">
                        JPG or PNG no larger than 5 MB
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        multiple
                      ></input>
                    </div>

                    <div className="col-md-6">
                      <img
                        alt="RoomsImage"
                        className="img-account-profile rounded-circle mb-2"
                        // src={
                        //   files
                        //     ? URL.createObjectURL(files[0])
                        //     : "https://i.pinimg.com/736x/c3/41/3f/c3413f7c697760db7608ee10e1e234fb.jpg"
                        // }
                      />
                    </div>
                  </div>
                  {/* <button onClick={notify}>Notify!</button> */}
                  <button className="btn btn-success" type="submit">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default Index
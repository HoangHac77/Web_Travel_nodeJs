import React, { useState, useEffect, useCallback, useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import ExportURL from "../../../../hooks/URL";
import { Link, useParams } from "react-router-dom";

const Edit = () => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { loading: true, data: null }
  );

  const { id } = useParams();

  const getBookingById = useCallback(async () => {
    const getData = await axios.get(
      `${ExportURL.URL_API}/booking/GetOneBooking/${id}`
    );
    setState({ loading: false, data: getData.data });
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      getBookingById();
    }, 1100);
  }, [getBookingById]);

  // Object.keys(state).map((oneKey, i) => {
  //   console.log(state[oneKey])
  //  })

   console.log(state)
  // const isObjectEmpty = (objectName) => {
  //   return Object.keys(objectName).length === 0
  // }
  

  // console.log(isObjectEmpty(state)); // false
  // console.log(isObjectEmpty(state)); // true

  return (
    <>
      <div className="container-fluid">
        {/* <!-- Nested Row within Card Body --> */}
        <div className="row">
          <div className="col-xl-12">
            {/* <!-- Account details card--> */}
            <div className="card mb-4">
              <div className="card-header">
                <h1 className="h4 text-primary">Detail Bill !</h1>
              </div>
              <div className="card-body">
                <form>
                  {/* <!-- Form Row--> */}
                  <div className="row gx-3 mb-3 form-group">
                    {/* <!-- Form Group (first name)--> */}
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Name Tour</label>
                      <input value={state.loading === false && state.data.TourInfo.NameTour} disabled className="form-control" type="text" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Abbreviation</label>
                      <input value={state.loading === false && state.data.TourInfo.abbreviation} disabled className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3 form-group">
                    {/* <!-- Form Group (first name)--> */}
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Total Time</label>
                      <input value={state.loading === false && state.data.TourInfo.totalTime} disabled className="form-control" type="text" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">DeparturesDay</label>
                      <input
                        disabled
                        // onChange={(e) => se(e.target.value)}
                        className="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3 form-group">
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Price Person</label>
                      <input value={state.loading === false && state.data.TourInfo.PricePerson} disabled type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">TypeTransPort</label>
                      <input value={state.loading === false && state.data.TourInfo.TypeOfTransport.nameTransport} disabled type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3 form-group">
                    {/* <!-- Form Group (first name)--> */}
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Location</label>
                      <input value={state.loading === false && state.data.TourInfo.Location.placeName} disabled type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Hotel</label>
                      <input value={state.loading === false && state.data.TourInfo.Hotel.NameHotel}   disabled type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3 form-group">
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Adult Number</label>
                      <input value={state.loading === false && state.data.Adult} disabled type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Child Number</label>
                      <input value={state.loading === false && state.data.Children} disabled type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3 form-group">
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Adult TotalCost</label>
                      <input value={state.loading === false && state.data.AdultTotalCost + " $"} disabled type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Child TotalCost</label>
                      <input value={state.loading === false && state.data.ChildrenTotalCost + " $"} disabled type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3 form-group">
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Total member(s)</label>
                      <input value={state.loading === false && state.data.totalGuest} disabled type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">TOTAL PRICE</label>
                      <input value={state.loading === false && state.data.totalCost + " $"} disabled type="text" className="form-control" />
                    </div>
                  </div>

                  {/* <div className="row gx-3 mb-3 form-group">

                    <div className="col-md-6 mt-3">
                      <img
                        alt="RoomsImage"
                        className="img-account-profile rounded-circle mb-2"
                        src="https://i.pinimg.com/736x/c3/41/3f/c3413f7c697760db7608ee10e1e234fb.jpg"
                        height={100}
                        width={100}
                      />
                    </div>
                  </div> */}
                  {/* <button onClick={notify}>Notify!</button> */}
                  <Link
                    to={"/admin/bills"}
                    className="btn btn-primary"
                    type="submit"
                  >
                    Back List
                  </Link>
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

export default Edit;

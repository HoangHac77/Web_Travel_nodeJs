import React, { useState, useEffect, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import ExportURL from "../../../../hooks/URL";
import { Link, useParams } from "react-router-dom";

const Index = () => {
  const [NameTour, setNameTour] = useState("");
  const [abbreviation, setAbbreviation] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [Description, setDescription] = useState("");
  const [PricePerson, setPricePerson] = useState("");
  const [idTypesOfTransport, setIdTypesOfTransport] = useState(undefined);
  const [idHotel, setIdHotel] = useState(undefined);
  const [idLocation, setIdLocation] = useState(undefined);
  const [images, setImages] = useState("");

  const [dataHotel, setDataHotel] = useState([]);
  const [dataLocation, setDataLocation] = useState([]);
  const [dataType, setDataType] = useState([]);

  const { id } = useParams();

  let pic;

  const getTourById = useCallback(async () => {
    const getData = await axios.get(
      `${ExportURL.URL_API}/tour/GetIdTour2/${id}`
    );
    setNameTour(getData.data.NameTour);
    setAbbreviation(getData.data.abbreviation);
    setTotalTime(getData.data.totalTime);
    setDescription(getData.data.Description);
    setPricePerson(getData.data.PricePerson);
    setIdTypesOfTransport(getData.data.TypeOfTransport.id);
    setIdHotel(getData.data.Hotel.id);
    setIdLocation(getData.data.Location.id);
    setImages(getData.data.images);
  }, [id]);

  const displayData = async () => {
    axios.get(`${ExportURL.URL_API}/transport/GetAll`).then((res) => {
      setDataType(res.data);
      // console.log(res);
    });
    axios.get(`${ExportURL.URL_API}/hotel/GetAll`).then((res) => {
      setDataHotel(res.data);
      // console.log(res);
    });
    axios.get(`${ExportURL.URL_API}/location/GetAll`).then((res) => {
      setDataLocation(res.data);
      // console.log(res);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      getTourById();
      displayData();
    }, 1100);
  }, [getTourById]);

  const UpdateSubmit = async (e) => {
    e.preventDefault();

    const updateTour = {
      NameTour,
      abbreviation,
      totalTime,
      Description,
      PricePerson,
      idTypesOfTransport,
      idHotel,
      idLocation,
      images,
    };

    if (typeof images === "object") {
      let listImg = await Promise.all(
        Object.values(images).map(async (file) => {
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("MultipleFiles", file);
          const uploadRes = await axios
            .post(`${ExportURL.URL_API}/Upload/upload-multiple`, data)
            .catch((err) =>
              toast.error(err.response.data.msg, {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 2000,
              })
            );
          return uploadRes.data;
        })
      );

      updateTour.images = listImg;
    }

    try {
      const res = await axios.post(
        `${ExportURL.URL_API}/tour/UpdateTour/${id}`,
        updateTour
      );
      console.log(id);
      console.log(res);
      toast.success(res.data.msg, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
      });
      toast.info(CustomToastWithLink, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 20000,
      });
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.msg, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
      });
    }
  };

  if (images !== "" && typeof images !== "object") {
    pic = JSON.parse(images);
  }
  // console.log(idTypesOfTransport);

  const CustomToastWithLink = () => (
    <div>
      <Link to="/admin/tour">Click here back to List Tour</Link>
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
                <h1 className="h4 text-primary">Update an Tour!</h1>
              </div>
              <div className="card-body">
                <form onSubmit={UpdateSubmit}>
                  {/* <!-- Form Row--> */}
                  <div className="row gx-3 mb-3 form-group">
                    {/* <!-- Form Group (first name)--> */}
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Name Tour</label>
                      <input
                        value={NameTour}
                        onChange={(e) => setNameTour(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="Please enter Name tour"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Abbreviation</label>
                      <input
                        value={abbreviation}
                        onChange={(e) => setAbbreviation(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="Please enter Abbreviation"
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3 form-group">
                    {/* <!-- Form Group (first name)--> */}
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Total Time</label>
                      <input
                        value={totalTime}
                        onChange={(e) => setTotalTime(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="Please enter Total Time"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">DeparturesDay</label>
                      <input
                        disabled
                        // onChange={(e) => se(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="Please enter DeparturesDay"
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3 form-group">
                    <div className="col-md-12">
                      <label htmlFor="inputUsername">Description</label>
                      <textarea
                        value={Description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                        rows={4}
                        cols={4}
                        type="text"
                        placeholder="Please enter Description"
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3 form-group">
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Price Person</label>
                      <input
                        value={PricePerson}
                        onChange={(e) => setPricePerson(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Please enter Price Person"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">
                        Choose TypeTransPort
                      </label>
                      <select
                        onChange={(e) =>
                          setIdTypesOfTransport(e.target.value.split(",")[0])
                        }
                        className="browser-default custom-select"
                      >
                        <option hidden>Open this select Type</option>
                        {dataType.map((val) => {
                          return (
                            <option
                              key={val.id}
                              value={[val.id, val.nameTransport]}
                              selected={
                                idTypesOfTransport === val.id ? true : false
                              }
                            >
                              {val.nameTransport}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="row gx-3 mb-3 form-group">
                    {/* <!-- Form Group (first name)--> */}
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Choose Location</label>
                      <select
                        onChange={(e) =>
                          setIdLocation(e.target.value.split(",")[0])
                        }
                        className="browser-default custom-select"
                      >
                        <option hidden>Open this select Location</option>
                        {dataLocation.map((val) => {
                          return (
                            <option
                              key={val.id}
                              value={[val.id, val.placeName]}
                              selected={idLocation === val.id ? true : false}
                            >
                              {val.placeName}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputUsername">Choose Hotel</label>
                      <select
                        onChange={(e) =>
                          setIdHotel(e.target.value.split(",")[0])
                        }
                        className="browser-default custom-select"
                      >
                        <option hidden>Open this select Hotel</option>
                        {dataHotel.map((val) => {
                          return (
                            <option
                              key={val.id}
                              value={[val.id, val.NameHotel]}
                              selected={idHotel === val.id ? true : false}
                            >
                              {val.NameHotel}
                            </option>
                          );
                        })}
                      </select>
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
                        onChange={(e) => {
                          setImages(e.target.files);
                        }}
                      ></input>
                    </div>

                    <div className="col-md-6 mt-3">
                      {typeof images === "object" ? (
                        Object.keys(images).map((oneKey, i) => {
                          return (
                            <img
                              key={i}
                              style={{
                                marginRight: "20px",
                                marginBottom: "10px",
                              }}
                              alt="RoomsImage"
                              className="img-account-profile rounded mb-2"
                              src={URL.createObjectURL(images[oneKey])}
                              height={150}
                              width={150}
                            />
                          );
                        })
                      ) : pic !== undefined ? (
                        pic.map((value, index) => {
                          return (
                            <img
                              key={index}
                              style={{
                                marginRight: "20px",
                                marginBottom: "10px",
                              }}
                              alt="RoomsImage"
                              className="img-account-profile rounded mb-2"
                              src={`${ExportURL.BASE_URL}/${value}`}
                              height={100}
                              width={100}
                            />
                          );
                        })
                      ) : (
                        <img
                          alt="RoomsImage"
                          className="img-account-profile rounded-circle mb-2"
                          src="https://i.pinimg.com/736x/c3/41/3f/c3413f7c697760db7608ee10e1e234fb.jpg"
                          height={100}
                          width={100}
                        />
                      )}
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
  );
};

export default Index;

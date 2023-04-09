import React, { useState, useCallback, useEffect, useContext } from "react";
import axios from "axios";
import ExportURL from "../../hooks/config";
import { useParams, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Details = () => {
  // eslint-disable-next-line
  const [NameTour, setNameTour] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [Description, setDescription] = useState("");
  const [PricePerson, setPricePerson] = useState(undefined);
  const [Location, setLocation] = useState(undefined);
  const [images, setImages] = useState("");

  const [numberA, setNumberA] = useState(1);
  const [numberC, setNumberC] = useState(0);

  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const Navigate = useNavigate();
  const { pathname } = useLocation();

  const salePriceForChild = (100 - 20) / 100;

  let moneyA = PricePerson * numberA;

  let moneyC = PricePerson * numberC * salePriceForChild;

  let totalCost = moneyA + moneyC;

  // console.log(moneyA, moneyC, totalCost)

  const handleClick = async (e) => {
    e.preventDefault();

    const newBooking = {
      Adult: numberA,
      Children: numberC,
      AdultTotalCost: moneyA,
      ChildrenTotalCost: moneyC,
      totalCost: totalCost,
      totalGuest: parseInt(numberA) + parseInt(numberC),
      idUser: user === null ? undefined : user.id,
      idTourInfo: id,
    };

    if (user === null) {
      setTimeout(() => {
        Navigate("/login", { state: { previousPath: pathname } });
      }, 500);
    } else {
      try {
        const res = await axios.post(
          `${ExportURL.URL_API}/booking/Create`,
          newBooking
        );
        console.log(res.data);
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 2000,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getTourById = useCallback(async () => {
    const getData = await axios.get(
      `${ExportURL.URL_API}/tour/GetIdTour2/${id}`
    );
    setNameTour(getData.data.NameTour);
    setTotalTime(getData.data.totalTime);
    setDescription(getData.data.Description);
    setPricePerson(getData.data.PricePerson);
    setLocation(getData.data.Location.placeName);
    setImages(getData.data.images);
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      getTourById();
    }, 1100);
  }, [getTourById]);

  class pics {
    constructor(imgs) {
      if (images !== "" && typeof images !== "object") {
        let pic = JSON.parse(images);

        return (this.imgs = pic);
      }
    }
  }
  var book = new pics();

  return (
    <>
      <div className="container mt-3 mb-6">
        <div className="row">
          <div className="col-lg-9">
            <div className="card">
              <div className="card-title d-flex justify-content-between">
                <div className="p-2">
                  <i className="fas fa-camera"></i> Photos
                </div>
                <div className="p-2">
                  <i className="fas fa-globe"></i> More Tour
                </div>
              </div>
              <img
                // src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp"
                src={`${ExportURL.BASE_URL}/${book[0]}`}
                className="card-img-top"
                alt="Chicago Skyscrapers"
                height={450}
              />
              <div className="row mt-3 me-2 ms-2">
                {Object.keys(book).map((oneKey, i) => {
                  return (
                    <div key={i} className="col-lg-2 col-md-4 mb-4 mb-md-0">
                      <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                      >
                        <img
                          src={`${ExportURL.BASE_URL}/${book[oneKey]}`}
                          className="w-100"
                          alt="IMG"
                        />

                        <a href="/#">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "gba(251, 251, 251, 0.2)",
                            }}
                          ></div>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* <!-- Tabs navs --> */}
              <ul className="nav nav-tabs mb-3 mt-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="ex1-tab-1"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-1"
                    role="tab"
                    aria-controls="ex1-tabs-1"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="ex1-tab-2"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-2"
                    role="tab"
                    aria-controls="ex1-tabs-2"
                    aria-selected="false"
                  >
                    Preferences
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="ex1-tab-3"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-3"
                    role="tab"
                    aria-controls="ex1-tabs-3"
                    aria-selected="false"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
              {/* <!-- Tabs navs --> */}

              {/* <!-- Tabs content --> */}
              <div className="tab-content ms-3 mb-3" id="ex1-content">
                <div
                  className="tab-pane fade show active"
                  id="ex1-tabs-1"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-1"
                >
                  <div className="d-flex flex-column">
                    <span className="mb-2 fw-bolder">Tour Description</span>
                    <span className="mb-2" style={{ fontSize: "14px" }}>
                      {Description}
                    </span>
                    <span className="mb-2 fw-bolder">Facilities of Tour</span>
                    <ul className="list-group list-group-light list-group-small">
                      <li className="list-group-item d-flex justify-content-between">
                        <p>Food & Drink</p>
                        <p className="me-2">Breakfast in the Room</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <p>Internet</p>
                        <p className="me-2">
                          Free! WiFi is available in all areas and is free of
                          charge.
                        </p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <p>Parking</p>
                        <p className="me-2">
                          Vending Machine (drinks), 24-Hour Front Desk, Express
                          Check-in/Check-out{" "}
                        </p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <p>Languages</p>
                        <p className="me-2">
                          Italian, French, Spanish, English, Arabic
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="ex1-tabs-2"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-2"
                >
                  Tab 2 content
                </div>
                <div
                  className="tab-pane fade"
                  id="ex1-tabs-3"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-3"
                >
                  Tab 3 content
                </div>
              </div>
              {/* <!-- Tabs content --> */}
            </div>
          </div>

          <div className="col-lg-3 mt-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-primary">{NameTour}</h5>
                <h6 className="card-subtitle mb-2 text-muted text-black">
                  11 NOV 2015 - 22 NOW 2015
                </h6>
                <ul className="list-group list-group-light">
                  <li className="list-group-item px-3">
                    <i className="fas fa-bus"></i> +{" "}
                    <i className="fas fa-plane"></i>
                  </li>
                  <li className="list-group-item px-3 text-black">
                    <i className="fas fa-person"></i>
                    <i className="fas fa-person"></i> Person(s)
                  </li>
                  <li className="list-group-item px-3 text-black">
                    Location: {Location}
                  </li>
                  <li className="list-group-item px-3 text-black">
                    {totalTime}
                  </li>
                  <li className="list-group-item px-3 text-danger fs-5 fw-bolder">
                    $ {PricePerson} / Person
                  </li>
                  <li className="list-group-item px-3">
                    <i className="far fa-star-half-stroke"></i>{" "}
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    {"    "} 100 Viewers
                  </li>
                  <li className="list-group-item px-3">
                    {Description.substring(0, 100)}...
                  </li>
                  <li className="list-group-item px-3">
                    <div className="btn-group w-100">
                      <a href="#!" className="btn btn-primary">
                        Add to WishList
                      </a>
                    </div>
                    <div className="btn-group mt-3 w-100">
                      <button
                        data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal"
                        className="btn btn-success"
                      >
                        Book Now
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Need Sparrow Help?</h5>
                <h6 className="card-subtitle mb-2 text-muted fs-6 mt-1">
                  WE WOULD BE HAPPY TO HELP YOU!
                </h6>

                <p className="card-text">
                  <i className="fas fa-mobile-screen-button"></i> 2-800-256-124
                  23 <br />
                  sparrow@mail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Tour */}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" style={{ maxWidth: "1200px" }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Booking
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body row">
                <div className="col-8">
                  <form onSubmit={handleClick}>
                    {/* <!-- Name input --> */}
                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            id="name"
                            defaultValue={user === null ? "" : user.name}
                            className="form-control border border-gray"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            id="email"
                            defaultValue={user === null ? "" : user.email}
                            className="form-control border"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col">
                        <div
                          className="form-outline"
                          style={{ width: "22rem" }}
                        >
                          <label htmlFor="Adult">Adult</label>
                          <i
                            className="fas fa-person trailing"
                            style={{ marginTop: "13px" }}
                          ></i>
                          <input
                            type="number"
                            id="Adult"
                            onChange={(e) => setNumberA(e.target.value)}
                            min={1}
                            className="form-control form-icon-trailing border"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <label htmlFor="Children">Child</label>
                          <i
                            className="fas fa-child trailing"
                            style={{ marginTop: "13px" }}
                          ></i>
                          <input
                            type="number"
                            id="Children"
                            onChange={(e) => setNumberC(e.target.value)}
                            min={1}
                            className="form-control form-icon-trailing border"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline">
                          <label htmlFor="AdultTotalCost">AdultTotalCost</label>
                          <input
                            disabled
                            type="number"
                            id="AdultTotalCost"
                            value={numberA * PricePerson}
                            className="form-control border"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <label htmlFor="ChildrenTotalCost">
                            ChildrenTotalCost
                          </label>
                          <input
                            disabled
                            type="number"
                            id="ChildrenTotalCost"
                            value={numberC * PricePerson * salePriceForChild}
                            className="form-control border"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline">
                          <label htmlFor="totalCost">totalCost</label>
                          <input
                            disabled
                            type="number"
                            id="totalCost"
                            value={
                              numberA * PricePerson +
                              numberC * PricePerson * salePriceForChild
                            }
                            className="form-control border"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <label htmlFor="totalGuest">totalGuest</label>
                          <input
                            disabled
                            type="number"
                            id="totalGuest"
                            value={parseInt(numberA) + parseInt(numberC)}
                            className="form-control border"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        data-mdb-dismiss="modal"
                      >
                        Complete Booking
                      </button>
                    </div>
                  </form>
                  {/* title */}
                  <h5 className="modal-title mb-2" id="exampleModalLabel">
                    How would you like to pay?
                  </h5>
                  {/* title */}

                  {/* <!-- Tabs navs --> */}
                  <ul
                    className="nav nav-tabs mb-3"
                    id="ex-with-icons"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        id="ex-with-icons-tab-1"
                        data-mdb-toggle="tab"
                        href="#ex-with-icons-tabs-1"
                        role="tab"
                        aria-controls="ex-with-icons-tabs-1"
                        aria-selected="true"
                      >
                        <i className="far fa-credit-card"></i>Credit Card
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="ex-with-icons-tab-2"
                        data-mdb-toggle="tab"
                        href="#ex-with-icons-tabs-2"
                        role="tab"
                        aria-controls="ex-with-icons-tabs-2"
                        aria-selected="false"
                      >
                        <i className="fab fa-cc-paypal"></i>
                        PayPal
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="ex-with-icons-tab-3"
                        data-mdb-toggle="tab"
                        href="#ex-with-icons-tabs-3"
                        role="tab"
                        aria-controls="ex-with-icons-tabs-3"
                        aria-selected="false"
                      >
                        <i className="fab fa-cc-stripe"></i>Stripe
                      </a>
                    </li>
                  </ul>
                  {/* <!-- Tabs navs --> */}

                  {/* <!-- Tabs content --> */}
                  <div className="tab-content" id="ex-with-icons-content">
                    <div
                      className="tab-pane fade show active"
                      id="ex-with-icons-tabs-1"
                      role="tabpanel"
                      aria-labelledby="ex-with-icons-tab-1"
                    >
                      <div className="d-flex flex-column col-3">
                        <div>Card Type:</div>
                        <div
                          className="d-flex justify-content-evenly"
                          style={{ marginLeft: "-10px", marginTop: "5px" }}
                        >
                          <button>
                            <img
                              width={30}
                              height={30}
                              src="https://img.icons8.com/fluency/48/null/visa.png"
                              alt="Payment"
                            />
                          </button>
                          <button>
                            <img
                              width={30}
                              height={30}
                              src="https://img.icons8.com/color/48/null/mastercard.png"
                              alt="Payment"
                            />
                          </button>
                          <button>
                            <img
                              width={30}
                              height={30}
                              src="https://img.icons8.com/fluency/48/null/mastercard.png"
                              alt="Payment"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="ex-with-icons-tabs-2"
                      role="tabpanel"
                      aria-labelledby="ex-with-icons-tab-2"
                    >
                      Tab 2 content
                    </div>
                    <div
                      className="tab-pane fade"
                      id="ex-with-icons-tabs-3"
                      role="tabpanel"
                      aria-labelledby="ex-with-icons-tab-3"
                    >
                      Tab 3 content
                    </div>
                  </div>
                  {/* <!-- Tabs content --> */}
                </div>
                <div className="col-4">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={`${ExportURL.BASE_URL}/${book[0]}`}
                          alt="Trendy Pants and Shoes"
                          className="img-fluid rounded-start"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body" style={{ paddingTop: 0 }}>
                          <h5 className="card-title fs-6">{NameTour}</h5>
                          <p
                            className="card-text"
                            style={{ fontSize: "12px", marginBottom: "0px" }}
                          >
                            11 NOV 2015 - 22 NOW 2015
                          </p>
                          <div className="card-text">
                            <li
                              className="list-group-item"
                              style={{ fontSize: "12px", marginTop: "5px" }}
                            >
                              <i className="far fa-star-half-stroke"></i>{" "}
                              <i className="far fa-star"></i>
                              <i className="far fa-star"></i>
                              <i className="far fa-star"></i>
                              <i className="far fa-star"></i>
                              {"    "} 100 Viewers
                            </li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <ul className="list-group list-group-light">
                      <li
                        className="list-group-item fw-bolder"
                        style={{ padding: "0" }}
                      >
                        DETAILS
                      </li>
                      <li
                        className="list-group-item pb-2 text-primary fw-bolder"
                        style={{ fontSize: "14px", padding: "0" }}
                      >
                        Price Person: $ {PricePerson}
                      </li>
                      <li
                        className="list-group-item pb-2 text-primary fw-bolder"
                        style={{ fontSize: "14px", padding: "0" }}
                      >
                        Adult: {numberA} member(s)
                      </li>
                      <li
                        className="list-group-item pb-2 text-primary fw-bolder"
                        style={{ fontSize: "14px", padding: "0" }}
                      >
                        Child: {numberC} member(s)
                      </li>
                      <li
                        className="list-group-item pb-2 text-primary fw-bolder"
                        style={{ fontSize: "14px", padding: "0" }}
                      >
                        TotalGuest: {parseInt(numberA) + parseInt(numberC)}{" "}
                        member(s)
                      </li>
                      <li
                        className="list-group-item pb-2 text-primary fw-bolder"
                        style={{ fontSize: "14px", padding: "0" }}
                      >
                        AdultCost: {numberA * PricePerson} $
                      </li>
                      <li
                        className="list-group-item pb-2 text-primary fw-bolder"
                        style={{ fontSize: "14px", padding: "0" }}
                      >
                        ChildCost: {numberC * PricePerson * salePriceForChild} $
                      </li>
                      <li
                        className="list-group-item fw-bolder"
                        style={{ fontSize: "16px" }}
                      >
                        Total Price:{" "}
                        {numberA * PricePerson +
                          numberC * PricePerson * salePriceForChild}{" "}
                        $
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-mdb-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
        {/* Booking Tour */}
      </div>
    </>
  );
};

export default Details;

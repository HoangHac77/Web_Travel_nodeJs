import React, { useEffect, useState, useMemo } from "react";
import ExportURL from "../../hooks/config";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const Tours = () => {
  const [price, setPrice] = useState("");

  const [data, setData] = useState([]);

  const displayAllTour = async () => {
    axios.get(`${ExportURL.URL_API}/tour/GetAll`).then((res) => {
      setData(res.data);
      // console.log(res);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      displayAllTour();
    }, 2000);
  }, []);

  // console.log(data);
  const [search, searchTour] = useState("");

  const findInfo = useMemo(() => {
    if (search !== "") {
      const find = data.filter(
        (item) =>
          Object.values(item).includes(search) ||
          item.PricePerson === search * 1 ||
          item.NameTour.toLowerCase().includes(search.toLowerCase())
      ); //Object.values(item): lấy giá trị từ object chuyển thành mảng phù hợp includes
      return find;
    } else if (price !== "") {
      const find = data.filter((item) => {
        if (price >= 100) {
          return item.PricePerson >= price * 1;
        } else if (price <= 99) {
          return item.PricePerson <= price * 1;
        }
      });
      return find;
    } else {
      return data;
    }
  }, [data, search, price]);
  return (
    <>
      <div className="container mt-3 mb-6">
        <div className="row">
          <div className="col-lg-3">
            <div
              className="card text-black bg-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header">PRICE AND SEARCH TOUR</div>
              <div className="form-check m-2">
                <label className="form-check-label">
                  SEARCH TOUR
                  <input
                    type="text"
                    value={search}
                    onChange={(find) => {
                      searchTour(find.target.value);
                    }}
                  />
                </label>
                <label className="form-check-label">
                  PRICE
                  <input
                    type="text"
                    min="1"
                    max="1000"
                    placeholder="Nhập số tiền "
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    // step="0.5"
                  />
                </label>
              </div>

              {/* <div className="card-body">
                <label for="customRange3" className="form-label">
                  {price} $
                </label>
              </div> */}
            </div>
            <div
              className="card text-black bg-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header">TOUR TYPE</div>
              {/* <!-- Default checkbox --> */}
              <div className="form-check m-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Car
                </label>
              </div>

              {/* <!-- Checked checkbox --> */}
              <div className="form-check m-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" for="flexCheckChecked">
                  bus
                </label>
              </div>
            </div>
          </div>
          <div className="col-9">
            {/* <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                    alt="Trendy Pants and Shoes"
                    className="img-thumbnail w-100 h-100"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                    alt="Trendy Pants and Shoes"
                    className="img-thumbnail w-100 h-100"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            {data.length === 0 ? (
              <div className="d-flex flex-column align-items-center mb-3 mt-3">
                <div class="spinner-border text-primary mb-3" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div
                  class="spinner-border text-primary mt-3 mb-3"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div
                  class="spinner-border text-primary mt-3 mb-3"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div
                  class="spinner-border text-primary mt-3 mb-3"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div
                  class="spinner-border text-primary mt-3 mb-3"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              findInfo.map((val, index) => {
                const pic = JSON.parse(val.images);
                return (
                  <div
                    className="row justify-content-center mb-3"
                    style={{ marginLeft: "-50px", marginRight: "-50px" }}
                  >
                    <div className="col-md-12 col-xl-10">
                      <div className="card shadow-0 border rounded-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                              <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                <img
                                  src={
                                    pic === null
                                      ? ExportURL.ImgNotFound
                                      : `${ExportURL.BASE_URL}/${pic[0]}`
                                  }
                                  className="w-100"
                                  alt="tour"
                                />
                                <a href="#!">
                                  <div className="hover-overlay">
                                    <div
                                      className="mask"
                                      style={{
                                        backgroundColor:
                                          "rgba(253, 253, 253, 0.15)",
                                      }}
                                    ></div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-6">
                              <h5>{val.NameTour}</h5>
                              <div className="d-flex flex-row">
                                <div className="text-danger mb-1 me-2">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </div>
                                <span>310 (viewer)</span>
                              </div>
                              <div className="mt-1 mb-0 text-muted small">
                                <span>{val.TypeOfTransport.nameTransport}</span>
                                <span className="text-primary"> • </span>
                                <span>
                                  {val.TypeOfTransport.nameTransport ===
                                    "Train" && (
                                    <i class="fas fa-train-subway"></i>
                                  )}
                                  {val.TypeOfTransport.nameTransport ===
                                    "Yoat" && <i class="fas fa-ship"></i>}
                                  {val.TypeOfTransport.nameTransport ===
                                    "Bus" && <i class="fas fa-bus"></i>}
                                  {val.TypeOfTransport.nameTransport ===
                                    "Airplane" && <i class="fas fa-plane"></i>}
                                </span>
                                <span className="text-primary"> • </span>

                                <br />
                              </div>
                              <div className="mb-2 text-muted small">
                                <span>{val.Location.country}</span>
                                <span className="text-primary"> • </span>
                                {/* <span>For men</span> */}
                                <span>
                                  Casual
                                  <br />
                                </span>
                              </div>
                              <p className="text-truncate mb-4 mb-md-0">
                                {val.Description}
                              </p>
                            </div>
                            <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                              <div className="d-flex flex-row align-items-center mb-1">
                                <h4 className="mb-1 me-1">
                                  $ {val.PricePerson} /{" "}
                                  <i class="fas fa-person"></i>
                                </h4>
                                <span className="text-danger">
                                  <s>$20.99</s>
                                </span>
                              </div>
                              {/* <h6 className="text-success">Free shipping</h6> */}
                              <div className="d-flex flex-column mt-4">
                                <Link
                                  to={`details/${val.id}`}
                                  className="btn btn-primary btn-sm"
                                >
                                  Details
                                </Link>
                                <button
                                  className="btn btn-outline-primary btn-sm mt-2"
                                  type="button"
                                >
                                  Add to wishlist
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tours;

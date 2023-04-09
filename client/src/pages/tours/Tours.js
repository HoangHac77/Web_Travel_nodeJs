import React, { useEffect, useState, useMemo } from "react";
import ExportURL from "../../hooks/config";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
// import moment from "moment";

const Tours = () => {
  const [price, setPrice] = useState("");
  const [data, setData] = useState([]);
  const [search, searchTour] = useState("");
  const [check, checkTransport] = useState("");
  const [checkBox, SetCheckBox] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const toursPerPage = 5;
  const pagesVisited = pageNumber * toursPerPage;
  const transportTypes = ["Airplane", "Train", "Bus", "Yoat"];
  const displayAllTour = async () => {
    axios.get(`${ExportURL.URL_API}/tour/GetAll`).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      displayAllTour();
    }, 2000);
  }, []);

  const searchAll = useMemo(() => {
    let filteredData = [...data];
    if (search !== "") {
      filteredData = filteredData.filter(
        (item) =>
          Object.values(item).some((value) =>
            String(value).toLowerCase().includes(search.toLowerCase())
          ) || item.PricePerson === search * 1
      ); //Object.values(item): lấy giá trị từ object chuyển thành mảng phù hợp includes
    }
    if (price !== "") {
      filteredData = filteredData.filter(
        (item) =>
          (price >= 100 && item.PricePerson >= price * 1) ||
          (price <= 99 && item.PricePerson <= price * 1)
      );
    }
    if (check.length !== 0) {
      filteredData = filteredData.filter((item) =>
        check.includes(item.TypeOfTransport.nameTransport)
      );
    }
    return filteredData;
  }, [data, search, price, check]);

  const handleCheck = (e) => {
    const transport = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      checkTransport([...check, transport]);
    } else {
      checkTransport(check.filter((item) => item !== transport));
    }
  };
  const clearFilter = (e) => {
    setPrice("");
    searchTour("");
    checkTransport([]);
  };
  const pageCount = Math.ceil(searchAll.length / toursPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleInputChange = (event) => {
    searchTour(event.target.value);
  };

  return (
    <>
      <div className="container mt-3 mb-6">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3" style={{ paddingLeft: "35px" }}>
            <div
              class="card border-bottom border-primary shadow-0 mb-3"
              // style="max-width: 18rem;"
              style={{ maxWidth: "18rem", borderRadius: "0" }}
            >
              <div class="card-header fw-bolder text-primary">
                SEARCH NAME TOUR
              </div>
              <div class="card-body" style={{ paddingTop: "0px" }}>
                <div class="card-text">
                  <div class="form-outline">
                    <input
                      type="search"
                      value={search}
                      onChange={handleInputChange}
                      id="form1"
                      class="form-control border border-dark"
                      placeholder="Type query here !"
                      aria-label="Search"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card border-bottom border-primary shadow-0 mb-3"
              // style="max-width: 18rem;"
              style={{ maxWidth: "18rem", borderRadius: "0" }}
            >
              <div class="card-header fw-bolder text-primary">
                SEARCH PRICE TOUR
              </div>
              <div class="card-body" style={{ paddingTop: "0px" }}>
                <div class="card-text">
                  <div class="form-outline">
                    <label htmlFor="form1"></label>
                    <input
                      type="text"
                      min="1"
                      max="1000"
                      placeholder="Enter Price "
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      // step="0.5"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card text-black bg-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header">TOUR TYPE</div>
              {/* <!-- Default checkbox --> */}
              <button className="clear-btn" onClick={clearFilter}>
                Clear Filters
              </button>
              {/* <!-- Checked checkbox --> */}
              {transportTypes.map((type) => (
                <div className="form-check m-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={type}
                    id={type}
                    onChange={handleCheck}
                    checked={check.includes(type)}
                  />
                  <label className="form-check-label" htmlFor={type}>
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="col-9">
            {data.length === 0 ? (
              <div className="d-flex flex-column align-items-center mb-3 mt-3">
                <div className="spinner-border text-primary mb-3" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div
                  className="spinner-border text-primary mt-3 mb-3"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div
                  className="spinner-border text-primary mt-3 mb-3"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div
                  className="spinner-border text-primary mt-3 mb-3"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div
                  className="spinner-border text-primary mt-3 mb-3"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              searchAll
                .slice(pagesVisited, pagesVisited + toursPerPage)
                .map((val, index) => {
                  const pic = JSON.parse(val.images);
                  return (
                    <div
                      key={index}
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
                                  <span>
                                    {val.TypeOfTransport.nameTransport}
                                  </span>
                                  <span className="text-primary"> • </span>
                                  <span>
                                    {val.TypeOfTransport.nameTransport ===
                                      "Train" && (
                                      <i className="fas fa-train-subway"></i>
                                    )}
                                    {val.TypeOfTransport.nameTransport ===
                                      "Yoat" && <i className="fas fa-ship"></i>}
                                    {val.TypeOfTransport.nameTransport ===
                                      "Bus" && <i className="fas fa-bus"></i>}
                                    {val.TypeOfTransport.nameTransport ===
                                      "Airplane" && (
                                      <i className="fas fa-plane"></i>
                                    )}
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
                                    <i className="fas fa-person"></i>
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

      <nav className="mt-4" aria-label="Page navigation sample">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={changePage}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </nav>
    </>
  );
};

export default Tours;

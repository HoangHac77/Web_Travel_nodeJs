import React from "react";

const Details = () => {
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
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp"
                className="card-img-top"
                alt="Chicago Skyscrapers"
                height={450}
              />
              <div className="row mt-3 me-2 ms-2">
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                    data-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                      className="w-100"
                      alt="IMG"
                    />
                    <a href="/#">
                      <div
                        className="mask"
                        style={{ backgroundColor: "gba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                    data-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
                      className="w-100"
                      alt="IMG"
                    />
                    <a href="/#">
                      <div
                        className="mask"
                        style={{ backgroundColor: "gba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                    data-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
                      className="w-100"
                      alt="IMG"
                    />
                    <a href="/#">
                      <div
                        className="mask"
                        style={{ backgroundColor: "gba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                    data-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
                      className="w-100"
                      alt="IMG"
                    />
                    <a href="/#">
                      <div
                        className="mask"
                        style={{ backgroundColor: "gba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                    data-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
                      className="w-100"
                      alt="IMG"
                    />
                    <a href="/#">
                      <div
                        className="mask"
                        style={{ backgroundColor: "gba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                    data-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
                      className="w-100"
                      alt="IMG"
                    />
                    <a href="/#">
                      <div
                        className="mask"
                        style={{ backgroundColor: "gba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>
                </div>
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
                      Voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui.
                      voluptatem sequi nesciunt. Neque porro quisqua. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam
                    </span>
                    <span className="mb-2 fw-bolder">Facilities of Tour</span>
                    <ul class="list-group list-group-light list-group-small">
                      <li class="list-group-item d-flex justify-content-between">
                        <p>Food & Drink</p>
                        <p className="me-2">Breakfast in the Room</p>
                      </li>
                      <li class="list-group-item d-flex justify-content-between">
                        <p>Internet</p>
                        <p className="me-2">
                          Free! WiFi is available in all areas and is free of
                          charge.
                        </p>
                      </li>
                      <li class="list-group-item d-flex justify-content-between">
                        <p>Parking</p>
                        <p className="me-2">
                          Vending Machine (drinks), 24-Hour Front Desk, Express
                          Check-in/Check-out{" "}
                        </p>
                      </li>
                      <li class="list-group-item d-flex justify-content-between">
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
                <h5 className="card-title">Amazing France Tour</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  11 NOV 2015 - 22 NOW 2015
                </h6>
                <ul className="list-group list-group-light">
                  <li className="list-group-item px-3">
                    <i className="fas fa-bus"></i> +{" "}
                    <i className="fas fa-plane"></i>
                  </li>
                  <li className="list-group-item px-3">
                    <i className="fas fa-person"></i>
                    <i className="fas fa-person"></i> Person(s)
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
                    Voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui voluptatem sequi
                    nesciunt.
                  </li>
                  <li className="list-group-item px-3">
                    <div className="btn-group w-100">
                      <a href="#!" className="btn btn-primary">
                        Add to WishList
                      </a>
                    </div>
                    <div className="btn-group mt-3 w-100">
                      <a href="#!" className="btn btn-success">
                        Book Now
                      </a>
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
      </div>
    </>
  );
};

export default Details;

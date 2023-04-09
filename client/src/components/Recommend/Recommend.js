import React, { useEffect, useState } from "react";
import ExportURL from "../../hooks/config";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "./recomnend.css";

const Recommend = () => {
  const [dataNew, setDataNew] = useState([]);

  const displayAllTourNew = async () => {
    axios.get(`${ExportURL.URL_API}/tour/GetAllNew`).then((res) => {
      setDataNew(res.data);
      // console.log(res);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      displayAllTourNew();
    }, 1200);
  }, []);

  // console.log(typeof dataPop)

  return (
    <>
      <header>
        {/* <!-- Jumbotron --> */}
        <div class="p-4 mt-4 text-center bg-light">
          <h1 class="mb-3 fs-4">OUR FEATURED TOURS</h1>
          <hr class="hr hr-blurry" />
          <h4 class="mb-3 fs-6">
            Voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui.
          </h4>
        </div>
        {/* <!-- Jumbotron --> */}
      </header>

      {/* Tours */}
      <div class="row row-cols-1 row-cols-md-4 g-4 mt-1 mb-8">
        {dataNew.length === 0 ? (
          <>
            <div class="col">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <div class="col">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <div class="col">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <div class="col">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </>
        ) : (
          dataNew.map((val, index) => {
            const pic = JSON.parse(val.images);
            return (
              <div class="col">
                <div class="card border hover-zoom">
                  <Link to={`/details/${val.id}`}>
                    <img
                      src={
                        pic === null
                          ? ExportURL.ImgNotFound
                          : `${ExportURL.BASE_URL}/${pic[0]}`
                      }
                      className="img-fluid img-thumbnail"
                      alt="Skyscrapers"
                    />
                  </Link>
                  <div class="card-body" style={{ paddingBottom: 0 }}>
                    <h5 class="card-title text-uppercase fs-5">
                      {val.NameTour}
                    </h5>

                    <div class="card-text d-flex justify-content-between">
                      <div
                        className="text-uppercase"
                        style={{ fontSize: "12px" }}
                      >
                        Location : {val.Location.country} <br />{" "}
                        <div class="mt-1 d-flex justify-content-between align-items-center">
                          <div class="small-ratings">
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star rating-color"></i>
                            <i class="fa fa-star"></i>
                          </div>
                        </div>{" "}
                      </div>
                      <div
                        className="text-uppercase"
                        style={{ fontSize: "12px" }}
                      >
                        {val.PricePerson} $ / <i class="fas fa-person"></i>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">
                      {moment(val.updatedAt)
                        .startOf("hour")
                        .fromNow()}
                    </small>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Recommend;

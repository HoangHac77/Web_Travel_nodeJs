import React, { useEffect, useState } from "react";
import ExportURL from "../../hooks/config";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "./popular.css";

const Popular = () => {
  const [dataPop, setDataPop] = useState([]);

  const displayAllTourPop = async () => {
    axios.get(`${ExportURL.URL_API}/tour/GetAllPop`).then((res) => {
      setDataPop(res.data);
      // console.log(res);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      displayAllTourPop();
    }, 2000);
  }, []);

  // if(dataPop.length >= 0 ){
  // console.log(typeof dataPops)
  // }

  return (
    <>
      <header>
        {/* <!-- Jumbotron --> */}
        <div className="p-4 mt-3 text-center bg-light">
          <h1 className="mb-3 fs-4">WE ARE OFFERING THE HOTTEST OFFERS</h1>
          <hr className="hr hr-blurry" />
          <h4 className="mb-3 fs-6">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia conseuuntur magni dolores eos qui ratione.
          </h4>
        </div>
        {/* <!-- Jumbotron --> */}
      </header>

      {/* Tours */}
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-1">
        {dataPop.length === 0 ? (
          <>
            <div className="col">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            <div className="col">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            <div className="col">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            <div className="col">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </>
        ) : (
          dataPop.map((val, index) => {
            const pic = JSON.parse(val.images);
            return (
              <div className="col">
                <div className="card border hover-zoom">
                  <Link to={`/details/${val.id}`}>
                    <img
                      src={
                        pic === null
                          ? ExportURL.ImgNotFound
                          : `${ExportURL.BASE_URL}/${pic[0]}`
                      }
                      className="img-fluid img-thumbnail"
                      alt="Skyscrapers"
                      // width={75}
                      // height={75}
                    />
                  </Link>
                  <div className="card-body" style={{ paddingBottom: 0 }}>
                    <h5 className="card-title text-uppercase fs-5">
                      {val.NameTour}
                    </h5>

                    <div className="card-text d-flex justify-content-between">
                      <div
                        className="text-uppercase"
                        style={{ fontSize: "12px" }}
                      >
                        Location : {val.Location.country} <br />{" "}
                        <div className="mt-1 d-flex justify-content-between align-items-center">
                          <div className="small-ratings">
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>{" "}
                      </div>
                      <div>{""}</div>
                      <div
                        className="text-uppercase"
                        style={{ fontSize: "12px" }}
                      >
                        {val.PricePerson} $ / <i className="fas fa-person"></i>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
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

export default Popular;

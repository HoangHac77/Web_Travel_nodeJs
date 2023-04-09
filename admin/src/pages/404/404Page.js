import React from "react";
import "./404.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className="error-actions">
              <Link to={"/admin"} className="btn btn-primary btn-lg">
                <span className="glyphicon glyphicon-home"></span>
                Take Me Admin{" "}
              </Link>
              <a
                href="!#"
                as={Link}
                to={"/NotAllowd"}
                className="btn btn-default btn-lg"
              >
                <span className="glyphicon glyphicon-envelope"></span>
                <a href="/#">Contact Support </a>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;

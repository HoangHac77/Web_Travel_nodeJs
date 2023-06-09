import express from "express";
import TourController from "../controllers/TourController.js";
import UploadController from "../controllers/UploadFile.js";
// const passport = require("passport");
// const passportConfig = require("../middlewares/passport.js");

let router = express.Router();

let TourRoute = (app) => {
  router
    .post("/Create", UploadController.uploads, TourController.CreateTour)
    .get("/GetAll", TourController.GetAllTour)
    .get("/GetAllPop", TourController.GetAllWithPopular)
    .get("/GetAllNew", TourController.GetAllWithNew)
    // .post("/GetIdTour", TourController.GetIdTour)
    .get("/GetIdTour2/:id", TourController.GetIdTour2)
    .post("/UpdateTour/:id", TourController.UpdateOneTour)
    .delete("/DeleteTour/:id", TourController.DeleteTour)
    .get("/Query", TourController.QueryParams)
    .post(
      "/UpdateImageTour/:id",
      UploadController.uploads,
      TourController.UpdateTourImage
    );
  // .post("/ReviewTour/:id/:idUser", TourController.Reviewer);

  return app.use("/server/tour", router);
};

module.exports = TourRoute;

import express from "express";
import LocationController from "../controllers/LocationController.js";
// const passport = require("passport");
// const passportConfig = require("../middlewares/passport.js");

let router = express.Router();

let LocationRoute = (app) => {
  router
    .post("/Create", LocationController.CreateLocation)
    .get("/GetOne/:id", LocationController.OneLocation)
    .get("/GetAll", LocationController.GetAllLocation)
    .put("/updateLo/:id", LocationController.UpdateLocation)
    .delete("/delete/:id", LocationController.DeleteLocation);

  return app.use("/server/location", router);
};

module.exports = LocationRoute;

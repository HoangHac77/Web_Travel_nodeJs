import express from "express";
import authController from "../controllers/AuthController.js";
// const passport = require("passport");
// const passportConfig = require("../middlewares/passport.js");
import UploadController from "../controllers/UploadFile.js";

let router = express.Router();

let AuthRoutes = (app) => {
  router
    .post("/SignUp", authController.registerUser)
    .post("/SignIn", authController.signIn)
    .get(
      "/",
      // passport.authenticate("jwt", { session: false }),
      authController.DisplayAllUser
    )
    .post("/LogOut", authController.Logout)
    .get("/GetOne/:id", authController.OneUser)
    .delete("/Delete/:id", authController.DeleteUser)
    .post("/Update/:id", UploadController.upload, authController.UpdateUser)
    .post("/UpdateWithoutImg/:id", authController.UpdateUserWithoutImg)
    .post(
      "/UpdateImage/:id",
      UploadController.upload,
      authController.UpdateImageOneUser
    )
    .post("/UpdateReviewUser/:id", authController.UpdateReviewUser);

  return app.use("/server/auth", router);
};

module.exports = AuthRoutes;

let express = require("express");
let router = express.Router();
// const { ObjectId } = require("mongodb");
let User = require("../models/user");
let UserService = require("../services/UserServices");

router
  .get("/", function (req, res) {
    res.send({
      msg: "default route user",
    });
  })
  .get("/listUser", async function (req, res) {
    let userService = new UserService();
    let user =  await userService.getUserList();
    res.json(user);
  })
  .post("/addUser", async function(req, res){
    let userService = new UserService();
    let newUser = new User();
    await userService.insertUser(newUser);
    res.json({status: true, message:"create success !"});
  })  


module.exports = router;

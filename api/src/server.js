// library
const express = require('express');
require('dotenv').config();
const app = express();
var controller = require(__dirname + "/controllers"); //return path folder

app.use(express.json());
app.use(controller);

app.use("/public", express.static(__dirname + "/public")); //return path folder public for css, js

// console.log(__dirname)

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
  console.log(`Server running at Port:`, PORT)
})


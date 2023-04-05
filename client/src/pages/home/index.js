import React from "react";
import HeaderPage from "./header/index"
import MainPage from "./main/index"
import FooterPage from "./footer/index"
import PopUp from "./signInPopup/index"
import Switch from "../../components/home/color_switcher/index"

// css
import '../../assets/home/css/bootstrap.min.css'
import '../../assets/home/css/style.css'
import '../../assets/home/css/vendors.css'
// js
import '../../assets/home/js/DATEPICKER.js'
import '../../assets/home/js/common_scripts.js'
import '../../assets/home/js/input_qty.js'
import '../../assets/home/js/main.js'
import '../../assets/home/js/switcher.js'
import '../../assets/home/js/phpmailer/validate.js'

const index = () => {
  return (
    <>
      <body class="datepicker_mobile_full">
        <div id="page">
            <HeaderPage />
            <MainPage/>
            <FooterPage/>
        </div>
            <PopUp/>
            <Switch/>
      </body>
    </>
  );
};

export default index;

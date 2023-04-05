import React from "react";

const index = () => {
  return (
    <>
      <div id="style-switcher">
        <h6>
          Color Switcher{" "}
          <a href="#">
            <i class="ti-settings"></i>
          </a>
        </h6>
        <div>
          <ul class="colors" id="color1">
            <li>
              <a href="#" class="default" title="Default"></a>
            </li>
            <li>
              <a href="#" class="aqua" title="Aqua"></a>
            </li>
            <li>
              <a href="#" class="green_switcher" title="Green"></a>
            </li>
            <li>
              <a href="#" class="orange" title="Orange"></a>
            </li>
            <li>
              <a href="#" class="blue" title="Blue"></a>
            </li>
            <li>
              <a href="#" class="beige" title="Beige"></a>
            </li>
            <li>
              <a href="#" class="gray" title="Gray"></a>
            </li>
            <li>
              <a href="#" class="green-2" title="Green"></a>
            </li>
            <li>
              <a href="#" class="navy" title="Navy"></a>
            </li>
            <li>
              <a href="#" class="peach" title="Peach"></a>
            </li>
            <li>
              <a href="#" class="purple" title="Purple"></a>
            </li>
            <li>
              <a href="#" class="red" title="Red"></a>
            </li>
            <li>
              <a href="#" class="violet" title="Violet"></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default index;

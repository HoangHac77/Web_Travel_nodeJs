import React from "react";

const index = () => {
  return (
    <>
      <section class="hero_single version_2">
        <div class="wrapper">
          <div class="container">
            <h3>Book unique experiences</h3>
            <p>
              Expolore top rated tours, hotels and restaurants around the world
            </p>
            <form>
              <div class="row g-0 custom-search-input-2">
                <div class="col-lg-4">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Hotel, City..."
                    />
                    <i class="icon_pin_alt"></i>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      name="dates"
                      placeholder="When.."
                    />
                    <i class="icon_calendar"></i>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="panel-dropdown">
                    <a href="#">
                      Guests <span class="qtyTotal">1</span>
                    </a>
                    <div class="panel-dropdown-content">
                      {/* Quantity Buttons  */}
                      <div class="qtyButtons">
                        <label>Adults</label>
                        <input type="text" name="qtyInput" value="1" />
                      </div>
                      <div class="qtyButtons">
                        <label>Childrens</label>
                        <input type="text" name="qtyInput" value="0" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2">
                  <input type="submit" class="btn_search" value="Search" />
                </div>
              </div>
              {/* /row  */}
            </form>
          </div>
        </div>
      </section>
      {/* /hero_single  */}
    </>
  );
};

export default index;
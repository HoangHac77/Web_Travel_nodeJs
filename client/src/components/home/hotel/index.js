import React from "react";

const index = () => {
  return (
    <>
      <div class="container container-custom margin_30_95">
        <section class="add_bottom_45">
          <div class="main_title_3">
            <span>
              <em></em>
            </span>
            <h2>Popular Hotels and Accommodations</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
          <div class="row">
            <div class="col-xl-3 col-lg-6 col-md-6">
              <a href="hotel-detail.html" class="grid_item">
                <figure>
                  <div class="score">
                    <strong>8.9</strong>
                  </div>
                  <img src="img/hotel_1.jpg" class="img-fluid" alt="" />
                  <div class="info">
                    <div class="cat_star">
                      <i class="icon_star"></i>
                      <i class="icon_star"></i>
                      <i class="icon_star"></i>
                      <i class="icon_star"></i>
                    </div>
                    <h3>Mariott Hotel</h3>
                  </div>
                </figure>
              </a>
            </div>
            {/* <!-- /grid_item --> */}
            <div class="col-xl-3 col-lg-6 col-md-6">
              <a href="hotel-detail.html" class="grid_item">
                <figure>
                  <div class="score">
                    <strong>7.9</strong>
                  </div>
                  <img src="img/hotel_2.jpg" class="img-fluid" alt="" />
                  <div class="info">
                    <div class="cat_star">
                      <i class="icon_star"></i>
                      <i class="icon_star"></i>
                      <i class="icon_star"></i>
                      <i class="icon_star"></i>
                    </div>
                    <h3>Concorde Hotel </h3>
                  </div>
                </figure>
              </a>
            </div>
            {/* <!-- /grid_item --> */}
            <div class="col-xl-3 col-lg-6 col-md-6">
              <a href="hotel-detail.html" class="grid_item">
                <figure>
                  <div class="score">
                    <strong>7.0</strong>
                  </div>
                  <img src="img/hotel_3.jpg" class="img-fluid" alt="" />
                  <div class="info">
                    <div class="cat_star">
                      <i class="icon_star"></i>
                      <i class="icon_star"></i>
                      <i class="icon_star"></i>
                      <i class="icon_star"></i>
                    </div>
                    <h3>Louvre Hotel</h3>
                  </div>
                </figure>
              </a>
            </div>
            {/* <!-- /grid_item --> */}
            <div class="col-xl-3 col-lg-6 col-md-6">
              <a href="hotel-detail.html" class="grid_item">
                <figure>
                  <div class="score">
                    <strong>8.9</strong>
                  </div>
                  <img src="img/hotel_4.jpg" class="img-fluid" alt="" />
                  <div class="info">
                    <div class="cat_star">
                      <i class="icon_star"></i>
                      <i class="icon_star"></i>
                      <i class="icon_star"></i>
                      <i class="icon_star"></i>
                    </div>
                    <h3>Park Yatt Hotel</h3>
                  </div>
                </figure>
              </a>
            </div>
            {/* <!-- /grid_item --> */}
          </div>
          {/* <!-- /row --> */}
          <a href="hotels-grid-isotope.html">
            <strong>
              View all (157) <i class="arrow_carrot-right"></i>
            </strong>
          </a>
        </section>
        {/* <!-- /section --> */}

        <section class="add_bottom_45">
          <div class="main_title_3">
            <span>
              <em></em>
            </span>
            <h2>Popular Restaurants</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
          <div class="row">
            <div class="col-xl-3 col-lg-6 col-md-6">
              <a href="restaurant-detail.html" class="grid_item">
                <figure>
                  <div class="score">
                    <strong>8.5</strong>
                  </div>
                  <img src="img/restaurant_1.jpg" class="img-fluid" alt="" />
                  <div class="info">
                    <h3>Da Alfredo</h3>
                  </div>
                </figure>
              </a>
            </div>
            {/* <!-- /grid_item --> */}
            <div class="col-xl-3 col-lg-6 col-md-6">
              <a href="restaurant-detail.html" class="grid_item">
                <figure>
                  <div class="score">
                    <strong>7.9</strong>
                  </div>
                  <img src="img/restaurant_2.jpg" class="img-fluid" alt="" />
                  <div class="info">
                    <h3>Slow Food</h3>
                  </div>
                </figure>
              </a>
            </div>
            {/* <!-- /grid_item --> */}
            <div class="col-xl-3 col-lg-6 col-md-6">
              <a href="restaurant-detail.html" class="grid_item">
                <figure>
                  <div class="score">
                    <strong>7.5</strong>
                  </div>
                  <img src="img/restaurant_3.jpg" class="img-fluid" alt="" />
                  <div class="info">
                    <h3>Bella Napoli</h3>
                  </div>
                </figure>
              </a>
            </div>
            {/* <!-- /grid_item --> */}
            <div class="col-xl-3 col-lg-6 col-md-6">
              <a href="restaurant-detail.html" class="grid_item">
                <figure>
                  <div class="score">
                    <strong>9.0</strong>
                  </div>
                  <img src="img/restaurant_4.jpg" class="img-fluid" alt="" />
                  <div class="info">
                    <h3>Marcus</h3>
                  </div>
                </figure>
              </a>
            </div>
            {/* <!-- /grid_item --> */}
          </div>
          {/* <!-- /row --> */}
          <a href="restaurants-grid-isotope.html">
            <strong>
              View all (157) <i class="arrow_carrot-right"></i>
            </strong>
          </a>
        </section>
        {/* <!-- /section --> */}

        <div class="banner mb-0">
          <div
            class="wrapper d-flex align-items-center opacity-mask"
            data-opacity-mask="rgba(0, 0, 0, 0.3)"
          >
            <div>
              <small>Adventure</small>
              <h3>
                Your Perfect
                <br />
                Advenure Experience
              </h3>
              <p>Activities and accommodations</p>
              <a href="adventure.html" class="btn_1">
                Read more
              </a>
            </div>
          </div>
          {/* <!-- /wrapper --> */}
        </div>
        {/* <!-- /banner --> */}
      </div>
      {/* <!-- /container --> */}
    </>
  );
};

export default index;

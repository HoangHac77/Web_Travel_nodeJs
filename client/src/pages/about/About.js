import React from "react";

const About = () => {
  return (
    <>
      <div className="container mt-3 mb-6">
        <header>
          {/* <!-- Jumbotron --> */}
          <div className="p-4 mt-3 text-center bg-light">
            <h1 className="mb-3 fs-4">ABOUT OUR COMPANY</h1>
            <hr className="hr hr-blurry" />
            <h4 className="mb-3 fs-6">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            </h4>
          </div>
          {/* <!-- Jumbotron --> */}
        </header>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="h-100">
              <div class="card-body">
                <p class="card-text">
                  erspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque lauda erspiciatis unde omnis iste natus
                  error sit voluptatem accusantium doloremque laudantium, totam
                  rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="h-100">
              <div class="card-body">
                <p class="card-text">
                  doloremque laudantium, totam rem. Aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae
                  dicta. sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="h-100">
              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
            </div>
          </div>
        </div>

        <header>
          {/* <!-- Jumbotron --> */}
          <div className="p-4 mt-3 text-center bg-light">
            <h1 className="mb-3 fs-4">OUR TEAM</h1>
            <hr className="hr hr-blurry" />
            <h4 className="mb-3 fs-6">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            </h4>
          </div>
          {/* <!-- Jumbotron --> */}
        </header>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img
                src="https://bootwp.com/sparrow-html/img/about-01.jpg"
                class="card-img-top"
                alt="Skyscrapers"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://bootwp.com/sparrow-html/img/about-01.jpg"
                class="card-img-top"
                alt="Los Angeles Skyscrapers"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://bootwp.com/sparrow-html/img/about-01.jpg"
                class="card-img-top"
                alt="Palm Springs Road"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

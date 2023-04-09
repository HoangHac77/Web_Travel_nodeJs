import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container mt-3 mb-6">
        <header>
          {/* <!-- Jumbotron --> */}
          <div className="p-4 mt-3 text-center bg-light">
            <h1 className="mb-3 fs-4">GET IN TOUCH WITH US</h1>
            <hr className="hr hr-blurry" />
            <h4 className="mb-3 fs-6">
              NNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            </h4>
          </div>
          {/* <!-- Jumbotron --> */}
        </header>

        <div className="row">
          <div className="col-sm-3">
            <div className="card" style={{ width: "20rem" }}>
              <div className="card-header bg-light px-3 fs-5 text-center">
                OUR OFFICE
              </div>
              <div className="card-body">
                <p className="card-text">
                  Address: 58911 Lepzig Hore, 85000 Vienna, Austria
                </p>
                <p className="card-text">Telephones: +1 777 55-32-21</p>
                <p className="card-text">E-mail: contacts@miracle.com</p>
                <p className="card-text">Skype: sparrow</p>
                <p className="card-text">
                  <i className="fab fa-youtube pe-3"></i>
                  <i className="fab fa-facebook-f pe-3"></i>
                  <i className="fab fa-linkedin pe-3"></i>
                  <i className="fab fa-twitch pe-3"></i>
                  <i className="fab fa-twitter pe-3"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">CONTACT US</h5>
                <form className="mt-3">
                  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline ">
                        <input
                          type="text"
                          id="form6Example1"
                          className="form-control border border-bottom"
                        />
                        <label className="form-label" for="form6Example1">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form6Example2"
                          className="form-control border border-bottom"
                        />
                        <label className="form-label" for="form6Example2">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Text input --> */}
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form6Example3"
                      className="form-control border border-bottom"
                    />
                    <label className="form-label" for="form6Example3">
                      Company name
                    </label>
                  </div>

                  {/* <!-- Text input --> */}
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form6Example4"
                      className="form-control border border-bottom"
                    />
                    <label className="form-label" for="form6Example4">
                      Address
                    </label>
                  </div>

                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form6Example5"
                      className="form-control border border-bottom"
                    />
                    <label className="form-label" for="form6Example5">
                      Email
                    </label>
                  </div>

                  {/* <!-- Number input --> */}
                  <div className="form-outline mb-4">
                    <input
                      type="number"
                      id="form6Example6"
                      className="form-control border border-bottom"
                    />
                    <label className="form-label" for="form6Example6">
                      Phone
                    </label>
                  </div>

                  {/* <!-- Message input --> */}
                  <div className="form-outline mb-4">
                    <textarea
                      className="form-control border border-bottom"
                      id="form6Example7"
                      rows="4"
                    ></textarea>
                    <label className="form-label" for="form6Example7">
                      Additional information
                    </label>
                  </div>

                  {/* <!-- Submit button --> */}
                  <button type="submit" className="btn btn-primary btn-block mb-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

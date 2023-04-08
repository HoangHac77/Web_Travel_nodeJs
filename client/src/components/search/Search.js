import React, {useState} from "react";
import Form from "react-bootstrap/Form";

const Search = () => {

  const [date, setDate] = useState(new Date());

  return (
    <>
      <section className="p-4 mb-4 d-flex align-items-center flex-column">
        {/* <!-- Navbar --> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <!-- Container wrapper --> */}
          <div className="container-fluid">
            {/* <!-- Collapsible wrapper --> */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* <!-- Left links --> */}

              <div class="form-outline border-end">
                <Form.Control
                  type="date"
                  name="datepic"
                  placeholder="DateRange"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div class="form-outline border-end">
                <input type="text" id="form12" class="form-control" />
                <label class="form-label" for="form12">
                  Sizes
                </label>
              </div>
              {/* <!-- Search form --> */}
              <div className="input-group ps-5">
                <div id="navbar-search-autocomplete" className="form-outline">
                  <input type="search" id="form1" className="form-control" />
                  <label className="form-label" for="form1">
                    TOUR NAME
                  </label>
                </div>
                <button type="button" className="btn btn-primary">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            {/* <!-- Collapsible wrapper --> */}
          </div>
          {/* <!-- Container wrapper --> */}
        </nav>
        {/* <!-- Navbar --> */}
      </section>
    </>
  );
};

export default Search;

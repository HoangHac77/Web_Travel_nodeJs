import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, dispatch } = useContext(AuthContext);

  const Navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "LOGOUT" });
      Navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-black text-light">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars text-white"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            <a className="navbar-brand mt-2 mt-lg-0" href="/">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={"/tours"}>
                  Tours
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div className="d-flex align-items-center">
            {/* <!-- Icon --> */}
            {!user && (
              <>
                <Link className="text-reset me-3" to={"/login"}>
                  Login
                </Link>
                <Link className="text-reset me-3" to={"/signup"}>
                  Register
                </Link>
              </>
            )}

            {/* <!-- Notifications --> */}
            {user && (
              <div className="dropdown">
                <a
                  className="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="/#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell"></i>
                  <span className="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/#">
                      Some news
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Another news
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            )}
            {/* <!-- Avatar --> */}
            {user && (
              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow text-light"
                  href="/#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Welcome, {user.name}
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle ps-2"
                    height="25"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a className="dropdown-item" href="/#">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <button onClick={handleClick} className="dropdown-item">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </>
  );
};

export default Header;

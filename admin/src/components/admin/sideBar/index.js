import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <>
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/* <!-- Sidebar - Brand --> */}
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to={"/admin"}
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">
              SB Admin <sup>2</sup>
            </div>
          </Link>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider my-0" />

          {/* <!-- Nav Item - Dashboard --> */}
          <li className="nav-item active">
            <Link className="nav-link" to={"/admin"}>
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />

          {/* <!-- Heading --> */}
          <div className="sidebar-heading">Interface</div>

          {/* <!-- Nav Item - Pages Collapse Menu --> */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/#"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <i className="fas fa-window-restore"></i>
              <span>Tours</span>
            </a>
            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Tours Manager:</h6>
                <Link
                  to={"/admin/tour"}
                  className="collapse-item"
                  href="buttons.html"
                >
                  Show All
                </Link>
                <Link className="collapse-item" to={"/admin/createTour"}>
                  Add
                </Link>
              </div>
            </div>
          </li>

          {/* <!-- Nav Item - Utilities Collapse Menu --> */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="fas fa-user-friends"></i>
              <span>Users</span>
            </a>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">User Manager:</h6>
                <Link
                  to={"/admin/user"}
                  className="collapse-item"
                  href="utilities-color.html"
                >
                  Show All
                </Link>
                <Link to={"/admin/createUser"} className="collapse-item">
                  Add
                </Link>
              </div>
            </div>
          </li>

          {/* <!-- Nav Item - Utilities Collapse Menu --> */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/#"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              <i className="fas fa-map"></i>
              <span>Location</span>
            </a>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Location Manager:</h6>
                <Link
                  to={"/admin/location"}
                  className="collapse-item"
                  href="utilities-color.html"
                >
                  Show All
                </Link>
                <Link
                  to={"/admin/createLocation"}
                  className="collapse-item"
                  href="utilities-border.html"
                >
                  Add
                </Link>
              </div>
            </div>
          </li>

          {/* <!-- Nav Item - Utilities Collapse Menu --> */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/#"
              data-toggle="collapse"
              data-target="#collapseFourth"
              aria-expanded="true"
              aria-controls="collapseFourth"
            >
              <i className="fas fa-map"></i>
              <span>Hotel</span>
            </a>
            <div
              id="collapseFourth"
              className="collapse"
              aria-labelledby="headingFourth"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Location Manager:</h6>
                <Link
                  to={"/admin/hotel"}
                  className="collapse-item"
                  href="utilities-color.html"
                >
                  Show All
                </Link>
                <Link
                  to={"/admin/createHotel"}
                  className="collapse-item"
                  href="utilities-border.html"
                >
                  Add
                </Link>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/#"
              data-toggle="collapse"
              data-target="#collapseFifth"
              aria-expanded="true"
              aria-controls="collapseFifth"
            >
              <i class="fas fa-cart-plus"></i>
              <span>Bills</span>
            </a>
            <div
              id="collapseFifth"
              className="collapse"
              aria-labelledby="headingFourth"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Bill Manager:</h6>
                <Link
                  to={"/admin/bills"}
                  className="collapse-item"
                  href="utilities-color.html"
                >
                  Show All
                </Link>
              </div>
            </div>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />

          

          {/* <!-- Heading --> */}
          {/* <div className="sidebar-heading">Addons</div> */}

          {/* <!-- Nav Item - Pages Collapse Menu --> */}
          {/* <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/#"
              data-toggle="collapse"
              data-target="#collapsePages"
              aria-expanded="true"
              aria-controls="collapsePages"
            >
              <i className="fas fa-fw fa-folder"></i>
              <span>Pages</span>
            </a>
            <div
              id="collapsePages"
              className="collapse"
              aria-labelledby="headingPages"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Login Screens:</h6>
                <a className="collapse-item" href="login.html">
                  Login
                </a>
                <a className="collapse-item" href="register.html">
                  Register
                </a>
                <a className="collapse-item" href="forgot-password.html">
                  Forgot Password
                </a>
                <div className="collapse-divider"></div>
                <h6 className="collapse-header">Other Pages:</h6>
                <a className="collapse-item" href="404.html">
                  404 Page
                </a>
                <a className="collapse-item" href="blank.html">
                  Blank Page
                </a>
              </div>
            </div>
          </li> */}

          {/* <!-- Nav Item - Charts --> */}
          {/* <li className="nav-item">
            <a className="nav-link" href="charts.html">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Charts</span>
            </a>
          </li> */}

          {/* <!-- Nav Item - Tables --> */}
          {/* <li className="nav-item">
            <a className="nav-link" href="tables.html">
              <i className="fas fa-fw fa-table"></i>
              <span>Tables</span>
            </a>
          </li> */}

          {/* <!-- Divider --> */}
          {/* <hr className="sidebar-divider d-none d-md-block" /> */}

          {/* <!-- Sidebar Toggler (Sidebar) --> */}
          {/* <div className="text-center d-none d-md-inline">
            <button
              className="rounded-circle border-0"
              id="sidebarToggle"
            ></button>
          </div> */}

          {/* <!-- Sidebar Message --> */}
          {/* <div className="sidebar-card d-none d-lg-flex">
            <img
              className="sidebar-card-illustration mb-2"
              src={undraw_rocket}
              alt="img admin"
            />
            <p className="text-center mb-2">
              <strong>SB Admin Pro</strong> is packed with premium features,
              components, and more!
            </p>
            <a
              className="btn btn-success btn-sm"
              href="https://startbootstrap.com/theme/sb-admin-pro"
            >
              Upgrade to Pro!
            </a>
          </div> */}
        </ul>
      </>
    );
  }
}

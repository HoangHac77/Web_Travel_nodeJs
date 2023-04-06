import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminPages from "./pages/admin.js";
import AuthPage from "./pages/auth.js";
import AdminComponents from "./components/admin/index";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<AdminPages.MasterPageAdmin />}>
            <Route path="" element={<AdminPages.AdminDashBoard />} />
            <Route path="/admin" element={<AdminPages.AdminDashBoard />} />
            {/* <Route path="LoginAdmin" element={<AdminPages.LoginAdmin />} />
            <Route path="RegisterAdmin" element={<AdminPages.RegisterAdmin />} /> */}
            <Route
              path="/admin/tour"
              element={<AdminComponents.ToursAdmin />}
            />
            <Route
              path="/admin/createTour"
              element={<AdminComponents.CreateTour />}
            />
            <Route
              path="/admin/updateTour/:id"
              element={<AdminComponents.UpdateTours />}
            />
            <Route
              path="/admin/location"
              element={<AdminComponents.LocationAdmin />}
            />
            <Route
              path="/admin/createLocation"
              element={<AdminComponents.CreateLocation />}
            />
            <Route
              path="/admin/EditLocation/:id"
              element={<AdminComponents.EditLocation />}
            />
            <Route
              path="/admin/user"
              element={<AdminComponents.UsersAdmin />}
            />
            <Route
              path="/admin/createUser"
              element={<AdminComponents.CreateUserAdmin />}
            />
            <Route
              path="/admin/UpdateUser/:id"
              element={<AdminComponents.UpdateUser />}
            />
            <Route
              path="/admin/hotel"
              element={<AdminComponents.HotelAdmin />}
            />
            <Route
              path="/admin/createHotel"
              element={<AdminComponents.CreateHotel />}
            />
            <Route
              path="/admin/updateHotel/:id"
              element={<AdminComponents.UpdateHotel />}
            />
          </Route>

          <Route path="/admin/login" exact element={<AuthPage.LoginPage />} />
          <Route path="/admin/signup" exact element={<AuthPage.SignUpPage />} />
        </Routes>
      </Router>
    );
  }
}

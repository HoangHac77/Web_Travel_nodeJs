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
            {/* <Route path="LoginAdmin" element={<AdminPages.LoginAdmin />} />
            <Route path="RegisterAdmin" element={<AdminPages.RegisterAdmin />} /> */}
            <Route path="tour" element={<AdminComponents.ToursAdmin />} />
            <Route
              path="location"
              element={<AdminComponents.LocationAdmin />}
            />
            <Route path="user" element={<AdminComponents.UsersAdmin />} />
            <Route
              path="createUser"
              element={<AdminComponents.CreateUserAdmin />}
            />
            <Route
              path="UpdateUser/:id"
              element={<AdminComponents.UpdateUser />}
            />
          </Route>
          <Route path="/login" exact element={<AuthPage.LoginPage />} />
          <Route path="/signup" exact element={<AuthPage.SignUpPage />} />
        </Routes>
      </Router>
    );
  }
}

import React, { Component, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import AdminPages from "./pages/admin.js";
import AuthPage from "./pages/auth.js";
import AdminComponents from "./components/admin/index";

const ProtectedRouteAdmin = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to={"/admin/login"} />;
  } else if (user.roleName !== "Admin") {
    return <Navigate to={"/NotAllows"} />;
  }

  return children;
};

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/admin"
            exact
            element={
              <ProtectedRouteAdmin>
                <AdminPages.MasterPageAdmin />
              </ProtectedRouteAdmin>
            }
          >
            <Route
              path="/admin"
              element={
                <ProtectedRouteAdmin>
                  <AdminPages.AdminDashBoard />
                </ProtectedRouteAdmin>
              }
            />

            <Route
              path="/admin/tour"
              element={
                <ProtectedRouteAdmin>
                  <AdminComponents.ToursAdmin />
                </ProtectedRouteAdmin>
              }
            />
            <Route
              path="/admin/createTour"
              element={
                <ProtectedRouteAdmin>
                  <AdminComponents.CreateTour />
                </ProtectedRouteAdmin>
              }
            />
            <Route
              path="/admin/updateTour/:id"
              element={
                <ProtectedRouteAdmin>
                  <AdminComponents.UpdateTours />
                </ProtectedRouteAdmin>
              }
            />
            <Route
              path="/admin/location"
              element={
                <ProtectedRouteAdmin>
                  <AdminComponents.LocationAdmin />
                </ProtectedRouteAdmin>
              }
            />
            <Route
              path="/admin/createLocation"
              element={
                <ProtectedRouteAdmin>
                  <AdminComponents.CreateLocation />
                </ProtectedRouteAdmin>
              }
            />
            <Route
              path="/admin/EditLocation/:id"
              element={
                <ProtectedRouteAdmin>
                  <AdminComponents.EditLocation />
                </ProtectedRouteAdmin>
              }
            />
            <Route
              path="/admin/user"
              element={
                <ProtectedRouteAdmin>
                  <AdminComponents.UsersAdmin />
                </ProtectedRouteAdmin>
              }
            />
            <Route
              path="/admin/createUser"
              element={
                <ProtectedRouteAdmin>
                  <AdminComponents.CreateUserAdmin />
                </ProtectedRouteAdmin>
              }
            />
            <Route
              path="/admin/UpdateUser/:id"
              element={
                <ProtectedRouteAdmin>
                  <AdminComponents.UpdateUser />
                </ProtectedRouteAdmin>
              }
            />
            <Route
              path="/admin/hotel"
              element={
                <ProtectedRouteAdmin>
                  <AdminComponents.HotelAdmin />
                </ProtectedRouteAdmin>
              }
            />
            <Route
              path="/admin/createHotel"
              element={
                <ProtectedRouteAdmin>
                  <AdminComponents.CreateHotel />
                </ProtectedRouteAdmin>
              }
            />
            <Route
              path="/admin/updateHotel/:id"
              element={
                <ProtectedRouteAdmin>
                  <AdminComponents.UpdateHotel />
                </ProtectedRouteAdmin>
              }
            />
          </Route>
          <Route path="/*" exact element={<AdminPages.ErrorPage />} />
          <Route path="/admin/login" exact element={<AuthPage.LoginPage />} />
          <Route path="/admin/signup" exact element={<AuthPage.SignUpPage />} />
        </Routes>
      </Router>
    );
  }
}

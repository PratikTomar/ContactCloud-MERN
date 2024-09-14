import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import AuthDashboard from "../pages/AuthDashboard.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";

const Home = lazy(() => import("../pages/Home"));
const AddContact = lazy(() => import("../pages/AddContact.jsx"));
const EditContact = lazy(() => import("../pages/EditContact"));
const Signup = lazy(() => import("../pages/auth/Signup"));
const Signin = lazy(() => import("../pages/auth/Signin"));
const DashBoard = lazy(() => import("../pages/DashBoard.jsx"));
const ContactDescription = lazy(() =>
  import("../pages/ContactDescription.jsx")
);
const NotFound = lazy(() => import("../pages/NotFound.jsx"));

const MainRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <AuthDashboard />
            </ProtectedRoutes>
          }
        >
          <Route path="" element={<DashBoard />} />
          <Route path="contact" element={<AddContact />} />
          <Route path="editcontact/:id" element={<EditContact />} />
          <Route
            path="contact/description/:id"
            element={<ContactDescription />}
          />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;

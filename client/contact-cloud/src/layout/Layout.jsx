import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="title-container">
        <h1>ContactCloud | Save your contacts</h1>
      </div>
      <div className="contacts-container">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

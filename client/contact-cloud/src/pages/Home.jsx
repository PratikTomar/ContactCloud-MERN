import React from "react";
import Layout from "../layout/Layout";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="home-container">
          <main className="home-main">
            <section className="hero-section">
              <h2>Welcome to ContactCloud</h2>
              <p>
                Manage your contacts effortlessly with our easy-to-use
                application.
              </p>
            </section>
            <section className="features-section">
              <h3>Why Choose Us?</h3>
              <div className="features-list">
                <div className="feature-item">
                  <i className="feature-icon fas fa-user-plus"></i>
                  <h4>Create Contacts</h4>
                  <p>Add new contacts with all the necessary details.</p>
                </div>
                <div className="feature-item">
                  <i className="feature-icon fas fa-edit"></i>
                  <h4>Edit Contacts</h4>
                  <p>Update contact information quickly and efficiently.</p>
                </div>
                <div className="feature-item">
                  <i className="feature-icon fas fa-trash-alt"></i>
                  <h4>Delete Contacts</h4>
                  <p>Easily remove contacts that you no longer need.</p>
                </div>
                <div className="feature-item">
                  <i className="feature-icon fas fa-trash-alt"></i>
                  <h4>Call Contacts Instantly</h4>
                  <p>Easily call using call button</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default Home;

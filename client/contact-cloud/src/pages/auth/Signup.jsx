import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useToggle from "../../hooks/useToggle";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { BASE_API } from "../../utils/constants";

const Signup = () => {
  const navigate = useNavigate();
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { toggleHandler, isToggle } = useToggle();
  const { data, fetchData, isLoading } = useFetch(`${BASE_API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signUpDetails),
  });

  const resetForm = () => {
    setSignUpDetails({
      name: "",
      email: "",
      password: "",
    });
  };

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignUpDetails({
      ...signUpDetails,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await fetchData();
  };

  useEffect(() => {
    try {
      if (data?.status === "success") {
        toast.success("User successfully signup up", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
        resetForm();
        navigate("/signin");
      } else {
        toast.error(data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    } catch (err) {
      toast.error(err.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      console.error(err);
    }
  }, [data]);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      navigate("/dashboard");
    }
  });

  return (
    <Layout>
      <main className="form-container">
        <h1>Sign Up</h1>
        <div className="container">
          <form className="signup-form" onSubmit={submitHandler}>
            <div className="input-container">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                onChange={formChangeHandler}
                value={signUpDetails.name}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                onChange={formChangeHandler}
                value={signUpDetails.email}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password:</label>
              <input
                type={isToggle ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="off"
                onChange={formChangeHandler}
                value={signUpDetails.password}
                required
              />
              <span className="eye-container" onClick={toggleHandler}>
                {isToggle ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
          <p>
            Already have an account? <Link to="/signin">Login</Link>
          </p>
        </div>
        {isLoading && <Loader />}
      </main>
    </Layout>
  );
};

export default Signup;

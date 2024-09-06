import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import useToggle from "../../hooks/useToggle";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import { BASE_API } from "../../utils/constants";

const Signin = () => {
  const navigate = useNavigate();
  const [signInDetails, setSignInDetails] = useState({
    email: "",
    password: "",
  });

  const [auth, setAuth] = useState({
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    name: localStorage.getItem("name") || "",
    token: localStorage.getItem("isLoggedIn") || "",
  });

  const { toggleHandler, isToggle } = useToggle();

  const resetForm = () => {
    setSignInDetails({
      email: "",
      password: "",
    });
  };

  const { data, fetchData, isLoading } = useFetch(`${BASE_API}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signInDetails),
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    await fetchData();
  };

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignInDetails({
      ...signInDetails,
      [name]: value,
    });
  };

  useEffect(() => {
    try {
      if (data?.status === "success") {
        setAuth({
          isLoggedIn: localStorage.setItem("isLoggedIn", data !== undefined),
          name: localStorage.setItem("name", data.name),
          token: localStorage.setItem("token", data.token),
        });
        toast.success("User successfully logged in", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
        resetForm();
        navigate("/dashboard");
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
    if (auth.isLoggedIn) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <Layout>
      <main className="form-container">
        <h1>Login</h1>
        <div className="container">
          <form className="login-form" onSubmit={submitHandler}>
            <div className="input-container">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                onChange={formChangeHandler}
                value={signInDetails.email}
                required
              ></input>
            </div>
            <div className="input-container">
              <label htmlFor="password">Password:</label>
              <input
                type={isToggle ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="off"
                onChange={formChangeHandler}
                value={signInDetails.password}
                required
              ></input>
              <span className="eye-container" onClick={toggleHandler}>
                {isToggle ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
        {isLoading && <Loader />}
      </main>
    </Layout>
  );
};

export default Signin;

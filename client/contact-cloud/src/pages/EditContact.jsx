import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import ContactForm from "../components/ContactForm";
import useFetch from "../hooks/useFetch";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { BASE_API } from "../utils/constants";

const EditContact = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();

  const [editContactDetails, setEditContactDetails] = useState({
    name: state?.contact?.name,
    gender: state?.contact?.gender,
    number1: state?.contact?.number1,
    number2: state?.contact?.number2,
    email: state?.contact?.email,
    city: state?.contact?.city,
    org: state?.contact?.org,
  });

  const formChangeHandler = (e) => {
    const { name, value } = e.target;

    setEditContactDetails({
      ...editContactDetails,
      [name]: value,
    });
  };

  const { data, fetchData, isLoading } = useFetch(
    `${BASE_API}/contacts/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(editContactDetails),
    }
  );

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      await fetchData();
      if (data.status === "success") {
        toast.success("Contact successfully edited", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
        navigate("/dashboard");
      } else {
        toast.error(data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <ContactForm
        formSubmitHandler={formSubmitHandler}
        formChangeHandler={formChangeHandler}
        details={editContactDetails}
        mode="edit"
      />
      {isLoading && <Loader />}
    </Layout>
  );
};

export default EditContact;

import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import ContactForm from "../components/ContactForm";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { BASE_API } from "../utils/constants";

const AddContact = () => {
  const token = localStorage.getItem("token");
  const [addContactDetails, setAddContactDetails] = useState({
    name: "",
    gender: "",
    number1: "",
    number2: "",
    email: "",
    city: "",
    org: "",
  });

  const { data, fetchData, isLoading } = useFetch(`${BASE_API}/contacts`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(addContactDetails),
  });

  const resetForm = () => {
    setAddContactDetails({
      name: "",
      gender: "",
      number1: "",
      number2: "",
      email: "",
      city: "",
      org: "",
    });
  };

  const formChangeHandler = (e) => {
    const { name, value } = e.target;

    setAddContactDetails({
      ...addContactDetails,
      [name]: value,
    });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    await fetchData();
  };

  useEffect(() => {
    try {
      if (data.status === "success") {
        toast.success("Contact successfully added", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
        resetForm();
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
  }, [data]);

  return (
    <Layout>
      <main>
        <div className="wrapper">
          <ContactForm
            formSubmitHandler={formSubmitHandler}
            formChangeHandler={formChangeHandler}
            details={addContactDetails}
            mode="add"
          />
        </div>
        {isLoading && <Loader />}
      </main>
    </Layout>
  );
};

export default AddContact;

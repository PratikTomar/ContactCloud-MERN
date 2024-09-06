import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import UserGender from "../components/UserGender";
import { RiDeleteBin3Line } from "react-icons/ri";
import BackButton from "../components/BackButton";
import CallButton from "../components/CallButton";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { BASE_API } from "../utils/constants";
import "../styles/ContactDescription.css";

const ContactDescription = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const { id } = useParams();
  const { data, fetchData, isLoading } = useFetch(
    `${BASE_API}/contacts/${id}`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${BASE_API}/contacts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      });
      const jsonData = await res.json();
      if (jsonData.status === "success") {
        toast.success("Contact successfully deleted", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
        navigate("/dashboard");
      } else {
        toast.error(jsonData.message, {
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
      <div className="card-description">
        <div className="description-card">
          <BackButton />

          <UserGender gender={data?.gender} />

          <div className="description-card-body">
            <h1 className="description-card-title">Name : {data?.name}</h1>
            <div className="description-content-container">
              <span className="description-card-content">
                Primary Number : {data?.number1}
              </span>
              <CallButton number={data?.number1} size={16} />
            </div>
            <div className="description-content-container">
              {data?.number2 && (
                <>
                  <span className="description-card-content">
                    Secondary Number : {data?.number2}
                  </span>
                  <CallButton number={data?.number2} size={16} />
                </>
              )}
            </div>
            {data?.email && (
              <p className="description-card-content">Email : {data?.email}</p>
            )}
            {data?.org && (
              <p className="description-card-content">
                Organization : {data?.org}
              </p>
            )}
            {data?.city && (
              <p className="description-card-content">City : {data?.city}</p>
            )}
          </div>
          <div className="action-buttons">
            <button className="delete-contact" onClick={() => handleDelete(id)}>
              <RiDeleteBin3Line />
            </button>
          </div>
        </div>
        {isLoading && <Loader />}
      </div>
    </Layout>
  );
};

export default ContactDescription;

import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import ContactCard from "../components/ContactCard";
import Layout from "../layout/Layout";
import Search from "../components/Search";
import Loader from "../components/Loader";
import { BASE_API } from "../utils/constants";

const DashBoard = () => {
  const token = localStorage.getItem("token");
  const { data, fetchData, searchList, setSearchList, isLoading } = useFetch(
    `${BASE_API}/contacts`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  if (data.length === 0) {
    return (
      <Layout>
        <p className="no-items-found">
          There are no contacts, try adding some.
        </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <Search data={data} setSearchList={setSearchList} />
      <div className="card-container">
        {searchList.length === 0 ? (
          <p className="no-items-found">No items found from your search</p>
        ) : (
          searchList.map((list) => <ContactCard data={list} key={list._id} />)
        )}
      </div>
    </Layout>
  );
};

export default DashBoard;

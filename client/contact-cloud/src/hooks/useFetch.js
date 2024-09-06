import React, { useState } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url, options);
      const jsonData = await response.json();
      setData(jsonData);
      setSearchList(jsonData);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(true);
      console.error(err);
    }
  };

  return {
    data,
    fetchData,
    searchList,
    setSearchList,
    isLoading,
    setIsLoading,
  };
};

export default useFetch;

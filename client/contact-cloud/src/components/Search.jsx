import React, { useState } from "react";

const Search = ({ data, setSearchList }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    let { value } = e.target;
    const lowerCaseValue = value.toLowerCase();
    setSearchValue(value);

    const filterResults = data.filter((contactItem) => {
      return (
        contactItem.name.toLowerCase().includes(lowerCaseValue) ||
        contactItem.number1.toString().includes(lowerCaseValue) ||
        (contactItem.number2 &&
          contactItem.number2.toString().includes(lowerCaseValue))
      );
    });

    setSearchList(filterResults);
  };

  return (
    <div className="search-container">
      <input
        placeholder="Search by number or name"
        type="text"
        onChange={handleSearch}
        value={searchValue}
      ></input>
    </div>
  );
};

export default Search;

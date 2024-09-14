import React from "react";
import "../styles/Filter.css";

const Filter = ({ data, setSearchList }) => {
  const filterData = (criteria) => {
    let sortedData = [];
    switch (criteria) {
      case "Name Increasing":
        sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Name Decreasing":
        sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Number Increasing":
        sortedData = [...data].sort((a, b) => a.number1 - b.number1);
        break;
      case "Number Decreasing":
        sortedData = [...data].sort((a, b) => b.number1 - a.number1);
        break;
      case "male":
        sortedData = [...data].filter((contact) => contact.gender === "Male");
        break;
      case "female":
        sortedData = [...data].filter((contact) => contact.gender === "Female");
        break;
      case "other":
        sortedData = [...data].filter((contact) => contact.gender === "Other");
        break;
      case "Recently Created":
        sortedData = [...data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
      case "Recently Updated":
        sortedData = [...data].sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        break;
      case "Oldest Created":
        sortedData = [...data].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        break;
      case "Oldest Updated":
        sortedData = [...data].sort(
          (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)
        );
        break;

      default:
        sortedData = data;
    }

    setSearchList(sortedData);
  };

  const onClickHandler = (e) => {
    filterData(e.target.value);
  };

  return (
    <div className="filter-container">
      <div className="input-container">
        <label htmlFor="nameIncreasing">
          <input
            type="radio"
            id="nameIncreasing"
            name="filter"
            value="Name Increasing"
            onClick={onClickHandler}
          />
          Name (A-Z)
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="nameDecreasing">
          <input
            type="radio"
            id="nameDecreasing"
            name="filter"
            value="Name Decreasing"
            onClick={onClickHandler}
          />
          Name (Z-A)
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="numberIncreasing">
          <input
            type="radio"
            id="numberIncreasing"
            name="filter"
            value="Number Increasing"
            onClick={onClickHandler}
          />
          Number (0-9)
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="numberDecreasing">
          <input
            type="radio"
            id="numberDecreasing"
            name="filter"
            value="Number Decreasing"
            onClick={onClickHandler}
          />
          Number (9-0)
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="male">
          <input
            type="radio"
            id="male"
            name="filter"
            value="male"
            onClick={onClickHandler}
          />
          By Gender Male
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="female">
          <input
            type="radio"
            id="female"
            name="filter"
            value="female"
            onClick={onClickHandler}
          />
          By Gender Female
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="other">
          <input
            type="radio"
            id="other"
            name="filter"
            value="other"
            onClick={onClickHandler}
          />
          By Gender Other
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="recentlyCreated">
          <input
            type="radio"
            id="recentlyCreated"
            name="filter"
            value="Recently Created"
            onClick={onClickHandler}
          />
          Recently Created
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="recentlyEdited">
          <input
            type="radio"
            id="recentlyEdited"
            name="filter"
            value="Recently Updated"
            onClick={onClickHandler}
          />
          Recently Updated
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="oldestCreated">
          <input
            type="radio"
            id="oldestCreated"
            name="filter"
            value="Oldest Created"
            onClick={onClickHandler}
          />
          Oldest Created
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="oldestUpdated">
          <input
            type="radio"
            id="oldestUpdated"
            name="filter"
            value="Oldest Updated"
            onClick={onClickHandler}
          />
          Oldest Updated
        </label>
      </div>
    </div>
  );
};

export default Filter;

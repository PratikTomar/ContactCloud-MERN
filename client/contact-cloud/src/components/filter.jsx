import React from "react";
import "../styles/Filter.css";

const Filter = ({ data, setSearchList }) => {
  const filterData = (criteria) => {
    let sortedData = [];
    switch (criteria) {
      case "Recently Created":
        sortedData = [...data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
      case "Recently Edited":
        sortedData = [...data].sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        break;
      case "Lastly Created":
        sortedData = [...data].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        break;
      case "Lastly Edited":
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
            value="Recently Edited"
            onClick={onClickHandler}
          />
          Recently Edited
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="lastCreated">
          <input
            type="radio"
            id="lastCreated"
            name="filter"
            value="Lastly Created"
            onClick={onClickHandler}
          />
          Last Created
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="lastEdited">
          <input
            type="radio"
            id="lastEdited"
            name="filter"
            value="Lastly Edited"
            onClick={onClickHandler}
          />
          Last Edited
        </label>
      </div>
    </div>
  );
};

export default Filter;

// dependencies 
import React, { useState, useEffect } from "react";
import "./style.css";
// var form 
const SearchForm = (props) => {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language"> Search Employee Directory:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type the name of the employee you are seeking to search directory"
          id="term"
        />
      </div>
    </form>
  );
};
export default SearchForm;
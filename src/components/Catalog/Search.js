import React, { useState } from "react";

const originalState = { producent: "All", text: "" };

const Search = ({ producentsChange, onChangeOption }) => {
  const [producent, chooseProducent] = useState(originalState.producent);
  const [text, setTextValue] = useState(originalState.text);

  const updateText = event => {
    setTextValue(event.target.value);
    onChangeOption(producent, event.target.value);
  };
  const updateProducent = event => {
    chooseProducent(event.target.value);
    onChangeOption(event.target.value, text);
  };
  const clearButton = () => {
    setTextValue(originalState.text);
    chooseProducent(originalState.producent);
    onChangeOption(originalState.producent, originalState.text);
  };

  return (
    <div className="column-left">
      <div className="filter">
        <div className="filter-header">
          <h4>Search</h4>
          <button className="clear" onClick={clearButton}>
            Clear
          </button>
        </div>
        <div>
          <input
            onChange={updateText}
            type="text"
            placeholder="Search for products"
            value={text}
          />
        </div>
        <h4>Manufacturer</h4>
        <div>
          {producentsChange.map((option, index) => {
            return (
              <div key={index}>
                <input
                  type="radio"
                  name="manufacturere"
                  id={option}
                  value={option}
                  onChange={updateProducent}
                  checked={producent === option}
                />
                <label>{option}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;

import React from "react";
import "./styles.scss";

export const SelectionItem = ({ item, name, pick }) => {
  const changeHandler = () => {
    pick(item.id);
  };

  return (
    <label className="selection-item">
      <input
        onChange={changeHandler}
        className="selection-button"
        value={item.value}
        type="radio"
        name={name}
      />
      {item.image ? (
        <div className="item-label">
          <img className="item-image" src={item.image} alt="Product image" />
          <div>{item.label}</div>
        </div>
      ) : (
        <div className="item-label">{item.label}</div>
      )}
    </label>
  );
};

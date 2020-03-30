import React, { useCallback } from "react";
import "./styles.scss";

export const SelectionItem = ({ item, name, pick, selected, required }) => {
  const isSelected = !!selected && selected.sku === item.sku;

  const changeHandler = useCallback(() => {
    if (isSelected && required) return;
    if (isSelected && !required) {
      pick(null);
    } else pick(item);
  }, [item.sku, selected, required]);

  return (
    <label className="selection-item">
      <input
        onChange={changeHandler}
        className="selection-button"
        value={item.value}
        type="checkbox"
        name={name}
        checked={isSelected}
      />
      {item.images ? (
        <div className="item-label">
          <img
            className="item-image"
            src={item.images[0].src}
            alt={item.images[0].alt}
          />
          <div>{item.name}</div>
        </div>
      ) : (
        <div className="item-label">{item.name}</div>
      )}
    </label>
  );
};

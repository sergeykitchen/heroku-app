import React from "react";
import { SelectionItem } from "../SelectionItem";

export const Selection = React.memo(
  ({ name, data, pick, selected, required }) => {
    return (
      <>
        {data.map(i => {
          return (
            <SelectionItem
              required={required}
              selected={selected}
              pick={pick}
              key={i.sku}
              item={i}
              name={name}
            />
          );
        })}
      </>
    );
  }
);

import React from "react";
import { SelectionItem } from "../SelectionItem";

export const Selection = ({ name, data, pick }) => {
  return (
    <>
      {data.map(i => {
        return <SelectionItem pick={pick} key={i.id} item={i} name={name} />;
      })}
    </>
  );
};

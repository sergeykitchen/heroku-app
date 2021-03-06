import React, { useCallback } from "react";
import "./styles.scss";

export const InputField = ({ onChange, label, ...props }) => {
  const onChangeHandler = useCallback(e => {
    if (e.target.value.trim()) {
      onChange(e.target.value);
    }
  }, []);

  return (
    <div className="field">
      <label className="label">
        <p>{label}</p>
        <input {...props} onChange={onChangeHandler} />
      </label>
    </div>
  );
};

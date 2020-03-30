import React, { useState } from "react";
import { useHttp } from "../../hooks/httpHook";
import { InputField } from "../../components/InputField";
import { Loader } from "../../components/Loader";

export const EmailPage = () => {
  const [email, setEmail] = useState("");
  const { request, loading } = useHttp();

  const sendEmail = e => {
    e.preventDefault();
    request("", "", true, "/selection");
  };

  return (
    <div className="container">
      <h1>EmailPage</h1>
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={sendEmail}>
          <InputField
            // required
            placeholder="Email"
            label="Email"
            type="email"
            onChange={setEmail}
          />
          <div className="button-container to-end">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

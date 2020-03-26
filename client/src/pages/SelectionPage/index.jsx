import React, { useState } from "react";
import history from "../../history";
import { useHttp } from "../../hooks/httpHook";
import {} from "../../components/InputField";
import { Loader } from "../../components/Loader";
import { Selection } from "../../components/Selection";
import { frequencyItems, gifts } from "../../staticData";

import "./styles.scss";
import { Link } from "react-router-dom";

export const SelectionPage = () => {
  const { request, loading } = useHttp();

  const [frequency, setFrequency] = useState(null);
  const [gift, setGift] = useState(null);
  const [thirdProduct, setThirdProduct] = useState(null);
  const [fourthProduct, setFourthProduct] = useState(null);

  const submitForm = e => {
    e.preventDefault();
    const data = {
      frequency,
      gift,
      thirdProduct,
      fourthProduct
    };
    console.log("data", data);
    request("", "", true, "/thank_you");
  };

  return (
    <div className="container">
      <h1 className="title">wait... don't go!</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          <p className="message">
            Keep Essence of Argan + a Free Gift for only $29.99 (+s&h).
          </p>
          <form className="selection-form" onSubmit={submitForm}>
            <fieldset>
              <label className="fieldset-label">1) Select Frequency</label>
              <div className="selection-container">
                <Selection
                  pick={setFrequency}
                  name="frequency"
                  data={frequencyItems}
                />
              </div>
            </fieldset>
            <fieldset>
              <label className="fieldset-label">2) Select FREE Gift</label>
              <div className="selection-container">
                <Selection pick={setGift} name="gift" data={gifts} />
              </div>
            </fieldset>
            <fieldset>
              <label className="fieldset-label">
                3) Select 3rd Product For Only $14.99
                <div className="selection-container">
                  <Selection pick={setThirdProduct} name="3rd" data={gifts} />
                </div>
              </label>
            </fieldset>
            <fieldset>
              <label className="fieldset-label">
                4) Select 4th Product For Only $9.99
                <div className="selection-container">
                  <Selection pick={setFourthProduct} name="4th" data={gifts} />
                </div>
              </label>
            </fieldset>
            <div className="button-container space-between">
              <Link to="/live_chat" className="btn">
                No Thanks, Just Cancel My Order
              </Link>
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

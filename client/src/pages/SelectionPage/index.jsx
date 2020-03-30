import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import history from "../../history";
import {
  reducer,
  initialState,
  SET_FREQUENCY,
  SET_GIFT,
  SET_THIRD,
  SET_FOURTH
} from "./reducer";
import { useHttp } from "../../hooks/httpHook";
import {} from "../../components/InputField";
import { Loader } from "../../components/Loader";
import { Selection } from "../../components/Selection";
import {
  frequencyItems,
  gifts,
  thirdProduct,
  fourthProduct
} from "../../staticData";

import "./styles.scss";

const defaultSum = 29.99;

export const SelectionPage = () => {
  const { request, loading } = useHttp();

  const [state, dispatch] = useReducer(reducer, initialState);

  const setFrequency = frequency => {
    dispatch({
      type: SET_FREQUENCY,
      payload: frequency
    });
  };

  const setGift = product => {
    dispatch({
      type: SET_GIFT,
      payload: product
    });
  };

  const setThirdProduct = product => {
    dispatch({
      type: SET_THIRD,
      payload: product
    });
  };

  const setFourthProduct = product => {
    dispatch({
      type: SET_FOURTH,
      payload: product
    });
  };

  const submitForm = e => {
    e.preventDefault();

    console.log(state);
    request("", "", true, "/thank_you");
  };

  const getSum = state => {
    let sum = defaultSum;
    Object.keys(state).map(function(key, index) {
      if (key !== "gift" && key !== "frequency") {
        if (state[key]) {
          sum += state[key].priceOptions[1].value;
        }
      }
    });
    return sum;
  };

  console.log(state);

  return (
    <div className="container">
      <h1 className="title">wait... don't go!</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          <p className="message">
            Keep Essence of Argan + a Free Gift for only {`$${defaultSum}`}
            (+s&h).
          </p>
          <form className="selection-form" onSubmit={submitForm}>
            <fieldset>
              <label className="fieldset-label">1) Select Frequency</label>
              <div className="selection-container">
                <Selection
                  required
                  pick={setFrequency}
                  name="frequency"
                  data={frequencyItems}
                  selected={state.frequency}
                />
              </div>
            </fieldset>
            <fieldset>
              <label className="fieldset-label">2) Select FREE Gift</label>
              <div className="selection-container">
                <Selection
                  selected={state.gift}
                  pick={setGift}
                  name="gift"
                  data={gifts}
                />
              </div>
            </fieldset>
            <fieldset>
              <label className="fieldset-label">
                3) Select 3rd Product For Only $14.99
                <div className="selection-container">
                  <Selection
                    selected={state.thirdProduct}
                    pick={setThirdProduct}
                    name="3rd"
                    data={thirdProduct}
                  />
                </div>
              </label>
            </fieldset>
            <fieldset>
              <label className="fieldset-label">
                4) Select 4th Product For Only $9.99
                <div className="selection-container">
                  <Selection
                    selected={state.fourthProduct}
                    pick={setFourthProduct}
                    name="4th"
                    data={fourthProduct}
                  />
                </div>
              </label>
            </fieldset>
            <h4>Total: ${getSum(state).toFixed(2)}</h4>
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

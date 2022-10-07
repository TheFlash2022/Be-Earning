import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import "./CreateNewWallet.scss";
import { history } from "../App";
import { NavLink } from "react-router-dom";

export default function CreateNewWallet(props) {
  const arr24 = useSelector((rootReducer) => rootReducer.arrReducer.aRR);

  const renderItem = () => {
    return arr24.map((arr, index) => {
      return (
        <div className="item" key={index}>
          <span className="number">{index + 1}</span>
          <span className="string">{arr}</span>
        </div>
      );
    });
  };

  return (
    <div className="wallet">
      <NavLink to="/">
        <button className="goback">
          <i class="fa fa-angle-left"></i>
          <h4>Create New Wallet</h4>
        </button>
      </NavLink>
      <div className="container">
        <h5>Auto Gen Seed Phrase ?</h5>
        <div className="list">{renderItem()}</div>
        <p>
          Tap to Copy or Carefully write down your seed phrase and store it in a
          safe place
        </p>
        <b>How does this work?</b>
        <NavLink to="/createnewwallet/confirm">
          <button
            className="btn btn-primary"
            onClick={() => {
              // console.log(arr24);
            }}
          >
            Next
          </button>
        </NavLink>
      </div>
    </div>
  );
}

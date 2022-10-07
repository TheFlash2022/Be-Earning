import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Confirm.scss";

export default function Confirm() {
  const arr24 = useSelector((rootReducer) => rootReducer.arrReducer.aRR);

  let arr18 = [];
  for (let arr of arr24) {
    let arrRandom = arr24[Math.floor(Math.random() * arr24.length)];
    if (arr18.length < 18 && !arr18.includes(arrRandom)) {
      arr18.push(arrRandom);
    }
  }
  let arr6 = [];
  for (let arr of arr18) {
    let arrRandom = arr18[Math.floor(Math.random() * arr18.length)];
    if (arr6.length < 6 && !arr6.includes(arrRandom)) {
      arr6.push(arrRandom);
    }
  }
  let arr3 = [];
  for (let arr of arr6) {
    let arrRandom = arr6[Math.floor(Math.random() * arr6.length)];
    if (arr3.length < 3 && !arr3.includes(arrRandom)) {
      arr3.push(arrRandom);
    }
  }

  let select=false;
  const renderString = () => {
    return arr3.map((arr, index) => {
      return (
        <button className="string" onClick={() => {}}>
          {arr18[Math.floor(Math.random() * arr18.length)]}
        </button>
      );
    });
  };
  const renderItem = () => {
    return arr6.map((arr, index) => {
      return (
        <div className="item">
          <span className="number">
            {Math.floor(Math.random() * arr18.length) + 1}
          </span>
          {renderString()}
        </div>
      );
    });
  };
  return (
    <div className="confirm">
      <NavLink to="/createnewwallet">
        <button className="goback">
          <i class="fa fa-angle-left"></i>
          <h4>Create New Wallet</h4>
        </button>
      </NavLink>
      <h4>Confirm Your Seed Phrase</h4>
      <div className="container">
        <div className="list">{renderItem()}</div>
      </div>
      <div className="footer">
        <b>How does this work?</b>
        <i class="fa fa-chevron-right"></i>
        <br />
        <button>Submit</button>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from 'react-redux';
import listArr from "../assets/json/bt.json";
import { pushArrAction } from "../redux/actions/arrAction";

export default function BT2 () {
  const dispatch = useDispatch();
  
    let arr24 = [];
    for (let arr of listArr) {
      if (arr24.length < 24) {
        let arrRandom = listArr[Math.floor(Math.random() * listArr.length)];
        if (!arr24.includes(arrRandom)) {
          arr24.push(arrRandom);
        }
      }
    }
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

    useEffect(()=>{
      const action = pushArrAction(arr24);
      dispatch(action);
      // console.log(arr24);
    },[]);

    return (
      <div>
        <button
          className="btn btn-success"
          onClick={() => {
            document.querySelector(".arr24").innerHTML = `arr24=[${arr24}]`;
            console.log(arr24);
          }}
        >
          Tạo mảng 24 phần tử
        </button>
        <br />
        <p className="arr24"></p>
        <button
          className="btn btn-danger"
          onClick={() => {
            document.querySelector(".arr18").innerHTML = `arr18=[${arr18}]`;
            console.log(arr18);
          }}
        >
          Tạo mảng 18 phần tử
        </button>
        <p className="arr18"></p>
        <button
          className="btn btn-primary"
          onClick={() => {
            document.querySelector(".arr6").innerHTML = `arr6=[${arr6}]`;
            console.log(arr6);
          }}
        >
          Tạo mảng 6 phần tử
        </button>
        <p className="arr6"></p>
      </div>
    );
  
}

import React from "react";
import { Tabs } from "antd";
import { useState } from "react";
import BT3 from "../pages/BT3";
import BT2 from "../pages/BT2";

export default function TestBeEarning() {
  const A = [0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12];
  let resultA = A.join("");
  const B = [99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90];
  let resultB = B.join("");
  const C = [1, 10, 19, 11, 13, 16, 19];
  let resultC = C.join("");

  let reA = [...resultA];
  let reB = [...resultB];
  let reC = [...resultC];

  function compareNumbers(a, b) {
    return b - a;
  }

  const [maxA, setmaxA] = useState("?");
  const [maxB, setmaxB] = useState("?");
  const [maxC, setmaxC] = useState("?");
  const maxNumber = () => {
    setmaxA(reA.sort(compareNumbers));
    setmaxB(reB.sort(compareNumbers));
    setmaxC(reC.sort(compareNumbers));
  };
  return (
    <div>
      <h3 className="test text-success">Test ReactJs</h3>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Bài tập 1" key="1">
          <h3>Hãy viết hàm sắp xếp mảng số bên dưới để ra được số lớn nhất</h3>
          <p>VD: [1, 10, 11] - Số lớn nhất 11110.</p>

          <p>A=[0,10,1,99,9,8,79,91,22,32,12]</p>

          <p>B=[99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90]</p>

          <p>C=[1, 10, 19, 11, 13, 16, 19]</p>
          <button className="btn btn-success" onClick={maxNumber}>
            In kết quả
          </button>
          <div className="ketqua">
            <p>số lớn nhất từ mảng A = {maxA}</p>
            <p>số lớn nhất từ mảng B = {maxB}</p>
            <p>số lớn nhất từ mảng C = {maxC}</p>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Bài tập 2" key="2">
          <h5>
            Tạo 1 danh sách gồm 24 phần tử không trùng lặp nhau từ file JSON cho
            trước
          </h5>
          <h5>
            Từ danh sách 24 phần tử ở trên tạo ra 1 danh sách gồm 18 phần tử
            không trùng lặp. Từ 18 phần tử vừa lấy được tạo thành 1 danh sách
            gồm 6 phần tử.
          </h5>
          <BT2 />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Bài tập 3" key="3">
          <BT3 />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

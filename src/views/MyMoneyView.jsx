import React from "react";
//import { v4 as uuidv4 } from 'uuid';

import { useState } from "react"; //ใช้กำหนดค่า const [items, setItem] = useState(initData); แบบตัวแปรและฟังชั่น

import TitleComponent from "../components/TitleComponent";
import MyMoneyComponent from "../components/MyMoneyComponent";
import FormComponent from "../components/FormComponent";
//npm install props/types


function MyMoneyView() {
  const initData = [
    { id: 1, name: "ค่าผ่อนตอนโด", amount: "-4500" },
    { id: 2, name: "ค่าผ่อนรถ", amount: "-7300" },
    { id: 3, name: "ค่าน้ำค่าไฟ", amount: "-600" },
    { id: 4, name: "ค่าโทรศัพท์", amount: "-500" },
    { id: 5, name: "ค่าไฟบ้านอุทัย", amount: "-300" },
  ];

  const [items, setItem] = useState(initData);

  const onAddNewItem = (newItem) => {
    //console.log("ข้อมูลที่ได้",newItem)
    setItem((preventItem) => {
      //preventItem เป็นตัวแปรมีค่าเท่ากับ value ของ useState()
      return [newItem, ...preventItem];
    });
  }; //สร้างฟังชั่นเพื่อรอรับค่า

  return (
    <div>
      <TitleComponent title="แอพบัญชี รายรับ-รายจ่าย" />
      <FormComponent onAddItem={onAddNewItem} />
      <MyMoneyComponent items={items} />
    </div>
  );
}

export default MyMoneyView;

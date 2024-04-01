import React, { useEffect, useReducer } from "react";
//import { v4 as uuidv4 } from 'uuid';

import { useState } from "react"; //ใช้กำหนดค่า const [items, setItem] = useState(initData); แบบตัวแปรและฟังชั่น

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TitleComponent from "../components/TitleComponent";
import MyMoneyComponent from "../components/MyMoneyComponent";
import FormComponent from "../components/FormComponent";
//npm install props/types
import DataContext from "../data/DataContext";
import ReportComponent from "../components/ReportComponent";

function MyMoneyView() {
    const initData = [
        { id: 1, name: "ค่าผ่อนตอนโด", amount: -4500 },
        { id: 2, name: "ค่าผ่อนรถ", amount: -7300 },
        { id: 3, name: "ค่าน้ำค่าไฟ", amount: -600 },
        { id: 4, name: "ค่าโทรศัพท์", amount: -500 },
        { id: 5, name: "ค่าไฟบ้านอุทัย", amount: -300 },
        { id: 6, name: "เงินเดือน", amount: 32000 },
        { id: 7, name: "ขายของ", amount: 2000 },
    ];

    const [reportIncome, setReportIncome] = useState(0)
    const [reportExpense, setReportExpense] = useState(0)
    const [items, setItem] = useState(initData);


    const onAddNewItem = (newItem) => {
        //console.log("ข้อมูลที่ได้",newItem)
        setItem((preventItem) => {
            //preventItem เป็นตัวแปรมีค่าเท่ากับ value ของ useState()
            return [newItem, ...preventItem];
        });
    }; //สร้างฟังชั่นเพื่อรอรับค่า

    useEffect(() => {
        const amounts = items.map(item => item.amount)
        const income = amounts.filter(element => element > 0).reduce((total, element) => total += element, 0)
        const expense = amounts.filter(element => element < 0).reduce((total, element) => total += element, 0)

        setReportIncome(income)
        setReportExpense(expense)
    }, [items, reportExpense, reportIncome])

    //reducer state
    const [count,] = useState(0);

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                return state + 1
            case "DELETE":
                return state - 1
            case "CLEAR":
                return 0
            default:
                break;
        }
    }

    const [result, dispatch] = useReducer(reducer, count)

    const [showReport, setShowReport] = useState(true);

    const reducerShowReport = (state, action) => {
        switch (action.type) {
            case "SHOW":
                return setShowReport(true)
            case "HIDE":
                return setShowReport(false)
            default:
                break;
        }
    }

    const [, dispatchs] = useReducer(reducerShowReport, count)


    return ( //component ที่อยู่ภายในจะสามารถแสดง value ได้ผ่าน consumer
        <DataContext.Provider value={
            {
                name: "ptnMonsters",
                income: reportIncome,
                expense: reportExpense,
            }
        }>
            <div>
                <TitleComponent title="แอพบัญชี รายรับ-รายจ่าย" />
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/aa">ข้อมูลบัญชี</Link>
                            </li>
                            <li>
                                <a href=""> บันทุกข้อมูล</a>
                            </li>
                        </ul>
                    </div>
                    <Routes>
                        <Route path='/aa' element={<ReportComponent />}></Route>
                    </Routes>
                </Router>
                <button onClick={() => { dispatchs({ type: "SHOW" }) }}>แสดง</button><button onClick={() => { dispatchs({ type: "HIDE" }) }}>ซ่อน</button>
                {showReport && < ReportComponent />}
                <FormComponent onAddItem={onAddNewItem} />
                <MyMoneyComponent items={items} />
                <p> {result} </p>
                <button onClick={() => { dispatch({ type: "ADD" }) }}> เพิ่ม </button> <button onClick={() => { dispatch({ type: "DELETE" }) }}> ลด </button> <button onClick={() => { dispatch({ type: "CLEAR" }) }}> ล้าง </button>
            </div>
        </DataContext.Provider>
    );
}

export default MyMoneyView;

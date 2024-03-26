import React, { useContext } from 'react'

import DataContext from '../data/DataContext'

function ReportComponent() {
    const { name, income, expense } = useContext(DataContext);
    return (
        <div> 
            <h2> สวัสดี : {name}  </h2>
            <h4> ยอดคงเหลือ : {income + expense} </h4>
            <p> รายรับ : {income} </p>
            <p> รายจ่าย : {expense}</p>
        </div>
    )
}

export default ReportComponent
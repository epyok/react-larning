import { React, useEffect, useState } from "react"; //usestate รับค่าเปลี่ยนแปลงได้, useeffect เมื่อค่าเปลี่ยนแปลงให้ทำอะไร
import { v4 as uuidv4 } from "uuid";

function FormComponent(props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [formValid, setFormValid] = useState(false);

  const inputName = (event) => {
    setName(event.target.value);
  };

  const inputAmount = (event) => {
    setAmount(event.target.value);
  };

  const saveItem = (event) => {
    event.preventDefault();
    const itemData = {
      id: uuidv4(),
      name: name,
      amount: Number(amount),
    };
    //console.log(itemData)
    props.onAddItem(itemData); //ลูก props ข้อมูลส่งค่าไปหาแม่
    setName("");
    setAmount(0);
  };

  useEffect(() => {
    const checkData = name.trim().length > 0 && amount !== 0;

    //console.log(checkData)

    setFormValid(checkData);
  }, [name, amount]);

  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label> ชื่อรายการ </label>
          <input
            type="text"
            placeholder="ระบุชื่อรายการ"
            onChange={inputName}
            value={name}
          />
        </div>
        <div className="form-control">
          <label> จำนวนเงิน </label>
          <input
            type="number"
            placeholder="ระบุจำนวนเงิน +รายรับ, -รายจ่าย"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div>
          <button type="submit" disabled={!formValid}>
            เพิ่มรายการ
          </button>
        </div>
      </form>
      
    </div>

  );
}

export default FormComponent;

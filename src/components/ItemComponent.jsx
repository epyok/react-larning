import React from 'react'

function ItemComponent({ name, amount }) {

    const status = amount < 0 ? "expense" : "income";

    return (
        <ul className='item-list'>
            <li className={status}> {name} <span> {amount} </span> </li>
        </ul>
    )
}

export default ItemComponent
import React from 'react'

function ItemComponent({ name, amount }) {
    return (
        <ul className='item-list'>
            <li > {name} <span> {amount} </span> </li>
        </ul>
    )
}

export default ItemComponent
import React from 'react'

import '../assets/css/item.css'
import ItemComponent from './ItemComponent';

function MyMoneyComponent(props) {

  const { items } = props;

  return (
    <div>
      <ul className='item-list'>
        {items.map((item, index) => {
          return <ItemComponent name={item.name} amount={item.amount} key={item.id} />
        })}
      </ul>
    </div>
  )
}

export default MyMoneyComponent
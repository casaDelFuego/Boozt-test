import React from 'react'
import './product.scss'


const Product = (props) => {
  return (
    <div className="p_card">
      <div className="p_card__image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="p_card__info">
        <p>Name: <span>{props.name}</span></p>
        <p>Brand: <span>{props.brand}</span></p>
        <p>Price: <span>{props.actualPrice} kr</span></p>
      </div>
    </div>
  )
}


export default Product



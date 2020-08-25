import React from 'react'

const Product = (props) => {
  return (
    <div>
      <div >
        <img src={props.image} alt={props.name} />
      </div>
      <div>
        <p>Name: <span>{props.name}</span></p>
        <p>Brand: <span>{props.brand}</span></p>
        <p>Price: <span>{props.actualPrice} kr</span></p>
      </div>
    </div>
  )
}


export default Product



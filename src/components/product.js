import React from 'react'

const Product = (props) => {
  const { image, name, brand, actualPrice } = props;
  return (
    <div>
      this is one item
      <div >
        <img src={image} alt={name} />
      </div>
      <div>
        <p>Brand: <span>{brand}</span></p>
        <p>Name: <span>{name}</span></p>
        <p>Price: <span>{actualPrice} kr</span></p>
      </div>
    </div>
  );
};


export default Product;
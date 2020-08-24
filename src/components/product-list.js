import React, { useEffect, useState } from 'react'
import Product from '../components/product'
import Sorting from '../components/sorting'


const ProductList = () => {
  const [allProducts, setAllProducts] = useState([])


  const sortByLowerPrice = () => {
    const sortListByLowerPrice = [...allProducts].sort(
      (a, b) => a.actual_price - b.actual_price
    );
    setAllProducts(sortListByLowerPrice)
  }

  const sortByHigherPrice = () => {
    const sortListByHigherPrice = [...allProducts].sort(
      (a, b) => b.actual_price - a.actual_price
    );
    setAllProducts(sortListByHigherPrice)
  }

  useEffect(() => {
    if (allProducts.length) return

    fetch('/product_list.json')
      .then(response => response.json())
      .then(data => {
        setAllProducts(data)
      })
  })

  let productList = allProducts.slice(0, 20).map((product) => {
    return (
      <Product
        key={product.id}
        image={product.filename}
        name={product.product_name}
        actualPrice={product.actual_price}
        brand={product.brand_name}
      />
    );
  })

  return (
    <div>
      <Sorting sortByLowerPrice={sortByLowerPrice}
        sortByHigherPrice={sortByHigherPrice} />
      <div>{productList}</div>
    </div>
  );
};

export default ProductList



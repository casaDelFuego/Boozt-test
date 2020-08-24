import React, { useEffect, useState } from "react"
import Product from "../components/product"

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    fetch('/product_list.json')
      .then(response => response.json())
      .then(data => {
        setAllProducts(data)
      })
  })

  let productList = allProducts.map((product) => {

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
      <div>{productList}</div>
    </div>
  );
};

export default ProductList



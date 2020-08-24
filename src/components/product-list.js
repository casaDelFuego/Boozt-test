import React, { useEffect } from "react";
import Product from "../components/product";

const ProductList = (products) => {
  console.log('this is what we get', products)

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {

    let productList = products.map((product) => {
      return (
        <Product
          key={product.id}
          image={product.image}
          name={product.product_name}
          actualPrice={product.actual_price}
          brand={product.brand_name}
        />
      );
    })
  })

  return (
    <div>
      <div>perperpgojaj </div>
    </div>
  );
};

export default ProductList;
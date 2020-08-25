import React, { useEffect, useState } from 'react'
import Product from '../components/product'
import Sorting from '../components/sorting'
import Pagination from '../components/pagination'


const ProductList = () => {
  const [allProducts, setAllProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);

  // Retrieve the data
  useEffect(() => {
    if (allProducts.length) return

    fetch('/product_list.json')
      .then(response => response.json())
      .then(data => {
        setAllProducts(data)
      })
  })

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  // Sorting functions
  const sortByLowerPrice = () => {
    const sortListByPriceAscending = [...allProducts].sort(
      (a, b) => a.actual_price - b.actual_price
    );
    setAllProducts(sortListByPriceAscending)
  }

  const sortByHigherPrice = () => {
    const sortListByPriceDescending = [...allProducts].sort(
      (a, b) => b.actual_price - a.actual_price
    );
    setAllProducts(sortListByPriceDescending)
  }


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
      <Sorting sortByLowerPrice={sortByLowerPrice}
        sortByHigherPrice={sortByHigherPrice} />
      <div>{productList}</div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={allProducts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ProductList



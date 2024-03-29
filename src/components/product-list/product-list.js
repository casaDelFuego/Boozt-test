import React, { useEffect, useState } from 'react'
import './product-list.scss'
import Product from '../product/product'
import Sorting from '../sorting/sorting'
import Pagination from '../pagination/pagination'


const ProductList = () => {
  const [allProducts, setAllProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(48)

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
    )
    setAllProducts(sortListByPriceAscending)
  }

  const sortByHigherPrice = () => {
    const sortListByPriceDescending = [...allProducts].sort(
      (a, b) => b.actual_price - a.actual_price
    )
    setAllProducts(sortListByPriceDescending)
  }


  let productList = currentProducts.map((product) => {
    return (
      <Product
        key={product.id}
        image={product.filename}
        name={product.product_name}
        actualPrice={product.actual_price}
        brand={product.brand_name}
      />
    )
  })

  return (
    <div className="p_container">
      <Sorting sortByLowerPrice={sortByLowerPrice}
        sortByHigherPrice={sortByHigherPrice} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={allProducts.length}
        currentPage={currentPage}
        paginate={paginate}
      />
      <div className="p_list">{productList}</div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={allProducts.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  )
}

export default ProductList



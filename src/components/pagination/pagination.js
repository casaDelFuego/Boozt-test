import React from 'react'
import './pagination.scss'

const Pagination = ({ productsPerPage, totalProducts, currentPage, paginate }) => {
  const pageNumbers = []

  const totalNumberOfPages = Math.ceil(totalProducts / productsPerPage)
  let start = Math.max(1, currentPage - 5)
  const end = Math.min(totalNumberOfPages, start + 10)

  for (; start <= end; start++) {
    pageNumbers.push(start)
  }

  return (
    <nav>
      <ul >
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={() => paginate(number)} href='!#' className={number === currentPage ? 'active' : ''} >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};


export default Pagination
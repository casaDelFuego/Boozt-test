import React from 'react'

const Pagination = ({ productsPerPage, totalProducts, currentPage, paginate }) => {
  const pageNumbers = []
  console.log('current psge', currentPage)

  const totalNumberOfPages = Math.ceil(totalProducts / productsPerPage)
  let start = Math.max(1, (currentPage || 1) - 5)
  const end = Math.min(totalNumberOfPages, start + 10)

  for (; start <= end; start++) {
    pageNumbers.push(start)
  }

  return (
    <nav>
      <ul >
        {pageNumbers.map(number => (
          <li key={number} >
            <a onClick={() => paginate(number)} href='!#' >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};


export default Pagination
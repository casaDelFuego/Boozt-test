import React from "react"
import './sorting.scss'

function Sorting(props) {
  const onLowPrice = () => {
    props.sortByLowerPrice()
  }

  const onHighPrice = () => {
    props.sortByHigherPrice()
  }

  return (
    <div className="sorting_container">
      <div className="sorting">
        <p>Sort by</p>
        <div>
          <button className="btn" onClick={onLowPrice}>Low price</button>
          <button className="btn" onClick={onHighPrice}>High price</button>
        </div>
      </div>
    </div>
  )
}


export default Sorting
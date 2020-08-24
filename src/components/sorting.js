import React from "react"

function Sorting(props) {
  const onLowPrice = () => {
    props.sortByLowerPrice();
  }

  const onHighPrice = () => {
    props.sortByHigherPrice()
  }

  return (
    <div>
      <p>Sort price:</p>
      <button onClick={onLowPrice}>Low</button>
      <button onClick={onHighPrice}>High</button>
    </div>
  )
}


export default Sorting
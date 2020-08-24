import React, { Component } from 'react';
import './App.css';
import ProductList from '../src/components/product-list'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('/product_list.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data
        });
        console.log('all the data', data)
      });
  }


  render() {
    return (
      <div>
        <ProductList products={this.state.products} />
      </div>
    )
  }

}

export default App;

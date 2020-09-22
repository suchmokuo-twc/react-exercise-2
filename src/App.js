import React, { Component } from 'react';
import './App.scss';
import { Category } from './components/Category';
import { Header } from './components/Header';
import { Product } from './components/Product';

class App extends Component {
  state = {
    categories: [],
    productsNum: 0,
  };

  handleAddToCart = () => {
    const { state } = this;
    const { productsNum } = state;

    this.setState({
      ...state,
      productsNum: productsNum + 1,
    });
  };

  buildCategories = (data) => {
    const { state } = this;
    const { categories } = state;

    data.forEach((item) => {
      const { category: categoryName } = item;

      let category = categories.find((c) => c.name === categoryName);

      if (!category) {
        category = {
          name: categoryName,
          products: [],
        };

        categories.push(category);
      }

      category.products.push({
        name: item.name,
        price: item.price,
      });
    });

    this.setState({
      ...state,
      categories,
    });
  };

  componentDidMount() {
    this.fetchData().then(this.buildCategories).catch(console.error);
  }

  categoriesRender() {
    const { categories } = this.state;

    return categories.map((category) => (
      <Category key={category.name} name={category.name}>
        {this.productsRender(category.products)}
      </Category>
    ));
  }

  productsRender(products) {
    return products.map((product) => (
      <Product
        key={product.name}
        name={product.name}
        price={product.price}
        onAddToCart={this.handleAddToCart}
      />
    ));
  }

  render() {
    const { productsNum } = this.state;
    const categories = this.categoriesRender();

    return (
      <main className="app">
        <Header productsNum={productsNum} />
        {categories}
      </main>
    );
  }

  fetchData() {
    return fetch('http://localhost:3000/products').then((response) => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

      return response.json();
    });
  }
}

export default App;

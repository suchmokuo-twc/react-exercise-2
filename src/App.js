import React, { Component } from 'react';
import './App.scss';
import { Header } from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header productsNum={0} />
      </main>
    );
  }
}

export default App;

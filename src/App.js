import React, { Component } from 'react';
import './App.scss';
import { Category } from './components/Category';
import { Header } from './components/Header';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header productsNum={0} />
        <Category name="iPhone">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          officiis tenetur accusamus sit porro quibusdam aspernatur minus, hic
          similique molestias qui! Recusandae natus in, at voluptatum ex unde
          ipsum ea!
        </Category>
        <Category name="HUAWEI">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          inventore expedita? Eos laudantium laboriosam veritatis tenetur
          quaerat quae dignissimos eius deserunt, provident ad, itaque ipsam
          expedita ipsa reprehenderit illo perferendis.
        </Category>
      </main>
    );
  }
}

export default App;

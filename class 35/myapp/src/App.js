import logo from './logo.svg';
import './App.css';
import List from './components/List';
import React from 'react';

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function App() {
  const name = "Muhammad Ameen"
  return (
    <React.Fragment>
      <h1>My App {name} </h1>
      <List myName="Ameen" productsData={products} />
    </React.Fragment >
  );
}

export default App;

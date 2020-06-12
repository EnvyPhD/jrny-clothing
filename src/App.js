import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop' 

const HatsPage = () => (
  <div>
    <h1>
      HATS PAGE
    </h1>
  </div>
)


function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop' 
import Header from './components/Header/header'
import Portal from './pages/portal/portal'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
constructor() {
  super();

  this.state = {
    currentUser: null
  }
}


unsubscribeFromAuth = null;

componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({ currentUser: user})
    console.log(user)
    })
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}


render(){
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path ='/portal' component={Portal} />
      </Switch>
    </div>
  );
}
}

export default App;
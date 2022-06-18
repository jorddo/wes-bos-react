import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import React from 'react';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;

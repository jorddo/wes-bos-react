import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

const App = () => (
  <div className='catch-of-the-day'>
    <div className='menu'>
      <Header tagline='Fresh Seafood Market' />
    </div>
    <Order />
    <Inventory />
  </div>
);

export default App;

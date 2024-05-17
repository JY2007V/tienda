import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { InventoryProvider } from './contexts/InventoryContext'; 
import Navbar from './components/common/Navbar';
import Catalog from './components/Customer/Catalog';
import Cart from './components/Customer/Cart';
import Checkout from './components/Customer/Checkout';
import Inventory from './components/Admin/Inventory';
import Sales from './components/Admin/Sales';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <InventoryProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/admin/inventory" component={Inventory} />
          <Route path="/admin/sales" component={Sales} />
        </Switch>
      </Router>
    </InventoryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// implementacion de todas las variantes para su correcto funcionamiento 

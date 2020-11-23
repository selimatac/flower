import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import ProductCategory from './pages/ProductCategory';
import Product from './pages/Product';
import ProductProvider from './contexts/ProductContext';



function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path='/urun/:id' component={Product} />
          <Route path='/urunler' component={ProductCategory} />
          <Route exact path='/' component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
      </ProductProvider>
  );
}

export default App;

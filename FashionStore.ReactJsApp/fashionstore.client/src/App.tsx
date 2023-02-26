import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppHeader from './components/AppHeader';
import { StoreProvider } from './context/StoreContext';
import Bastket from './features/basket/Basket';
import ProductDetail from './features/product/ProductDetail';
import ProductList from './features/product/ProductList';
import ProductPage from './features/product/ProductPage';

function App() {
  return (
    <div className='App'>
      <StoreProvider>
        <AppHeader></AppHeader>
        <Routes>
          <Route path='product' element={<ProductPage />}>
            <Route index element={<ProductList />} />
          </Route>
          <Route path='product/:productId' element={<ProductDetail />} />
          <Route path='basket' element={<Bastket />} />
        </Routes>
      </StoreProvider>
    </div >
  );
}

export default App;

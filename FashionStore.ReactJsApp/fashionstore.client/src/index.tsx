import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import ProductDetail from './features/product/ProductDetail';
import ProductPage from './features/product/ProductPage';
import ProductList from './features/product/ProductList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <BrowserRouter >
    <Routes>
      <Route path='/' element={<App/>}>
        <Route  path='product' element={<ProductPage/>}>
          <Route index element={<ProductList/>}/>
        </Route>
        <Route path='product/:productId' element={<ProductDetail/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
